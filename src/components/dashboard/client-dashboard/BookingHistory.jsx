import React from 'react'

export default function BookingHistory() {
  return (
    <React.Fragment>

<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<span className=" my-2 bg-emerald-100 text-emerald-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-emerald-400 border border-emerald-400">
  <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
  </svg>
  2 minutes ago
</span>
<span class="mx-5 bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Paid</span>
    <a href="#">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Delhi to Bombay </h5>
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">(DL 04 SL 4543) </h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Timing : 23:00 pm - 19:20 pm</p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Date : 29 september 2023</p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Source : Chandni Chowk</p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price : Rs. 1245/-</p>
    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">
        Cancle Booking
    </a>
</div>
</React.Fragment>
  )
}
