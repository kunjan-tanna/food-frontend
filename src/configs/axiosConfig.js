import axios from "axios";
require("dotenv").config();

const axiosInstance = axios.create({
   baseURL:
      process.env.API_URL || "https://arcane-eyrie-87352.herokuapp.com/api/",
});

export default axiosInstance;
