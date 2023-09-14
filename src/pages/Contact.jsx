import React from 'react'
import Header from '../components/header/Header'
import Hero from '../components/heroSection/Hero'
import ContactUs from '../components/forms/contact/ContactUs'
import Footer from '../components/footer/Footer'


export default function Contact() {
  return (
    <React.Fragment>
        <Header />
        <Hero />
        <ContactUs />
        <Footer/>

    </React.Fragment>
  )
}
