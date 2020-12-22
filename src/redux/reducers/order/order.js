export const initialState = {
   orderIn: "",
};

//To Store the Actions
const order = (state = initialState, action) => {
   switch (action.type) {
      case "ORDERIN":
         return Object.assign({}, state, { orderIn: action.payload });
      default:
         return state;
   }
};
export default order;
