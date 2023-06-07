import { useContext, useState } from 'react';
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Register = () =>{

    const [email, setEmail] = useState('jerezyamilet@test.com');
    const [password, setPassword] = useState('123123');
    const {registerUser} = useContext(UserContext);
    const navegate = useNavigate();

    //evento para procesar formulario
    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log('procesando form: ', email, password);
        try{
            await registerUser(email, password);
            console.log("Usuario creado");
            navegate("/");
        }catch (error){
            console.log(error.code)
        }
    };

    return (
        <>
        <h1>Register</h1>
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
            <button className='btn btn-primary'>Registrar</button>
        </form>
        </>
    )
}
export default Register;