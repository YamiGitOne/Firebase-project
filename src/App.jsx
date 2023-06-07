import {Routes, Route} from 'react-router-dom'
import Login from './routes/Login'
import Register from './routes/Register'
import Home from './routes/Home'
import Navbar from './components/Navbar'
import RequireAuth from "./components/RequireAuth";
import { useContext } from 'react';
import { UserContext } from "./context/UserProvider";

const App = () =>{

    const {user} = useContext(UserContext)
    if(user === false){
      return <p>Loading user...</p>
    }

  return (
    <>
    <Navbar />
    <h1>APP con Firebase</h1>

     <Routes>
         <Route path='/' 
         element={
          <RequireAuth>
            <Home />
         </RequireAuth>
         } 
         />
         <Route path='/login' element={<Login />} />
         <Route path='/register' element={<Register />} />
    </Routes>  
    </>
  );
};

export default App;
