import React, { useEffect } from 'react'
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

  return (
    <React.Fragment>
        <Header/>
        <Dashboard/>
        <DashboardBody/>
        <Footer/>
    </React.Fragment>
  )
}
