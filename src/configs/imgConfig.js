require("dotenv").config();

const axiosInstance = {
   baseURL:
      process.env.REACT_APP_PUBLIC_PATH ||
      "https://arcane-eyrie-87352.herokuapp.com/upload/",
};

export default axiosInstance;
