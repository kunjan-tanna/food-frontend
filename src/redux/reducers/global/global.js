import { act } from "react-dom/test-utils";

export const initialState = {
   banquets: [],
   data: [],
};

//To Store the Actions
const global = (state = initialState, action) => {
   switch (action.type) {
      case "BANQUET":
         return Object.assign({}, state, { banquets: action.payload });
      case "EX_PRODUCT":
         return Object.assign({}, state, { data: action.payload });
      case "DEL_ITEM":
         return { data: [] };
      case "DEL_PAR_ITEM":
         return {
            data: [...state.data.filter((item) => item !== action.payload)],
         };
      default:
         return state;
   }
};
export default global;
