import axios from "axios";



const interceptors1 = axios.create({
    baseURL: "https://api.multiavatar.com/"
})

export default interceptors1;