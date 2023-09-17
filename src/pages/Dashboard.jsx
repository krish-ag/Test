import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Dashboard from '../components/dashboard/Dashboard'
import DashboardBody from '../components/dashboard/DashboardBody'

export default function ForgotPassword() {
  return (
    <React.Fragment>
        <Header/>
        <Dashboard/>
        <DashboardBody/>
        <Footer/>
    </React.Fragment>
  )
}
