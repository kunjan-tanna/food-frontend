import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/storeConfig/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
   <Provider store={store}>
      <PersistGate persistor={persistor}>
         <HashRouter>
            <App />
         </HashRouter>
      </PersistGate>
   </Provider>,

   document.getElementById("root")
);
