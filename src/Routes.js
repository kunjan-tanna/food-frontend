import React, { Component } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { history } from "./history";
import "../src/index.css";
import { connect } from "react-redux";

//Home Dashboard
import Home from "./views/Components/UserDashboard/Home";
//Menu
import Menus from "./views/Components/Menu";
//Register
import Register from "./views/Components/Register";
//Place
import Place from "./views/Components/Place";

class Routes extends Component {
   render() {
      return (
         <div>
            <Router history={history}>
               <Switch>
                  {/* For Dashboard */}
                  <Route exact path="/" component={Home} />
                  {/* For Display Menu */}
                  <Route exact path="/menu" component={Menus} />
                  {/* For Display Register*/}
                  <Route exact path="/register" component={Register} />
                  {/* For Display Place*/}
                  <Route exact path="/place" component={Place} />
               </Switch>
            </Router>
         </div>
      );
   }
}
//Once data are store in dispatch variable so whenever use it variable to call like this in below:
const mapStateToProps = (state) => {
   return {
      userInfo: state.globalReducer.userInfo,
   };
};
export default connect(mapStateToProps)(Routes);
