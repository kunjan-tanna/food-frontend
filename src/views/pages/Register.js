import React from "react";
import backImg from "../../imgs/background.jpg";
import {
   CardHeader,
   CardBody,
   Card,
   CardTitle,
   Row,
   Col,
   Form,
   FormGroup,
   CustomInput,
   Label,
   Input,
} from "reactstrap";
import { connect } from "react-redux";
import * as registerActions from "../../redux/actions/auth/auth";
import { toast, ToastContainer } from "react-toastify";
import { history } from "../../history";
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
};

class Register extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         roles: this.props.roles,
         erroMsg: false,
         formData: {},
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
      this.props
         .dispatch(registerActions.RegUsers(this.state.formData))
         .then((res) => {
            if (!res.data) {
               //Add success message in Toast

               toast.error("Register is not Successfully", {
                  position: toast.POSITION.BOTTOM_RIGHT,
               });
            } else {
               toast.success("Register Successfully", {
                  position: toast.POSITION.BOTTOM_RIGHT,
               });
               setTimeout(() => {
                  history.push("/place");
               }, 3000);
            }
         })
         .catch((error) => {
            // show error message in Toast
            toast.error("Register is not Successfully", {
               position: toast.POSITION.BOTTOM_RIGHT,
            });
         });
   };
   render() {
      return (
         <Row style={styles.header}>
            <Col md={6} lg={4}>
               <Card body style={styles.content}>
                  <Form
                     onSubmit={(e) => {
                        e.preventDefault();
                        this.handleFormSubmit();
                     }}
                  >
                     <div className="text-center pb-4">
                        <Typography variant="h3" style={styles.title}>
                           Register{" "}
                           <span role="img" aria-label="Pizza Emoji">
                              🍕
                           </span>
                        </Typography>
                     </div>
                     <Row>
                        <Col md="6" sm="12">
                           <FormGroup className="form-label-group position-relative has-icon-left">
                              <Label>First Name</Label>
                              <strong className="text-danger">*</strong>
                              <Input
                                 type="text"
                                 required
                                 placeholder="First Name"
                                 name="firstName"
                                 onChange={this.handleInput}
                              />
                           </FormGroup>
                        </Col>
                        <Col md="6" sm="12">
                           <FormGroup className="form-label-group position-relative has-icon-left">
                              <Label>Last Name</Label>
                              <strong className="text-danger">*</strong>
                              <Input
                                 type="text"
                                 required
                                 placeholder="Last Name"
                                 name="lastName"
                                 onChange={this.handleInput}
                              />
                           </FormGroup>
                        </Col>
                        <Col md="6" sm="12">
                           <FormGroup className="form-label-group position-relative has-icon-left">
                              <Label>Email</Label>
                              <strong className="text-danger">*</strong>
                              <Input
                                 type="email"
                                 required
                                 placeholder="Email"
                                 name="email"
                                 onChange={this.handleInput}
                              />
                           </FormGroup>
                        </Col>
                        <Col md="6" sm="12">
                           <FormGroup className="form-label-group position-relative has-icon-left">
                              <Label>Password</Label>
                              <strong className="text-danger">*</strong>
                              <Input
                                 type="password"
                                 required
                                 placeholder="Password"
                                 name="password"
                                 onChange={this.handleInput}
                              />
                           </FormGroup>
                        </Col>
                        <Col md="6" sm="12">
                           <FormGroup className="form-label-group position-relative has-icon-left">
                              <Label>Pin-Code</Label>
                              <strong className="text-danger">*</strong>
                              <Input
                                 type="number"
                                 required
                                 placeholder="Pin-Code"
                                 name="pinCode"
                                 onChange={this.handleInput}
                              />
                           </FormGroup>
                        </Col>
                        <Col md="6" sm="12">
                           <FormGroup className="form-label-group position-relative has-icon-left">
                              <Label>Mobile No.</Label>
                              <strong className="text-danger">*</strong>
                              <Input
                                 type="number"
                                 required
                                 placeholder="Mobile No."
                                 name="mobile"
                                 onChange={this.handleInput}
                              />
                           </FormGroup>
                        </Col>

                        <Col sm="12">
                           <FormGroup className="form-label-group position-relative has-icon-left">
                              <Label>Address</Label>
                              <Input
                                 type="textarea"
                                 placeholder="Address"
                                 name="address"
                                 onChange={this.handleInput}
                              />
                           </FormGroup>
                        </Col>
                     </Row>

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
                        Register
                     </Button>
                     <ToastContainer />
                  </Form>
               </Card>
            </Col>
         </Row>
      );
   }
}
const mapStateToProps = (state) => {
   return {
      //Once data are store in dispatch variable so whenever use it variable to call like this in below:
   };
};
export default connect(mapStateToProps)(Register);
