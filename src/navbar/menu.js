import React, { Component, Fragment } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Menu extends Component {
   render() {
      return (
         <div>
            <ul className="nav nav-tabs bg-blue">
               <li className="nav-item">
                  <NavLink
                     to="/"
                     exact
                     className="nav-link"
                     activeStyle={{ color: "red" }}
                  >
                     Dashboard
                  </NavLink>
               </li>
            </ul>
         </div>
      );
   }
}
const mapStateToProps = (state) => {
   return {};
};
export default connect(mapStateToProps)(withRouter(Menu));
