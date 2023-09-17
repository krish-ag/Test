import React, {useState} from 'react'

export default function ForgotPassword() {
  const [forgotPasswordData, setForgotPasswordData] = new useState({
    email : null,
    otp : null,
    newPassword: null,
    confirmPassword: null
  });
  const [forgotPasswordState, setForgotPasswordState] = new useState("email");
  const handelEmail = ()=>{
    // do something
    setForgotPasswordState("otp");
  }
  const handelotp = ()=>{
    setForgotPasswordState("password");
  }
  const handelPassword = ()=>{
    console.log("Success")
  }
  return (
    <React.Fragment>
    <section className="bg-gray-50 dark:bg-gray-900">
<div className="flex flex-col items-center justify-center px-6 py-8 md:h-full my-5 lg:py-0">
<img className='mb-5' width="96" height="96" src="https://img.icons8.com/pulsar-line/96/0E9F6E/forgot-password.png" alt="forgot-password"/>
  <p className="mb-5 text-l dark:text-white">Enter your email and we'll send you an OTP to reset your Password</p>
  <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Forgot Password
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
              {forgotPasswordState === "email" && (<><div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email or username</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={forgotPasswordData.email} onChange={(e)=>setForgotPasswordData({...forgotPasswordData, email : e.target.value})} placeholder="name@company.com"/>
              </div>
              <button type="submit" className="w-full text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800" onClick={handelEmail}>Get OTP</button></>)}
              {forgotPasswordState === "otp" && (<><div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter OTP</label>
                  <input type="number" value={forgotPasswordData.otp} onChange={(e)=>setForgotPasswordData({...forgotPasswordData, otp : e.target.value})}  name="password" id="password" placeholder="123456" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              </div>
              <button type="submit" className="w-full text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800" onClick={handelotp}>Submit OTP</button>
              </>)}
              {forgotPasswordState === "password" &&(<><div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                  <input type="password" value={forgotPasswordData.newPassword} onChange={(e)=>setForgotPasswordData({...forgotPasswordData, newPassword : e.target.value})} name="password1" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              </div>
              <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                  <input type="password" value={forgotPasswordData.confirmPassword} onChange={(e)=>setForgotPasswordData({...forgotPasswordData, confirmPassword : e.target.value})} name="password2" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              </div>
              <button type="submit" className="w-full text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800" onClick={handelPassword}>Change Password</button>
              </>)}
          </form>
      </div>
  </div>
</div>
</section>
</React.Fragment>
  )
}
