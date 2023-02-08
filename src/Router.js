import {Routes, Route} from "react-router-dom"
import Register from './Component/Register'
import Login from "./Component/Login"
import Profile from "./Component/Profile"
import PostLogin from "./Component/PostLogin"
import HomePage from "./Component/HomePage"
import Register2 from "./Component/Register2"
import EventDetails from "./Component/EventDetails"
import Navbar from "./Component/Navbar"

const Router = () => {

    // const location = useLocation();


    return(

        <>
        {/* {location.pathname !== "/login" && location.pathname !== "/register" && location.pathname !== "/registertwo" && location.pathname !== "/postlogin" ? <Navbar /> : null} */}
        <Routes>
        <Route path='/' element={<Navbar />} >
            <Route path='/' element={<HomePage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/eventdetails/:id" element={<EventDetails/>}/>
            </Route>
            <Route path='/register' element={<Register />} />
            <Route path='/registertwo' element={<Register2 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/postlogin" element={<PostLogin />}/>    
        </Routes>
        </>
    )
}

export default Router