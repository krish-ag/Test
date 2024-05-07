import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import signupApi from '../../../helpers/signupApi';
import licenseValidator from '../../../helpers/licenseValidator';
import env from '../../../.env.local.js'
import Cookies from 'js-cookie';


export default function SignupForm() {

  const [isPassenger, setIsPassenger] = useState(true);

  const togglePassenger = () => {
    setIsPassenger(true);
  }
  const toggleDriver = () => {
    setIsPassenger(false);
  }
  

    //   Fetching, Sending and connecting to backend

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: "",
        // confirm_password: "",
        licence_number: "",
    });

    React.useEffect(() => {
        setFormData({...formData, role: isPassenger? "passenger": "driver"});
        }, [isPassenger]);


    const handleChange =(e)=>{
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
        console.log(formData)
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            const response = await axios.post(`http://localhost:3000/api/v1/users/register`, 
            JSON.stringify(formData), 
            { 
                headers: { 
                    'Content-Type': 'application/json'
                }
            })
            console.log(response.data)
            if(response.data.statusCode === 200){
                const { accesstoken, refreshtoken, role } = response.data.data;
                Cookies.set("accessToken", accesstoken, 
                {
                    expires: 10
                });
                Cookies.set("refreshToken", refreshtoken, 
                {
                    expires: 30
                });
                Cookies.set("role", role);
            }
        }
        catch(err){
            console.log("error in registering user",err);
        }
    }

  return (
    <React.Fragment>
        <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto my-5 lg:py-0">
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center">
            <div style={{width:"50%", cursor:"pointer"}} onClick={togglePassenger} className="flex flex-col passenger p-3 items-center">
            <img src="https://img.icons8.com/dotty/80/0E9F6E/user.png" alt="user"/>
            <h3 className='dark:text-white'>Passenger</h3>
            </div>
            <div style={{width:"50%",  cursor:"pointer"}} onClick={toggleDriver} className="flex flex-col items-center driver p-3">
            <img src="https://img.icons8.com/dotty/80/0E9F6E/driver.png" alt="driver"/>
            <h3 className='dark:text-white'>Driver</h3>
            </div>
            </div>
            
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign up to new account
                </h1>
                {isPassenger && (<form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} encType='multipart/form-data'>
                    <div>
                        <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fullname</label>
                        <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} id="fullname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Create Password</label>
                        <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-emerald-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-emerald-600 dark:ring-offset-gray-800"/>
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="w-full text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Sign up</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account? <Link to="/login" className="font-medium text-emerald-600 hover:underline dark:text-emerald-500">Sign in</Link>
                    </p>
                </form>)}

                {!isPassenger && (<form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                        <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                        <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} id="fullname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"/>
                    </div>
                    <div>
                        <label htmlFor="licence_number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">License Number</label>
                        <input type="text" name="licence_number" id="licence_number" value={formData.licence_number} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="license_number"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Create Password</label>
                        <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-emerald-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-emerald-600 dark:ring-offset-gray-800"/>
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="w-full text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Sign up</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account? <Link to="/login" className="font-medium text-emerald-600 hover:underline dark:text-emerald-500">Sign in</Link>
                    </p>
                </form>)}
            </div>
        </div>
  </div>
</section>
    </React.Fragment>
  )
}
