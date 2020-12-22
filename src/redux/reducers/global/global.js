export const initialState = {
   banquets: [],
   data: [],
   userInfo: "",
   accessToken: "",
};

//To Store the Actions
const global = (state = initialState, action) => {
   switch (action.type) {
      case "BANQUET":
         return Object.assign({}, state, { banquets: action.payload });
      case "EX_PRODUCT":
         return Object.assign({}, state, { data: action.payload });

      case "DEL_PAR_ITEM":
         return Object.assign({}, state, {
            data: [...state.data.filter((item) => item !== action.payload)],
         });

      case "LOGIN_WITH_JWT":
         return Object.assign({}, state, {
            userInfo: action.payload.userInfo,
            accessToken: action.payload.accessToken,
         });
      case "DEL_ITEM":
         return Object.assign({}, state, {
            data: [],
         });
      case "LOGOUT":
         return initialState;
      default:
         return state;
   }
};
export default global;
