import './App.css';
import Home from "./pages/Home";
import Login from './pages/Login';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/signup" element={<Signup />}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route path="*" element={<h1>404 Not Found</h1>}/>
        <Route path='/about' element={<AboutUs/>}/>

      </Routes>
    </BrowserRouter>
      
    </React.Fragment>
  );
}

export default App;
