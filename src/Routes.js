import React, { Component } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { history } from "./history";
import "../src/index.css";
import { connect } from "react-redux";

//material-ui
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

//Util Files
import ScrollToTop from "./util/scrollToTop";
import themeFile from "./util/theme";
import Spinner from "./util/spinner";

//Component Files
import Appbar from "./views/Components/Appbar";
import Footer from "./views/Components/Footer";

//Pages Files
import Home from "./views/pages/Home";
import Menus from "./views/pages/Menu";
import Register from "./views/pages/Register";
import Place from "./views/pages/Place";
import Login from "./views/pages/PlaceLogin";
import error404 from "./views/pages/error404";

const theme = createMuiTheme(themeFile);

class Routes extends Component {
   constructor(props) {
      super(props);
      this.state = {
         loading: true,
      };
   }
   componentDidMount = () => {
      setTimeout(() => {
         this.setState({ loading: false });
      }, 2000);
   };
   render() {
      return (
         <div>
            {this.state.loading ? (
               <Spinner />
            ) : (
               <MuiThemeProvider theme={theme}>
                  <Router history={history}>
                     <Appbar />
                     <ScrollToTop />
                     <Switch>
                        {/* For Dashboard */}
                        <Route exact path="/" component={Home} />
                        {/* For Display Menu */}
                        <Route exact path="/menu" component={Menus} />
                        {/* For Display Register*/}
                        <Route exact path="/register" component={Register} />
                        {/* For Display Login*/}
                        <Route exact path="/login" component={Login} />
                        {/* For Display Place*/}
                        <Route exact path="/place" component={Place} />
                        {/* For Display Error Page*/}
                        <Route component={error404} />
                     </Switch>
                     <Footer />
                  </Router>
               </MuiThemeProvider>
            )}
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
