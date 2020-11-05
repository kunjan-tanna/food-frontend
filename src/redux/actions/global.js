import axios from "../../configs/axiosConfig";

//get All Banquet
export const getBanquet = () => async (dispatch) => {
   const res = await axios.get("/banquet");
   if (res) {
      dispatch({ type: "BANQUET", payload: res.data });
   }
   // console.log(res)
   return res;
};
