import React from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/auth/auth";
import { Link } from "react-router-dom";
import { history } from "../../history";

//material-ui
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = () => ({
   appBar: {
      backgroundColor: "#e8ede1",
      marginBottom: 10,
   },

   buttonStyles: {
      color: "black",
      margin: "0 6px 0",
      display: "inline-block",
   },
   buttons: {
      marginRight: 60,
   },
   name: {
      fontStyle: "bold",
      fontSize: 32,
   },
});
class Appbar extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         userInfo: this.props.userInfo,
      };
   }
   handleitem = (e, path) => {
      this.props.logout();
      history.push(path);
   };
   render() {
      const { classes } = this.props;
      const { userInfo } = this.props;
      return (
         <AppBar position="static" className={classes.appBar}>
            <Toolbar>
               <Link
                  to="/"
                  style={{
                     color: "black",
                     marginLeft: 60,
                     flex: 1,
                     textDecoration: "none",
                  }}
               >
                  <Typography variant="h6" noWrap>
                     <span className={classes.name}>FoodOrder</span>
                  </Typography>
               </Link>

               {userInfo ? (
                  <div className={classes.buttons}>
                     <Typography className={classes.buttonStyles}>
                        Hello,
                        {userInfo.name ? (
                           <strong style={{ color: "black" }}>
                              <i>
                                 {userInfo && userInfo.name
                                    ? userInfo.name
                                    : "loading..."}
                              </i>
                           </strong>
                        ) : (
                           <span>
                              <strong style={{ color: "black" }}>
                                 {userInfo && userInfo.firstName
                                    ? userInfo.firstName
                                    : "loading..."}
                              </strong>
                              &nbsp;
                              <strong style={{ color: "black" }}>
                                 {userInfo && userInfo.lastName
                                    ? userInfo.lastName
                                    : "loading..."}
                              </strong>
                           </span>
                        )}
                     </Typography>

                     <Button
                        onClick={(e) => this.handleitem(e, "/")}
                        className={classes.buttonStyles}
                        variant="outlined"
                     >
                        Logout
                     </Button>
                  </div>
               ) : (
                  <div className={classes.buttons}>
                     <Link to="/login">
                        <Button className={classes.buttonStyles}>Login</Button>
                     </Link>
                     <Link to="/register">
                        <Button
                           className={classes.buttonStyles}
                           variant="outlined"
                        >
                           Register
                        </Button>
                     </Link>
                  </div>
               )}
            </Toolbar>
         </AppBar>
      );
   }
}
//Once data are store in dispatch variable so whenever use it variable to call like this in below:
const mapStateToProps = (state) => {
   return {
      userInfo: state.globalReducer.userInfo,
   };
};
const mapDispatchToProps = (dispatch) => {
   return { logout: () => dispatch(logout()), dispatch };
};
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Appbar));
