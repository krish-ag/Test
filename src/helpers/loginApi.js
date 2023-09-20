import  generateCookie  from "./generateCookie";
import axios from "axios";
import env from "../../.env.local";



const loginApi = async (formData) => {
    try{
        console.log(env.IP);
        const response = await axios.post(`${env.IP}/accounts/login/`, formData, { headers: { 'Content-Type': 'application/json' } })
        const tokenMessage = generateCookie(response.data);
        console.log(tokenMessage);
        window.location.href = "/dashboard";
    }
    catch(err){
        console.log(err)
    }
}


export default loginApi;