import {Routes, Route} from 'react-router-dom'
import Login from './routes/Login'
import Home from './routes/Home'
import Navbar from './components/Navbar'

const App = () =>{

  return (
    <>
    <Navbar />
    <h1>APP con Firebase</h1>

     <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/login' element={<Login />} />
    </Routes>  
    </>
  );
};

export default App;
