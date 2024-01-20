import axios from "axios";

let axiosInstance = axios.create({
    // baseURL:"https://blog-api-9mre.onrender.com/app/v1"
    baseURL:"http://localhost:5000/app/v1"
}) 

export default axiosInstance