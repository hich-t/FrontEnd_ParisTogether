import axios from "axios";
import { useEffect,useState } from "react";

const useLogged = () => {
    
    const token = localStorage.getItem("auth-token")
    const [user,setUser] = useState("")

    useEffect(() => {
        axios
        .get("http://localhost:3001/request/user" , {headers : {"authorization" : token}})
        .then((res)=> setUser(res.data))
        .catch((err)=> console.log(err))
    },[])


return [user]

}

export default useLogged