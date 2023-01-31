import {Routes, Route} from "react-router-dom"
import App from './App'
import Register from './Component/Register'
import Login from "./Component/Login"
import Profile from "./Component/Profile"
import MainPage from "./Component/MainPage"
import HomePage from "./Component/HomePage"
import MapComponent from "./Component/MapComponent"
import Register2 from "./Component/Register2"

const Router = () => {

    return(
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/register' element={<Register />} />
            <Route path='/registertwo' element={<Register2 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/mainpage" element={<MainPage/>}/>
            <Route path="/homepage" element={<HomePage/>}/>
            <Route path="/map" element={<MapComponent/>}/>
        </Routes>
    )
}

export default Router