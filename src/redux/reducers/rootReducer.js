import globalReducer from "./global/global";
import orderIn from "./order/order";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const persistConfig = {
   key: "jwt",
   storage,
   whitelist: ["globalReducer", "orderIn"],
};

const rootReducer = combineReducers({
   globalReducer: globalReducer,
   orderIn: orderIn,
});
export default persistReducer(persistConfig, rootReducer);
