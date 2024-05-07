import Cookies from "js-cookie";

export default function isAuthenticated() {
    try {
        return Cookies.get("accessToken") ? true : false;
    } catch (err) {
        console.log(err);
    }
} 