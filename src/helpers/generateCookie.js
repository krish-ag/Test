import sign  from "jwt-encode";
import Cookies from "js-cookie";


const generateCookie = async (data)=>{
    try{
        const {email, username, first_name, last_name, session_id, is_email_verified, message, is_driver} = data;
        const tokenData = {
            email : email,
            username : username,
            first_name : first_name,
            last_name : last_name,
            session_id : session_id,
            is_email_verified : is_email_verified,
            is_driver : is_driver
          };

        const token = await sign(tokenData, "AuthSystemBuild", {
            expiresIn: "30d",
          });
        Cookies.set("session_id", token, { expires: 30 });

        return {
            message : "success",
            token : token
        }

        

    }
    catch(err){
        console.log(err)
    }
    
}


export default generateCookie;



