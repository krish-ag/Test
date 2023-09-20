
import axios from 'axios';
import env from "../.env.local";



const signupApi = async (formData) => {
    try{
        const response = await axios.post(`${env.IP}/accounts/signup/`, formData, { headers: { 'Content-Type': 'application/json' } })

        return response.data;
    }
    catch(err){
        console.log(err)
    }
}

export default signupApi;