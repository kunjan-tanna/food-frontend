import axios from "../../../configs/axiosConfig";
import { history } from "../../../history";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/*For Register */

//Create Add User
export const RegUsers = (data) => async (dispatch) => {
   let obj = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      pinCode: data.pinCode,
      address: data.address,
      mobile: data.mobile,
   };
   const res = await axios.post("create/users", obj);
   return res;
};

//Get User By ID
export const getUserId = (id) => async (dispatch) => {
   const res = await axios.get(`/get/users/${id}`);
   return res;
};

//Update Add User
export const UpdateUsers = (id, data) => async (dispatch) => {
   let obj = {
      userId: data._id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      pinCode: data.pinCode,
      address: data.address,
      mobile: data.mobile,
   };

   const res = await axios.put(`/edit/users/${id}`, obj);
   return res;
};

/*For Login*/
export const loginWithJWT = (user) => {
   return (dispatch) => {
      axios
         .post("/signin", {
            email: user.email,
            password: user.password,
         })
         .then((response) => {
            let userInfo = response.data.user;

            if (userInfo) {
               dispatch({
                  type: "LOGIN_WITH_JWT",
                  payload: {
                     userInfo,
                     accessToken: response.data.token,
                  },
               });
               // console.log("Sucess");
               toast.success("Login Successfully", {
                  position: toast.POSITION.BOTTOM_RIGHT,
               });
               setTimeout(() => {
                  history.push("/place");
               }, 2000);
            } else {
               // console.log("Sucess");
               toast.success("User email doesn't exist", {
                  position: toast.POSITION.BOTTOM_RIGHT,
               });
            }
         })
         .catch((error) => {
            // show error message in Toast
            toast.error("User email doesn't exist", {
               position: toast.POSITION.BOTTOM_RIGHT,
            });
         });
   };
};
//Logout Action
export const logout = () => {
   return (dispatch) => {
      dispatch({ type: "LOGOUT" });
      history.push("/");
   };
};

/*Login With Google*/

//Create Add User
export const logInGoogle = (data) => {
   let obj = {
      tokenId: data.tokenId,
   };
   return (dispatch) => {
      axios
         .post("/googlelogin", obj)
         .then((response) => {
            let userInfo = response.data.user;

            if (userInfo) {
               dispatch({
                  type: "LOGIN_WITH_JWT",
                  payload: {
                     userInfo,
                     accessToken: response.data.token,
                  },
               });
               // console.log("Sucess");
               toast.success("Login Successfully", {
                  position: toast.POSITION.BOTTOM_RIGHT,
               });
               setTimeout(() => {
                  history.push("/place");
               }, 2000);
            } else {
               // console.log("Sucess");
               toast.success("User email doesn't exist", {
                  position: toast.POSITION.BOTTOM_RIGHT,
               });
            }
         })
         .catch((error) => {
            // show error message in Toast
            toast.error("User email doesn't exist", {
               position: toast.POSITION.BOTTOM_RIGHT,
            });
         });
   };
};

/*Login With Google*/

//Create Add User
export const logInFacebook = (data) => {
   let obj = {
      userID: data.userID,
      accessToken: data.accessToken,
   };

   return (dispatch) => {
      axios
         .post("/facebooklogin", obj)
         .then((response) => {
            let userInfo = response.data.user;

            if (userInfo) {
               dispatch({
                  type: "LOGIN_WITH_JWT",
                  payload: {
                     userInfo,
                     accessToken: response.data.token,
                  },
               });
               // console.log("Sucess");
               toast.success("Login Successfully", {
                  position: toast.POSITION.BOTTOM_RIGHT,
               });
               setTimeout(() => {
                  history.push("/place");
               }, 2000);
            } else {
               // console.log("Sucess");
               toast.success("User email doesn't exist", {
                  position: toast.POSITION.BOTTOM_RIGHT,
               });
            }
         })
         .catch((error) => {
            // show error message in Toast
            toast.error("User email doesn't exist", {
               position: toast.POSITION.BOTTOM_RIGHT,
            });
         });
   };
};
