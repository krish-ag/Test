import React from 'react'

export default function Card() {
  return (
    <React.Fragment>

        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className='mb-4' width="50" height="50" src="https://img.icons8.com/ios-filled/50/B5B5B5/bus.png" alt="bus"/>
            <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">GLA tours and travels</h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">A bus is traveling from Delhi to Manali (235 km) in 8 hours and 30 minutes.</p>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Departure time: 23:00 pm</p>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Arrival time: 07:30 am</p>
            <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
                See our guideline
                <svg className="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                </svg>
            </a>
        </div>

    </React.Fragment>
  )
}
