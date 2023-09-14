import React from 'react'
import Header from '../components/header/Header'
import LoginForm from '../components/forms/login/LoginForm'
import Footer from '../components/footer/Footer'
export default function Login() {
  return (
    <React.Fragment>
        <Header/>
        <LoginForm/>
        <Footer/>
    </React.Fragment>
  )
}
