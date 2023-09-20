import  generateCookie  from "./generateCookie";
import axios from "axios";
import env from "../.env.local";
import Cookies from "js-cookie";




const loginApi = async (formData) => {
    try{
        console.log(env.IP);
        const response = await axios.post(`${env.IP}/accounts/login/`, formData, { headers: { 'Content-Type': 'application/json' } })

        const tokenMessage = await generateCookie(response.data);
        if(Cookies.get("session_id"))
            window.location.href = "/dashboard";
        else
            window.location.href = "/login";
    }
    catch(err){
        console.log(err)
    }
}


export default loginApi;