import React, { useState } from 'react'

export default function BusCard(props) {

    const {bus} = props;

    const [seats, setSeats] = useState(false)

    const toggleSeats = () => {
        setSeats(!seats)
    }

  return (
    <React.Fragment>
        <div className="col-span-3">
   <div className="p-1">
      <div className="h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">

<div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#" className='flex justify-between'>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{bus.bus_name}</h5>
        <div className="">
        <h6 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">{bus.source} --- {bus.destination}</h6>
        </div>
    </a>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{bus.bus_description}</p>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Boarding time: {bus.boarding_timing}</p>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Boaring Date: {bus.boarding_date}</p>
    <a href="#" className="inline-flex mr-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">
        Track bus
        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
    <a onClick={toggleSeats} className="inline-flex ml-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">
        Book tickets
        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
    {seats && (<span className="my-4 text-white">Total Seats Available : {bus.total_seats}</span>)}
</div>

      </div>
   </div>
</div>
    </React.Fragment>
  )
}
