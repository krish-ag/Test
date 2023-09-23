import React, {useState} from 'react'
import searchBusAPI from '../../../helpers/searchBusAPI'

export default function Dashboard() {
    const [searchBus, setSearchBus] = useState({
        source: '',
        destination: '',
        date: '',
        noOfPassengers: '',
        bus: ''
    });
    const handleChange =(e)=>{
        const {name, value} = e.target;
        console.log(name, value, [name]);
        setSearchBus({...searchBus, [name]: value})
    }
    const handelsearch = (e) =>{
        e.preventDefault();
        console.log(searchBus);
        const response = searchBusAPI(searchBus);
        console.log(response);
    }
  return (
    <React.Fragment>

<nav className="bg-white dark:bg-gray-800 w-full z-20 left-0 bg-emerald-300">
  <div className="max-w-screen-xl grid grid-cols-3 md:grid-cols-3 gap-4 mx-auto p-4">
    <div className="flex items-center">
        <div>
            <input type="text" name='source' onChange={handleChange}  id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Source" required/>
        </div>
        <div className='p-2 bg-gray-800 border border-gray-700 rounded-xl mx-2'>

        <img width="50"  src="https://img.icons8.com/ios-filled/100/0E9F6E/sorting-arrows-horizontal.png" alt="sorting-arrows-horizontal"/>
        </div>
        <div>
            <input type="text" name='destination' id="last_name" onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Destination" required/>
        </div>
    </div>
    <div className="flex items-center">
        <div className='mr-2'>
            <input type="date" name='date' id="first_name" onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Source" required/>
        </div>
        <div className='ml-2'>
            <input type="number" name='noOfPassengers' id="first_name" onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="No. of Passengers" required/>
        </div>
    </div>
        <div className="flex items-center">
            <input type="text" name='bus' onChange={handelsearch} id="first_name" className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bus Name/Bus No" required/>
            <button type="button" onClick={handelsearch} className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-4 py-3 text-center mr-3 md:mr-0 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-blue-800 bg--500 shadow-lg shadow-emerald-500/50">Search</button>
        </div>
  </div>
</nav>

    </React.Fragment>
  )
}
