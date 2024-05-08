import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Dashboard from '../components/dashboard/client-dashboard/Dashboard'
import DashboardBody from '../components/dashboard/client-dashboard/DashboardBody'
import isDriver from '../helpers/userDetail'
import { useNavigate } from 'react-router-dom'
import isAuthenticated from '../helpers/isAuthenticated'
import Cookies from 'js-cookie'

export default function Dashboards() {
  const navigate = useNavigate();
  const [buses, setBuses] = useState([]);
  const [searchState, setSearchState] = useState(false);

  console.log(isAuthenticated())

  useEffect(() => {
    if(!Cookies.get("accessToken")){
      navigate('/login')
      return
    }
    else if(Cookies.get("role")==="driver"){
      navigate('/dashboard-driver')
      return;
    }
  }, [])

  const updateBuses = (newBuses) => {
    setBuses(newBuses);
  };

  const updateSearchState = () => {
    setSearchState(!searchState);
  }

  return (
    <React.Fragment>
        <Header/>
        <Dashboard updateBuses={updateBuses} />
        <DashboardBody searchBuses={buses} searchState={searchState} updateSearchState={updateSearchState}/>
        <Footer/>
    </React.Fragment>
  )
}
