// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useEffect,useState } from "react";

// import useLogged from "../../logic/useLogged";
// import axios from "axios"

// const Protected = ({children}) => {
//     const token = localStorage.getItem("auth-token");
//     const [verify,setVerify] = useState(false)

// const [user, setUser] = useState(null);

// useEffect(() => {
//   const retrieveUser = async () => {
//     const userData = await useLogged();
//     setUser(userData);
//   };
//   retrieveUser();
// }, []);
//   if (!verify) {
//     alert("You must be logged in to access this page.");

//     return <Navigate to="/" replace />;
//   }
//   return children;
// }

// export default Protected
// import React, { useState, useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import useLogged from "../../logic/useLogged";
// import axios from "axios"
// const useUser = () => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem("auth-token"));

//   useEffect(() => {
//     const retrieveUser = async () => {
//       try {
//         const res = await axios.get("https://back-end-paris-together-meleelyes.vercel.app/request/user", {
//           headers: {
//             authorization: token,
//           },
//         });
//         setUser(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     retrieveUser();
//   }, [token]);

//   return [user];
// };

import { UserContext } from "../../Context/UserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export default function Protected({ children }) {
    const [userLogged, setUserLogged] = useContext(UserContext);

  if (!userLogged) {
    alert("You must be logged in to access this page.");
    return <Navigate to="/" replace />;
  }

  setUserLogged(true)
  return children;
}
