import  axios from 'axios';
import env from '../.env.local.js'


const searchBusAPI = async (searchBus) => {

    const response = await axios.get(`${env.IP}/api/searchBus` , searchBus , { headers: { 'Content-Type': 'application/json' } });
    return response;
}

export default searchBusAPI;