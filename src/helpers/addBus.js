import axios from 'axios';
import env from "../.env.local";
import userDetail from './userDetail';


const addBus = async (bus) => {
    try{

        const getUser = await userDetail();
        bus["username"] = getUser.username;
        const response = await axios.post(`${env.IP}/api/bus`, bus, { headers: { 'Content-Type': 'application/json' } });
        console.log(response);
        return response;
    }
    catch(error){
        console.log(error);
    }
}

export default addBus;

    