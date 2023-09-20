import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import signupApi from '../../../helpers/signupApi';
import licenseValidator from '../../../helpers/licenseValidator';
import env from '../../../.env.local.js'


export default function SignupForm() {

  const [isPassenger, setIsPassenger] = useState(true);

 

  const [emailVerificationData, setEmailVerificationData] = React.useState({
    otp: "",
    });

    const [verified, setVerified] = React.useState(false);

    const handleVerificationChange =(e)=>{
        const { name, value } = e.target;
        console.log(name, value);
        setEmailVerificationData({
            ...emailVerificationData,
            [name]: value
        });
    }

  const togglePassenger = () => {
    setIsPassenger(true);
  }
  const toggleDriver = () => {
    setIsPassenger(false);
  }
  

    //   Fetching, Sending and connecting to backend

    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        username: "",
        password: "",
        confirm_password: "",
        license_number: "",
    });

    React.useEffect(() => {
        console.log(isPassenger);
        setFormData({...formData, isUser: isPassenger});
        setEmailVerificationData({...emailVerificationData, isUser: isPassenger});
        }, [isPassenger]);


    const handleChange =(e)=>{
        const {name, value} = e.target;
        console.log(name, value, [name]);
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(formData);  
        if(formData.password !== formData.confirm_password){
            alert("Passwords do not match");
            return;
        }

        try{
            // check license number
            if (formData.license_number.length !== 0){
                const licenseValidationResponse = licenseValidator(formData.license_number, formData.full_name );
                console.log(licenseValidationResponse);
                // show message or error
            }
            const response = await signupApi(formData);
            setVerified(true);
        }
        catch(err){
            console.log(err);
        }
    }

    const handleOtpSubmit = async (e) =>{
        e.preventDefault();
        console.log(formData);
        console.log(emailVerificationData);

        try{
            const response = await axios.post(`${env.IP}/accounts/activate/`, emailVerificationData, { headers: { 'Content-Type': 'application/json' } })
			console.log(response.data);
            window.location.href = "/login"
        }
        catch(err){
            console.log(err);
        }
    }

  return (
    <React.Fragment>
        <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto my-5 lg:py-0">
  {!verified && (<><div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
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
                      <label htmlFor="full_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                      <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} id="full_name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"/>
                </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"/>
                  </div>
                  <div>
                      <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                      <input type="text" name="username" id="username" value={formData.username} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Create Password</label>
                      <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                  </div>
                  <div>
                      <label htmlFor="password2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                      <input type="password" name="confirm_password" id="password2" value={formData.confirm_password} onChange={handleChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
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
                      <label htmlFor="full_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                      <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} id="full_name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"/>
                </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"/>
                  </div>
                  <div>
                      <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                      <input type="text" name="username" id="username" value={formData.username} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"/>
                  </div>
                  <div>
                      <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">License Number</label>
                      <input type="text" name="license_number" id="username" value={formData.license_number} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Create Password</label>
                      <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                  </div>
                  <div>
                      <label htmlFor="password2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                      <input type="password" name="confirm_password" id="password2" value={formData.confirm_password} onChange={handleChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
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
      </div></>)}
          {verified && (<>
          <img className='mb-5' width="96" height="96" src="https://img.icons8.com/pulsar-line/96/0E9F6E/forgot-password.png" alt="forgot-password"/>
  <p className="mb-5 text-l dark:text-white">An OTP has been sent to your registered mail id</p>
          <div className="bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
            <h1 className="text-xxl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white my-5">
                  Email Verifying
              </h1>
              <form className="space-y-4 md:space-y-6 p-5" onSubmit={handleOtpSubmit}>
                <div>
                  <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter OTP</label>
                  <input type="number" value={emailVerificationData.otp} onChange={handleVerificationChange}  name="otp" id="otp" placeholder="123456" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              </div>
              <button type="submit" className="w-full text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Submit OTP</button>
              </form>
          </div>
          </>)}
  </div>
</section>
    </React.Fragment>
  )
}
