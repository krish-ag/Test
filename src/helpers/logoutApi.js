

import Cookies from "js-cookie";

const logoutApi = async () => {
    Cookies.remove("session_id");
    window.location.href = "/login";
}

export default logoutApi;