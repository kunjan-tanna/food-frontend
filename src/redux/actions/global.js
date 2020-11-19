import axios from "../../configs/axiosConfig";

//get All Banquet
export const getBanquet = () => async (dispatch) => {
   const res = await axios.get("/banquet");
   if (res) {
      dispatch({ type: "BANQUET", payload: res.data });
   }
   return res;
};
//get NearBY Banquet
export const getNearBanquet = (lng, lat) => async (dispatch) => {
   const res = await axios.get(`/location?lng=${lng}&lat=${lat}`);

   return res;
};
//get the all bundles
export const getBundle = () => async (dispatch) => {
   const res = await axios.get("/bundle");

   return res;
};
//update Increment Products
export const getIncProduct = (id, data) => async (dispatch) => {
   const res = await axios.put(`/edit/inc/product/${id}`, data);

   return res;
};
//update Decrement Products
export const getDecProduct = (id, data) => async (dispatch) => {
   const res = await axios.put(`/edit/dec/product/${id}`, data);

   return res;
};
