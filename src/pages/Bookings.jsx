import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Dashboard from '../components/dashboard/client-dashboard/Dashboard'
import BookingPage from '../components/dashboard/client-dashboard/BookingPage'

export default function Bookings() {
  return (
    <React.Fragment>
        <Header/>
        <Dashboard/>
        <BookingPage/>
        <Footer/>
    </React.Fragment>
  )
}
