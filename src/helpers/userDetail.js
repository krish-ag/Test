import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";


const isDriver = async ()=>{
    try{
        return Cookies.get("role")==="driver"?true:false;
    }
    catch(err){
        console.log(err)
    }
    
}

export default isDriver;