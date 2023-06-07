import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import {createContext, useState, useEffect} from "react";
import {auth} from "../firebase";

export const UserContext = createContext()

const UserProvider = ({children}) =>{

    const [user, setUser] = useState(false);

    //verifica si el usuario está autenticado
    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, user => {
            console.log(user);
            if(user){
                //desestructuración de los datos obtenidos 
                const {email, photoURL, displayName, uid} = user
                setUser({email, photoURL, displayName, uid})
            }else{
                setUser(null)
            }
        })
        return () => unsuscribe();
    }, []);

    //registro con email
    const registerUser = (email,password) => createUserWithEmailAndPassword(auth,email,password);

    //login
    const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

    //verificar password
    const signOutUser = () => signOut(auth);

    return(
        <UserContext.Provider value={{user, setUser, registerUser, loginUser, signOutUser}}>
                {children}
        </UserContext.Provider>
    )
}

export default UserProvider;