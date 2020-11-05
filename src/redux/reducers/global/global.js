export const initialState = {
   banquets: [],
};

//To Store the Actions
const global = (state = initialState, action) => {
   switch (action.type) {
      case "BANQUET":
         return Object.assign({}, state, { banquets: action.payload });

      default:
         return state;
   }
};
export default global;
