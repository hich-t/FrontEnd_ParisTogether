import {Routes, Route} from "react-router-dom"
import App from './App'
import Register from './Component/Register'
import Login from "./Component/Login"
import Profile from "./Component/Profile"
import MainPage from "./Component/MainPage"
import HomePage from "./Component/HomePage"

const Router = () => {

    return(
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/register' element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/mainpage" element={<MainPage/>}/>
            <Route path="/homepage" element={<HomePage/>}/>
        </Routes>
    )
}

export default Router