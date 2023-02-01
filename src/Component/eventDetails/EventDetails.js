import React, { useState, useEffect } from "react";
import "./eventD.css";
import axios from "axios";

import Money from "../../Asset/money.png";
import Heart from "../../Asset/heart.png";
import Geo from "../../Asset/icons8-géorepérage-100.png";
import Calendar from "../../Asset/calendar.png";
import Handicap from "../../Asset/icons8-disability-64.png";
import Blind from "../../Asset/icons8-malvoyant-60.png";
import Deaf from "../../Asset/icons8-sourd-50 (1).png";
import Empty from "../../Asset/emptyHeart.png"
const EventDetails = (props) => {
  /*  const cat =
    "https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&facet=tags";

  const dataTen =
    "https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&facet=date_start&facet=date_end&facet=tags&facet=address_name&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=transport&facet=price_type&facet=access_type&facet=updated_at&facet=programs";
  const dataAll =
    "https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&rows=2092";
  const [fakeData, setFakeData] = useState();
  const [categorie, setCategorie] = useState();
   const [loading, setLoading] = useState(false); 

  const fetchDataCat = async () => {
    try {
      const callData = await axios.get(cat);
      setCategorie(callData.data.facet_groups[0].facets);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchData = async () => {
    try {
      const callData = await axios.get(dataAll);
      setFakeData(callData.data.records);
      setLoading(true); 
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
    fetchDataCat();
  }, []);
 */
  const colorTagMatcher = (tag) => {
    const b = [
      { Concert: "#D8D4F2" },
      { Musique: "#2C666E" },
      { Atelier: "#824C71" },
      { Enfants: "#827081" },
      { Loisirs: "#B36A5E" },
      { Littérature: "#284B63" },
      { Conférence: "#704C5E" },
      { Théâtre: "#3A5743" },
      { Expo: "#C4B2BC" },
      { Cinéma: "#5A9367" },
      { Danse: "#5CAB7D" },
      { "Art contemporain": "#C97C5D" },
      { "Spectacle musical": "#3B7080" },
      { Sport: "#44633F" },
      { Histoire: "#0A090C" },
      { Innovation: "#88A09E" },
      { Balade: "#706993" },
      { Nature: "#153243" },
      { Peinture: "#4A2545" },
      { Photo: "#331E38" },
      { Solidarité: "#78290F" },
      { Clubbing: "#FF36AB" },
      { LGBT: "#642CA9" },
      { "Jeux 2024": "#D81E5B" },
      { Humour: "#D19C1D" },
      { Sciences: "#70A0AF" },
      { BD: "#EB5E55" },
      { "Street-art": "#3A3335" },
      { Gourmand: "#B88C9E" },
      { Cirque: "#FF7D00" },
      { Salon: "#8DA1B9" },
      { Brocante: "#646E68" },
      { Santé: "#3F4B3B" },
    ];
    let col = b.filter((e) => e[tag]);
    return String(Object.values(col[0]));
  };

  const split = (text) => {
    let result = text.split(";");
    return result;
  };

  return (
    <>
      <div key={props.event.fields.id} className="container">
        <div className="card">
          <div className="card-header">
            <img className="ico-coeur" src={Heart} alt="user" />
{/*             <button
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
  </button> */}
            <img
              className="card-img"
              src={`${props.event.fields.cover_url}`}
              alt="rover"
            />
          </div>
          <div className="card-body taged">
            {props.event.fields.tags && (
              <div className="taged">
                {split(props.event.fields.tags).map((e) => {
                  return (
                    <span
                      style={{ backgroundColor: colorTagMatcher(e) }}
                      className="tag"
                    >
                      {e}
                    </span>
                  );
                })}
              </div>
            )}
            <h5 className="titleCard">{props.event.fields.title}</h5>

            <p className="textCard">{props.event.fields.lead_text}</p>
            <div className="line"></div>
            <div className="user">
              <div className="user-info">
                {props.event.fields.address_street &&
                  props.event.fields.address_zipcode &&
                  props.event.fields.address_city && (
                    <div className="location">
                      <img src={Geo} alt="" />
                      <div className="adress">{`${props.event.fields.address_street}  ${props.event.fields.address_zipcode}  ${props.event.fields.address_city}`}</div>
                    </div>
                  )}

                {props.event.fields.date_start && (
                  <div className="timeDate">
                    <img className="calendar" src={Calendar} alt="" />
                    <div className="date">
                      {new Date(props.event.fields.date_start)
                        .toLocaleString()
                        .slice(-20, -10)}
                    </div>
                  </div>
                )}

                <div className="handicap">
                  <div className="mob">
                    {props.event && (
                      <>
                        {props.event.fields.pmr === 1 && (
                          <>
                            <img className="pmr" src={Handicap} alt="" />
                          </>
                        )}
                      </>
                    )}
                  </div>
                  <div className="blind">
                    {props.event && (
                      <>
                        {props.event.fields.blind === 1 && (
                          <>
                            <img className="pmr" src={Blind} alt="" />
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>
                {props.event.fields.price_type !== "gratuit" && (
                  <img className="ico" src={Money} alt="user" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
