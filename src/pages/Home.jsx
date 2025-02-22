import React from 'react'
import Hero from '../components/heroSection/Hero'
import Header from '../components/header/Header'
import DisplayCont from '../components/publicTransportNearMe/DisplayCont'
import Footer from '../components/footer/Footer'

export default function Home() {
  return (
    <React.Fragment>
        <Header />
        <Hero />
        <DisplayCont />
        <Footer />
    </React.Fragment>
  )
}
