import React from "react";
import {
   Card,
   CardBody,
   CardHeader,
   Row,
   Col,
   Form,
   FormGroup,
   Input,
   Label,
} from "reactstrap";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { NavLink } from "react-router-dom";
import { history } from "../../history";
import {
   loginWithJWT,
   logInGoogle,
   logInFacebook,
} from "../../redux/actions/auth/auth";
import { connect } from "react-redux";
import backImg from "../../imgs/login_bg.jpg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//material-ui
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = {
   header: {
      backgroundImage: `url(${backImg})`,
      height: "100vh",
      justifyContent: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
   },

   content: {
      height: "100%",
      width: "100%",
      color: "white",
      backgroundColor: "rgba(0, 3, 0, 0.5)",
   },
   title: {
      margin: "40px 0px 10px 0px",
   },
   google: {
      justifyContent: "center",
   },
   link: {
      color: "#DAE0E2",
      textDecoration: "none",
   },
};

class PlaceLogin extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         formData: {},
         userInfo: this.props.userInfo,
      };
   }
   //handleInput
   handleInput = (event) => {
      event.persist();
      this.setState((prevState) => ({
         formData: {
            ...prevState.formData,
            [event.target.name]: event.target.value,
         },
      }));
   };

   //Handle Form Submit
   handleFormSubmit = () => {
      //
      this.props.dispatch(loginWithJWT(this.state.formData));
   };
   toggle = (tab) => {
      if (this.state.activeTab !== tab) {
         this.setState({
            activeTab: tab,
         });
      }
   };
   /*Response from Google*/
   responseSuccessGoogle = (abc) => {
      const tokenId = abc.tokenId;
      let obj = {
         tokenId: tokenId,
      };
      this.props.dispatch(logInGoogle(obj));
   };

   /*Response From Facebook*/
   responseFacebook = (response) => {
      const userID = response.userID;
      const accessToken = response.accessToken;
      let obj = {
         userID: userID,
         accessToken: accessToken,
      };
      this.props.dispatch(logInFacebook(obj));
   };
   render() {
      const { userInfo } = this.state;

      return (
         <Row style={styles.header}>
            <Col md={6} lg={4}>
               {userInfo && userInfo ? (
                  <div style={{ textAlign: "center" }}>
                     <p
                        style={{
                           color: "white",
                           position: "absolute",
                           top: "54%",
                           left: "20%",
                           width: "100%",

                           backgroundColor: "rgba(0, 3, 0, 0.5)",
                        }}
                     >
                        You Already Logged Please <br />
                        <NavLink to="/place" style={styles.link} exact>
                           Click Here
                        </NavLink>
                     </p>
                  </div>
               ) : (
                  <Card body style={styles.content}>
                     <div className="text-center pb-4">
                        <Typography variant="h3" style={styles.title}>
                           Login
                           <span role="img" aria-label="Burger Emoji">
                              🍔
                           </span>
                        </Typography>
                     </div>
                     {/* <img
                        src={hamBurgerIcon}
                        alt="hamBurger"
                        style={styles.hamBurger}
                     />
                     <Typography variant="h3" style={styles.title}>
                        Login
                     </Typography> */}
                     <CardBody>
                        <Col sm="12">
                           <Form
                              onSubmit={(e) => {
                                 e.preventDefault();
                                 this.handleFormSubmit();
                              }}
                           >
                              <Row>
                                 <Col sm="12">
                                    <FormGroup>
                                       <Label>Email</Label>
                                       <Input
                                          type="email"
                                          placeholder="Email"
                                          name="email"
                                          onChange={this.handleInput}
                                       />
                                    </FormGroup>
                                 </Col>
                                 <Col sm="12">
                                    <FormGroup>
                                       <Label>Password</Label>
                                       <Input
                                          type="password"
                                          placeholder="Password"
                                          name="password"
                                          onChange={this.handleInput}
                                       />
                                    </FormGroup>
                                 </Col>
                                 <Col sm="12">
                                    <FormGroup
                                       style={{
                                          color: "#000",
                                          width: "60%",
                                          marginLeft: "20%",
                                          marginBottom: "10%",
                                       }}
                                    >
                                       <GoogleLogin
                                          className="text-white bg-secondary"
                                          clientId="613629143448-2rog0gdm4g7p8jdld8duvq8fbbhfol5g.apps.googleusercontent.com"
                                          buttonText="Login with Google"
                                          onSuccess={this.responseSuccessGoogle}
                                          cookiePolicy={"single_host_origin"}
                                       />
                                    </FormGroup>
                                 </Col>

                                 <Col sm="12">
                                    <FormGroup
                                       style={{
                                          marginLeft: "50px",
                                          marginBottom: "10%",
                                       }}
                                    >
                                       <FacebookLogin
                                          appId="689602668422972"
                                          size="small"
                                          icon="fa-facebook"
                                          callback={this.responseFacebook}
                                       />
                                    </FormGroup>

                                    <div className="d-flex justify-content-between">
                                       <Button
                                          style={{
                                             color: "#000",
                                             width: "60%",

                                             marginBottom: "10%",
                                          }}
                                          onClick={() => {
                                             history.push("/register");
                                          }}
                                          color="secondary"
                                          variant="contained"
                                       >
                                          Register
                                       </Button>
                                       <Button
                                          style={{
                                             color: "#000",
                                             width: "60%",
                                             marginLeft: "20%",
                                             marginBottom: "10%",
                                          }}
                                          color="secondary"
                                          type="submit"
                                          variant="contained"
                                       >
                                          Login
                                       </Button>
                                    </div>
                                    <ToastContainer />
                                 </Col>
                              </Row>
                           </Form>
                        </Col>
                     </CardBody>
                  </Card>
               )}
            </Col>
         </Row>
      );
   }
}
const mapStateToProps = (state) => {
   return {
      userInfo: state.globalReducer.userInfo,
   };
};
export default connect(mapStateToProps)(PlaceLogin);
