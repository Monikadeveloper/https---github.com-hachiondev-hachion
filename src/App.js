
import './App.css';
import { Home } from './Components/Home';
import Login from './Components/Login';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './Components/Register';
import RegisterNext from './Components/RegisterNext';
import RegisterHere from './Components/RegisterHere';
import LoginSuccess from './Components/LoginSuccess';
import ForgotPassword from './Components/ForgotPassword';
import Course from './Components/Course';
import QaAutomation from './Components/QaAutomation';
import CorporateTraining from './Components/CorporateTraining';

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
      </Routes></BrowserRouter>
    </>
  );
}

export default App;
