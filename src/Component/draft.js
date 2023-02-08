  /*   const filterTag = () => {
    filteredTag === 10 ? setFilteredTag(-1) : setFilteredTag(10);
    lessMinus === PlusIcon ? setLessMinus(MinusIcon) : setLessMinus(PlusIcon)

  }; */



            {/*     <button onClick={() => filterTag()}>
            {" "}
            <img src={lessMinus} alt="" />
          </button> */}



          var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          };
        
          // function success(pos) {
          //   var crd = pos.coords;
        
          //   console.log("Votre position actuelle est :");
          //   console.log(`Latitude : ${crd.latitude}`);
          //   console.log(`Longitude : ${crd.longitude}`);
          //   console.log(`La précision est de ${crd.accuracy} mètres.`);
          // }
        
          // function error(err) {
          //   console.warn(`ERREUR (${err.code}): ${err.message}`);
          // }
          // const actualPosition = () => {
          //   return navigator.geolocation.getCurrentPosition(success, error, options);
          // };
        

           /* `https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&rows=${numberOfResult}&facet=tags&refine.tags=${e}` */



           <div className="navbar">
           <img src={Logo} width="100px" alt="logoParisTogether" />
           <div style={{ display: "flex", gap: "20px" }}>
             <img
               src={profile}
               width="30px"
               height={"30px"}
               style={{ borderRadius: "100px" }}
               alt="profile"
             />
             <Link to="/register">
               <button className="custom-btn btn-13">Connexion</button>
             </Link>
             <Link to="/login">
               <button className="custom-btn btn-13">Créer un compte</button>
             </Link>
           </div>
         </div>



 // const [location, setLocation] = useState(null);
  // const [consentGeoLoc, setConsentGeoLoc] = useState(true);

  // const geoLocationCoord = () => {
  //   setConsentGeoLoc(true);
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       setLocation([position.coords.latitude, position.coords.longitude]);
  //     },
  //     () => {
  //       console.error("Sorry the Geolocation");
  //     }
  //   );
  //   handleShow();
  // };


  useEffect (()=>{
    axiosFetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&rows=3000',setAllData)
    axiosFetch("https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&sort=updated_at",setEvent)
  }, [])
  