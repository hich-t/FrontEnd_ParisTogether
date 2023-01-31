import useLogged from "../logic/useLogged";


const MainPage = () => {

const [user] = useLogged()

    return (
        <>
           <h1>Welcome Back {user.last_name} {user.first_name}</h1> 
        </>
    )
}

export default MainPage