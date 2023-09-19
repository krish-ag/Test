import  generateCookie  from "./generateCookie";
import axios from "axios";


const loginApi = async (formData) => {
    try{
        const response = await axios.post(`http://192.168.1.67:8000/accounts/login/`, formData, { headers: { 'Content-Type': 'application/json' } })
        const tokenMessage = generateCookie(response.data);
        console.log(tokenMessage);
        window.location.href = "/dashboard";
    }
    catch(err){
        console.log(err)
    }
}


export default loginApi;