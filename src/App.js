import './App.css';
import Home from "./pages/Home";
import Login from './pages/Login';
import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import Cookies from 'js-cookie';
import NotFound from './pages/NotFound';
import userDetail from './helpers/userDetail';
import Driver_panel from './pages/Driver_panel';
import AddNewBus from './components/dashboard/driver-dashboard/addBus/AddNewBus';
import Bookings from './pages/Bookings';
import TrackMap from './pages/TrackMap';

function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        {!Cookies.get("session_id") && <Route exact path="/login" element={<Login />}/>}
        {!Cookies.get("session_id") && <Route exact path="/signup" element={<Signup />}/>}
        <Route exact path="/contact" element={<Contact />}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        {!Cookies.get("session_id") && <Route path='/forgot-password' element={<ForgotPassword/>}/>}
        {Cookies.get("session_id") && <Route path='/dashboard' element={userDetail().isDriver? (<Driver_panel/>): (<Dashboard/>)}/>}
        <Route path='/dashboard-driver' element={<Driver_panel/>}/>
        {/* {Cookies.get("session_id") && <Route path='/dashboard/add-bus' element={userDetail().isDriver && <AddNewBus/>}/>} */}
        <Route path='/dashboard-add-bus' element={<AddNewBus/>}/>
        <Route path='/dashboard-view-booking-history' element={<Bookings/>}/>
        <Route path='/dashboard-view-map' element={<TrackMap/>}/>
      </Routes>
    </BrowserRouter>
      
    </React.Fragment>
  );
}

export default App;
