import axios from "../../../configs/axiosConfig";

//Get the clientToken
export const getToken = (id) => async (dispatch) => {
   const res = await axios.get(`/payment/gettoken/${id}`);

   return res;
};
//Process payment
export const processPayment = (id, data) => async (dispatch) => {
   let obj = {
      amount: data.amount,
      paymentMethodNonce: data.paymentMethodNonce,
   };
   const res = await axios.post(`/payment/braintree/${id}`, obj);

   return res;
};
