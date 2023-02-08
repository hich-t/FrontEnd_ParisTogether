import {Routes, Route} from "react-router-dom"
import App from './App'
import Register from './Component/Register'
import Login from "./Component/Login"
import Profile from "./Component/Profile"
import PostLogin from "./Component/PostLogin"
import HomePage from "./Component/HomePage"
import MapComponent from "./Component/MapComponent"
import Register2 from "./Component/Register2"
import EventDetails from "./Component/EventDetails"
import { useLocation } from "react-router-dom";
import Navbar from "./Component/Navbar"

const Router = () => {

    const location = useLocation();


    return(

        <>
        {location.pathname !== "/login" && location.pathname !== "/register" && location.pathname !== "/registertwo" && location.pathname !== "/postlogin" ? <Navbar /> : null}
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<Register />} />
            <Route path='/registertwo' element={<Register2 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/postlogin" element={<PostLogin />}/>
            <Route path="/homepage" element={<HomePage/>}/>
            <Route path="/map" element={<MapComponent/>}/>
            <Route path="/eventdetails/:id" element={<EventDetails/>}/>
        </Routes>
        </>
    )
}

export default Router