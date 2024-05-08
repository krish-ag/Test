import React, { useState } from "react";
import Sidebar from "../../Sidebar";
import axios from "axios";
import Cookies from 'js-cookie';
export default function AddBusForm() {
  const [busDetails, setBusDetails] = useState({
    busName: "",
    busNumber: "",
    type: "",
    destination: "",
    source: "",
    busRoute: "",
    noOfSeats: "",
    sourceTiming: "",
    message: "",
    coordinates: {
      lat: 0,
      lng: 0,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value, [name]);
    setBusDetails({ ...busDetails, [name]: value });
  };
  const handelAddBus = async (e) => {
   e.preventDefault();
   console.log(busDetails);
   const response = await axios.post(
       "https://tracking-jboc.onrender.com/api/v1/bus/",
       busDetails,
       {
           headers: {
               "authorization": `bearer ${Cookies.get('accessToken')}`,
               "Content-Type": "application/json",
           },
       }
   );
   console.log(response.data);
};

  return (
    <React.Fragment>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <div className="grid max-w-screen-xl px-4 py-3 mx-auto gap-1  grid-cols-4">
        <Sidebar
          content={[
            "Dashboard",
            "History",
            "Add new bus",
            "Current bus status",
            "Alerts",
            "Sign out",
          ]}
        />
        <section className="bg-gray-50 col-span-3 dark:bg-gray-900">
          <div className="flex flex-col px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Add new bus
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handelAddBus}
                >
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Bus name
                      </label>
                      <input
                        type="text"
                        name="busName"
                        onChange={handleChange}
                        id="busName"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Parivahan seva"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Bus number
                      </label>
                      <input
                        type="text"
                        name="busNumber"
                        onChange={handleChange}
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="DL 01 CJ 4324"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="">
                    <label
                      for="countries"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Select a bus type
                    </label>
                    <select
                      id="countries"
                      name="type"
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Choose a type</option>
                      <option value="sleeper">Sleeper</option>
                      <option value="semi-sleeper">Semi sleeper</option>
                      <option value="luxury">Luxury</option>
                      <option value="public">Public</option>
                      <option value="volvo">Volvo</option>
                      <option value="ac">AC</option>
                      <option value="non-ac">Non AC</option>
                    </select>
                  </div>
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        name="source"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Bus source
                      </label>
                      <input
                        type="text"
                        onChange={handleChange}
                        name="source"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Sadar Bazar"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Bus destination
                      </label>
                      <input
                        type="text"
                        onChange={handleChange}
                        name="destination"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Chandni Chowk"
                        required=""
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Bus route
                    </label>
                    <input
                      type="text"
                      name="busRoute"
                      onChange={handleChange}
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Sadar , Rajiv chowk , Narol plaza , India gate , Chandni chowk"
                      required=""
                    />
                  </div>
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Number of seats
                      </label>
                      <input
                        type="number"
                        name="noOfSeats"
                        onChange={handleChange}
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="40"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Source Timeing
                      </label>
                      <input
                        type="text"
                        name="sourceTiming"
                        onChange={handleChange}
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="23:00 pm"
                        required=""
                      />
                    </div>
                  </div>

                  <label
                    for="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your message(optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    onChange={handleChange}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
                  >
                    Add new bus
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
