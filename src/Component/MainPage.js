import axios from "axios";
import { useEffect,useState } from "react";

const MainPage = () => {
    const token = localStorage.getItem("auth-token")
const [user,setUser] = useState("")
useEffect(() => {
    axios
    .get("http://localhost:3001/request/user" , {headers : {"authorization" : token}})
    .then((res)=> setUser(res.data))
    .catch((err)=> console.log(err))
},[])

    return (
        <>
           <h1>Welcome Back {user.last_name} {user.first_name}</h1> 
        </>
    )
}

export default MainPage