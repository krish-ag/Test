import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import ForgotPasswordForm from '../components/forms/forgotPassword/ForgotPasswordForm'

export default function ForgotPassword() {
  return (
    <React.Fragment>
        <Header/>
        <ForgotPasswordForm/>
        <Footer/>
    </React.Fragment>
  )
}
