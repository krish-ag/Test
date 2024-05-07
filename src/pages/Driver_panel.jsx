import React from 'react'
import D_dashboard from '../components/dashboard/driver-dashboard/D_dashboard'
import { useNavigate } from 'react-router-dom'
import isAuthenticated from '../helpers/isAuthenticated'
import Cookies from 'js-cookie'
import { useEffect } from 'react'

export default function Driver_panel() {
  const navigate = useNavigate();

  console.log(isAuthenticated())

  useEffect(() => {
    if(!Cookies.get("accessToken")){
      navigate('/login')
      return
    }
    else if(Cookies.get("role")!="driver"){
      navigate('/dashboard')
      return;
    }
  }, [])

  return (
    <React.Fragment>
      <D_dashboard/>
        
    </React.Fragment>
  )
}
