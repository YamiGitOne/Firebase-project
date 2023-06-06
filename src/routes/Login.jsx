
import {useContext} from 'react'
import {UserContext} from "../context/UserProvider"

const Login = () => {

    const {user} = useContext(UserContext)

    return(
        <>
        <h1>Login</h1>
        <h2>{user ? "En linea" : "Offline"}</h2>
        </>
    )
}

export default Login;