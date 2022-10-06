import axios from 'axios';

const logoutUser = async (event) => {
    try {
        event.preventDefault();
        await axios.post('logout');
        return window.location.href = "/login";
    } catch (error) {
        console.log(error)
    }
}

export default logoutUser;