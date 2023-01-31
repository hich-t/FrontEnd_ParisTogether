import { Link } from "react-router-dom";
import Logo from "../Asset/Asset 1.png";
import profile from "../Asset/profile.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import useLogged from "../logic/useLogged";
import MapComponent from "../Component/MapComponent"
import CalendarComponent from "../Component/Calendar"
import CalendarTest from "../Component/TestCalendar"


const HomePage = () => {
  const token = localStorage.getItem("auth-token");
  const [event, setEvent] = useState([]);
  const [tags, setTags] = useState([]);
  const [newEvent, setNewEvent] = useState([]);
  const [searchByCategorie, setSearchByCategorie] = useState(false);
  const [user] = useLogged();
  const [style, setStyle] = useState({});
 
  const styleFav = (e) => {
  if(user && user.favoriteEvent.includes(e)){
    return { backgroundColor: "red" }
  }
  else return { backgroundColor: "gray" }
 }



  const fetchTags = async () => {
    try {
      const callData = await axios.get(
        `https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&facet=tags`
      );
      setTags(callData.data.facet_groups);
    } catch (err) {
      console.log(err);
    }
    try {
      const callData = await axios.get(
        "https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&sort=updated_at"
      );
      setNewEvent(callData.data.records);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchEventByTags = async (e) => {
    try {
      const callData = await axios.get(
        `https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&&refine.tags=${e}`
      );
      setEvent(callData.data.records);
      setSearchByCategorie(!searchByCategorie);
    } catch (err) {
      console.log(err);
    }
  };

  const addFavorite = async (idEvent) => {
    axios
      .put(
        `http://localhost:3001/request/user`,
        { favoriteEvent: idEvent },
        { headers: { authorization: token } }
      )
      .then((res) => console.log(res.data))

      .catch((err) => {
        console.log(err)
      });

  };

  const removeFavorite = async (idEvent) => {
    axios
    .delete(
      `http://localhost:3001/request/user`,
      {data : {favoriteEvent: idEvent} , headers: { authorization: token } },
    )
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));

  }

  useEffect(() => {
    fetchTags();
  }, []);



  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <img src={Logo} width="100px" alt="logoParisTogether" />
        <div style={{ display: "flex", gap: "20px" }}>
          <img
            src={profile}
            width="30px"
            height={"30px"}
            style={{ borderRadius: "100px" }}
            alt="profile"
          />
          <Link to="/register">Connexion</Link>
          <Link to="/login">Créer un compte</Link>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
        }}
      >
        <h3>
          Video présentation + Phrase accrochage décrivant l’intérêt du site
        </h3>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>Catégorie :</p>
        {tags.map((e) =>
          e.facets.slice(0, 15).map((e, i) => (
            <button key={i} onClick={() => fetchEventByTags(e.name)}>
              {e.name}
            </button>
          ))
        )}
      </div>
      {!searchByCategorie && (
        <div style={{ display: "flex" }}>
          <p>Nouveautés :</p>
          {newEvent.length > 0 &&
            newEvent.map((e, i) => (
              <div key={i}>
                <img
                  src={e.fields.cover_url}
                  width="150px"
                  alt="eventPicture"
                />
                <p>{e.fields.title}</p>
                <button
                  style={
                    user && user.favoriteEvent.includes(e.fields.id)
                      ? { backgroundColor: "red" }
                      : { backgroundColor: "none" }
                  }
                  onClick={() =>  user && user.favoriteEvent.includes(e.fields.id) ?
                    removeFavorite(e.fields.id) :
                  addFavorite(e.fields.id)}
                >
                  Ajout favori
                </button>
              </div>
            ))}
        </div>
      )}
      {searchByCategorie && (
        <div style={{ display: "flex" }}>
          {event.length > 0 &&
            event.map((e, i) => (
              <div key={i}>
                <img
                  src={e.fields.cover_url}
                  width="150px"
                  alt="eventPicture"
                />
                <p>{e.fields.title}</p>
                <button
                  style={
                    styleFav(e.fields.id)
                  }
                  onClick={() => user && user.favoriteEvent.includes(e.fields.id) ?
                    removeFavorite(e.fields.id) :
                  addFavorite(e.fields.id)}
                >
                  Ajout favorit
                </button>
              </div>
            ))}
        </div>
      )} 
 {/* <MapComponent center={[48.866667,2.333333]} event={event}/>
<div style={{margin : "100px"}}>
<CalendarComponent/>
</div> */}

    </>
  );
};

export default HomePage;
