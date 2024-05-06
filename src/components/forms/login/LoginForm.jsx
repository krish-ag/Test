import React from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie';

export default function LoginForm() {

    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
    });

    const handleChange =(e)=>{
        const { name, value } = e.target;
        console.log(name, value);
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new URLSearchParams(formData);
    
        try {
            const response = await fetch("http://localhost:3000/api/v1/users/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formDataToSend.toString()
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            console.log("data is" , data)
    
            if (data.statusCode === 200) {
                console.log("Login successful!");
                // Set the access token and refresh token

                const { accesstoken,refreshtoken } = data.data;
                Cookies.set("accesstoken", accesstoken, { expires: 10 });
                Cookies.set("refreshtoken", refreshtoken, { expires: 30 });
                console.log("accesstoken is" , accesstoken);
                console.log("refreshtoken is ", refreshtoken);
                
                // Redirect or perform other actions upon successful login
            } else {
                console.log("Login failed:", data.message);
            }
        } catch (err) {
            console.error('Error during login:', err);
        }
    };
    

  return (
    <React.Fragment>
        <section className="bg-gray-50 my-5 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email or Username</label>
                      <input type="email" name="email" onChange={handleChange} value={formData.email} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" onChange={handleChange} value={formData.password} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
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
                      <Link to="/forgot-password" className="text-sm font-medium text-emerald-600 hover:underline dark:text-emerald-500">Forgot password?</Link>
                  </div>
                  <button type="submit" className="w-full text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <Link to="/signup" className="font-medium text-emerald-600 hover:underline dark:text-emerald-500">Sign up</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </React.Fragment>
  )
}
