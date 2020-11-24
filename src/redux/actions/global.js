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
//Save the Product as well as ExtraItem
export const saveData = (data) => async (dispatch) => {
   //console.log("LEADCONTACT", data);
   dispatch({ type: "EX_PRODUCT", payload: data });
   return data;
};
//Remove the product item from localStorage
export const removeItem = () => async (dispatch) => {
   return dispatch({ type: "DEL_ITEM" });
};
//Remove the particular product item from localStorage
export const removeParticularItem = (data) => async (dispatch) => {
   return dispatch({ type: "DEL_PAR_ITEM", payload: data });
};
