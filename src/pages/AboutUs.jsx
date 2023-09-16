import React from 'react'
import AboutSection from '../components/aboutSection/AboutSection'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

export default function AboutUs() {
  return (
    <React.Fragment>
        <Header/>
        <AboutSection className="container my-5"/>
        <Footer/>
    </React.Fragment>
  )
}
