
import axios from 'axios';



const signupApi = async (formData) => {
    try{
        const response = await axios.post(`http://192.168.1.67:8000/accounts/signup/`, formData, { headers: { 'Content-Type': 'application/json' } })
        return response.data;
    }
    catch(err){
        console.log(err)
    }
}

export default signupApi;