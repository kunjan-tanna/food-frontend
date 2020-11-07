import React, { Component } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { history } from "./history";
import Menu from "./navbar/menu";
import "../src/index.css";
import { connect } from "react-redux";

//Home Dashboard
import Home from "./views/Components/UserDashboard/Home";

class Routes extends Component {
   render() {
      return (
         <div>
            <Router history={history}>
               <Menu />
               <Switch>
                  {/* For Dashboard */}
                  <Route exact path="/" component={Home} />
               </Switch>
            </Router>
         </div>
      );
   }
}
//Once data are store in dispatch variable so whenever use it variable to call like this in below:
const mapStateToProps = (state) => {
   return {};
};
export default connect(mapStateToProps)(Routes);
