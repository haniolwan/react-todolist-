import axios from 'axios';
import { gapi } from 'gapi-script';

const logoutUser = async (event) => {
    try {
        event.preventDefault();
        if (gapi.auth2) {
            gapi.auth2.getAuthInstance().disconnect();
        }
        await axios.post('logout');
        return window.location.href = "/signin";
    } catch (error) {
        console.log(error)
    }
}

export default logoutUser;