import { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Register = () =>{

    const navegate = useNavigate();
    const {registerUser} = useContext(UserContext);
    const {
        register, 
        handleSubmit, 
        formState: { errors },
        getValues
    } = useForm();

    const onSubmit = async(data) => {
        try{
            await registerUser(data.email, data.password);
            console.log("Usuario creado");
            navegate("/");
        }catch (error){
            console.log(error.code);
        }
    };

 
    return (
        <>
        <h1>Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
            type="email"
            placeholder="Ingrese email"
            {...register("email", { required: {
                value: true,
                message: 'Campo requerido'
            },
            pattern:{
                value: /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,15}/,
                message: "Formato de email incorrecto"
            } 
            })}
            >
            </input>
            {errors.email && <p>{errors.email.message}</p>}
            <input 
            type="password"
            placeholder="Ingrese password"
            {...register('password',{
                setValueAs: v => v.trim(),
                minLength: {
                value: 6,
                message: 'Tu clave debe ser mínimo e 6 carácteres'
            },
            validate: {
                trim: (v) =>{
                if (!v.trim()) {
                    return "NEGATIVO";
                 }
                return true;
                },
            },
        } 
            )}
            >
            </input>
            {errors.password && <p>{errors.password.message}</p>}

            {/* evaluar que dos contraseñas sean iguales */}
            <input 
            type="password"
            placeholder="Ingrese password"
            {...register('repassword',{
                validate: {
                    equals: (v) => v === getValues("password") ||
                    "No coinciden las contraseñas",
                },
            })}
            >
            </input>
            {
                errors.repassword && <p>{errors.repassword.message}</p>
            }
            <button className='btn btn-primary'>Registrar</button>
        </form>
        </>
    )
}
export default Register;