import React, { Component } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { history } from "./history";
import Menu from "./navbar/menu";
import "../src/index.css";
import { connect } from "react-redux";

//Home Dashboard
import Home from "./views/pages/UserDashboard/Home";

class Routes extends Component {
   render() {
      console.log("Routes", this.props);
      return (
         <div>
            <Router history={history}>
               <Menu />
               <Switch>
                  {/* For Dashboard */}
                  <Route exact path="/" component={Home} />
               </Switch>
               {/* <footer className="footer bg-dark py-2">
                  <div className="container">
                     <span className="text-white">
                        &copy; Copyright 2020 Food Ordering System
                     </span>
                  </div>
               </footer> */}
            </Router>
         </div>
      );
   }
}
const mapStateToProps = (state) => {
   return {};
};
export default connect(mapStateToProps)(Routes);
