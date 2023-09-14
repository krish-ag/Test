import React from 'react'
import Header from '../components/header/Header'
import SignupForm from '../components/forms/signup/SignupForm'
import Footer from '../components/footer/Footer'

export default function Signup() {
  return (
    <React.Fragment>
        <Header/>
        <SignupForm/>
        <Footer/>
    </React.Fragment>
  )
}
