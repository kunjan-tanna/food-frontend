import globalReducer from "./global/global";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const persistConfig = {
   key: "jwt",
   storage,
   whitelist: ["globalReducer"],
};

const rootReducer = combineReducers({
   globalReducer: globalReducer,
});
export default persistReducer(persistConfig, rootReducer);
