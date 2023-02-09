import axios from "axios";
import { useEffect,useState } from "react";
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";

const useLogged = () => {
    const [userLogged, setUserLogged] = useContext(UserContext);
    const token = localStorage.getItem("auth-token")
    const [user,setUser] = useState("")

    useEffect(() => {
        axios
        .get("https://back-end-paris-together-meleelyes.vercel.app/request/user" , {headers : {"authorization" : token}})
        .then((res)=> res.data ? setUserLogged(true) & setUser(res.data) : setUserLogged(false) )
        // .then(setUserLogged(true))
        .catch((err)=> console.log(err))
    },[user])


return [user]
}

export default useLogged