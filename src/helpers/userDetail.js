import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";


const getUserDetail = async ()=>{
    try{
        const token = Cookies.get("session_id");
        const decoded = await jwt_decode(token);
        console.log(decoded)
        return decoded;
    }
    catch(err){
        console.log(err)
    }
    
}