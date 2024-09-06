
import './App.css';
import { Home } from './Components/UserPanel/Home';
import Login from './Components/UserPanel/Login';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './Components/UserPanel/Register';
import HaveAnyQuery from './Components/UserPanel/HaveAnyQuery';
import RegisterNext from './Components/UserPanel/RegisterNext';
import RegisterHere from './Components/UserPanel/RegisterHere';
import LoginSuccess from './Components/UserPanel/LoginSuccess';
import ForgotPassword from './Components/UserPanel/ForgotPassword';
import Course from './Components/UserPanel/Course';
import QaAutomation from './Components/UserPanel/QaAutomation';
import CorporateTraining from './Components/UserPanel/CorporateTraining';

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
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
      <Route path='/course' element={<Course/>}/>
      <Route path='/qaautomation' element={<QaAutomation/>}/>
      <Route path='/corporate' element={<CorporateTraining/>}/>
      <Route path='/haveanyquery' element={<HaveAnyQuery/>}/>
      </Routes></BrowserRouter>
    </>
  );
}

export default App;
