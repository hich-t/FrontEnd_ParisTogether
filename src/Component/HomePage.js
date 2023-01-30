import { Link } from "react-router-dom";
import Logo from "../Asset/Asset 1.png";
import axios from "axios";
import { useEffect, useState } from "react";

const HomePage = () => {

const [event,setEvent] = useState([])
const [tags,setTags] = useState([])

  const fetchTags = async () => {
    try {
      const callData = await axios.get(
        `https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&facet=tags`
      );
      setTags(callData.data.facet_groups);
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
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <>
      <img src={Logo} width="100px" alt="logoParisTogether" />
      <Link to="/register">Connexion</Link>
      <Link to="/login">Créer un compte</Link>
<div>
    {tags.map(e => e.facets.slice(0,11).map(e => <button onClick={()=>fetchEventByTags(e.name)}>{e.name}</button>))}
</div>

<div>
    {event.length > 0 && event.map(e => <p>{e.fields.title_event}</p>)}
</div>


      
    </>
  );
};

export default HomePage;
