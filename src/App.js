import './App.css';
import Home from "./pages/Home";
import Login from './pages/Login';
import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import Cookies from 'js-cookie';
import NotFound from './pages/NotFound';
import isDriver from './helpers/userDetail';
import Driver_panel from './pages/Driver_panel';
import AddNewBus from './components/dashboard/driver-dashboard/addBus/AddNewBus';
import Bookings from './pages/Bookings';
import TrackMap from './pages/TrackMap';

function App() {

  const accessToken = Cookies.get("accessToken");
  console.log("checking drive",isDriver())

  return (
    <React.Fragment>
    <BrowserRouter>
      <Routes>

        {/* Authenticated Routes */}

        <Route exact path="/" element={<Home />}/>
        <Route exact path="/login" element={!accessToken? <Login />: <Navigate to="/dashboard"/> }/>
        <Route exact path="/signup" element={!accessToken?  <Signup /> : <Navigate to="/dashboard"/>}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/forgot-password' element={!accessToken? <ForgotPassword/>  : <Navigate to="/"/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/dashboard-driver' element={<Driver_panel/>}/>
        {/* {Cookies.get("session_id") && <Route path='/dashboard/add-bus' element={userDetail().isDriver && <AddNewBus/>}/>} */}
        <Route path='/dashboard-add-bus' element={<AddNewBus/>}/>
        <Route path='/dashboard-view-booking-history' element={<Bookings/>}/>
        <Route path='/dashboard-view-map' element={<TrackMap/>}/>

        {/* Common Routes */}

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
      
    </React.Fragment>
  );
}

export default App;
