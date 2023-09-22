import axios from 'axios';
import env from "../.env.local";


const addBus = async (bus) => {
    try{
        const response = await axios.post(`${env.IP}/api/bus`, bus, { headers: { 'Content-Type': 'application/json' } });
        console.log(response);
        return response;
    }
    catch(error){
        console.log(error);
    }
}

export default addBus;

    