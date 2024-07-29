
import './App.css';
import { Home } from './Components/Home';
import Login from './Components/Login';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './Components/Register';
import RegisterNext from './Components/RegisterNext';
import RegisterHere from './Components/RegisterHere';

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
      </Routes></BrowserRouter>
    </>
  );
}

export default App;
