import './App.css';
import Home from "./pages/Home";
import Login from './pages/Login';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import Cookies from 'js-cookie';
import NotFound from './pages/NotFound';
import userDetail from './helpers/userDetail';

function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/signup" element={<Signup />}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        {Cookies.get("session_id") && <Route path='/dashboard' element={<Dashboard/>}/>}
      </Routes>
    </BrowserRouter>
      
    </React.Fragment>
  );
}

export default App;
