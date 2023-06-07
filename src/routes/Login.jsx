
import {UserContext} from "../context/UserProvider"
import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('jerezyamilet@test.com');
    const [password, setPassword] = useState('123123');
    
    const { loginUser } = useContext(UserContext)
    const navegate = useNavigate();

    //evento para procesar formulario
    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log('procesando form: ', email, password);
        try{
            await loginUser(email, password);
            console.log("Usuario logeado")
            navegate("/");
        }catch (error){
            console.log(error.code)
        }
    };

    return(
        <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type="email"
            placeholder="Ingrese email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            >
            </input>

            <input 
            type="password"
            placeholder="Ingrese password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            >
            </input>
            <button className='btn btn-primary'>Login</button>
        </form>
  
        </>
    );
};

export default Login;