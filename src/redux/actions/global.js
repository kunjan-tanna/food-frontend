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
