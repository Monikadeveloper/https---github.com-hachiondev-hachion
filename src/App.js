
import './App.css';
import { Home } from './Components/Home';
import Login from './Components/Login';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './Components/Register';
import RegisterNext from './Components/RegisterNext';
import RegisterHere from './Components/RegisterHere';
import LoginSuccess from './Components/LoginSuccess';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/registerverification' element={<RegisterNext/>}/>
      <Route path='/registerhere' element={<RegisterHere/>}/>
      <Route path='/loginsuccess' element={<LoginSuccess/>}/>
      </Routes></BrowserRouter>
    </>
  );
}

export default App;
