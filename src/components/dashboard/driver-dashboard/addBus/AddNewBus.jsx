import React from 'react'
import Header from '../../../header/Header'
import Footer from '../../../footer/Footer'
import AddBusForm from './AddBusForm'

export default function AddNewBus() {
  return (
    <React.Fragment>
        <Header />

      <AddBusForm />
      <Footer />

    </React.Fragment>
  )
}
