import React from "react";
import {
   CardBody,
   CardHeader,
   Card,
   Table,
   Row,
   Col,
   FormGroup,
   Label,
   Input,
   CardTitle,
} from "reactstrap";
import { connect } from "react-redux";
import PlaceCart from "./PlaceCart";
import Paymentb from "./paymentb";
import backImg from "../../imgs/demo.jpeg";
import PlacesAutocomplete, {
   geocodeByAddress,
} from "react-places-autocomplete";

//material-ui
import Button from "@material-ui/core/Button";
const styles = {
   row: {
      backgroundImage: `url(${backImg})`,
      height: "130vh",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
   },
   content: {
      height: "90%",
      color: "white",
      backgroundColor: "rgba(0, 3, 0, 0.5)",
   },
};
class Place extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         address: "",
         userInfo: this.props.userInfo,
         cartPrice: 0,
         seconds: 0,
         minutes: 1,
         token: "",
         paymentData: {},
      };
   }

   /*Handle the Total Price*/
   cartTotal = (price) => {
      this.setState({ cartPrice: price });
   };
   /*handle the payment Data */
   paymentData = (data) => {
      this.setState({ paymentData: data });
   };
   /*Set the timer for pick-up Order*/
   updateTimer = () => {
      this.myInterval = setInterval(() => {
         const { seconds, minutes } = this.state;

         if (seconds > 0) {
            this.setState(({ seconds }) => ({
               seconds: seconds - 1,
            }));
         }
         if (seconds === 0) {
            if (minutes === 0) {
               clearInterval(this.myInterval);
            } else {
               this.setState(({ minutes }) => ({
                  minutes: minutes - 1,
                  seconds: 59,
               }));
            }
         }
      }, 1000);
   };
   componentWillUnmount = () => {
      clearTimeout(this.myInterval);
   };
   handleChange = (address) => {
      this.setState({ address });
   };
   handleSelect = async (value) => {
      await geocodeByAddress(value).then((res) => {
         console.log("RESSS", res);
      });
   };
   render() {
      const { userInfo, paymentData, seconds, minutes } = this.state;
      const { orderIn } = this.props;
      return (
         <Row style={styles.row}>
            <Col md="6" sm="12">
               {orderIn == "delivery" || orderIn == "" ? (
                  <Card style={styles.content}>
                     <CardHeader>
                        <div className="d-flex justify-content-between">
                           <CardTitle tag="h5">User Information</CardTitle>
                           <div className="d-flex flex-wrap flot-right">
                              <Button
                                 style={{
                                    color: "#000",
                                 }}
                                 color="secondary"
                                 type="submit"
                                 variant="contained"
                                 onClick={() => this.props.history.push("/")}
                                 outline="true"
                              >
                                 <span className="align-middle">
                                    Back To Menu
                                 </span>
                              </Button>
                           </div>
                        </div>
                     </CardHeader>
                     <CardBody>
                        {userInfo.name ? (
                           <Row>
                              <Col sm="12">
                                 <FormGroup className="form-label-group position-relative has-icon-left">
                                    <Label>Name</Label>
                                    <Input
                                       type="text"
                                       name="name"
                                       readOnly
                                       value={
                                          userInfo && userInfo.name
                                             ? userInfo.name
                                             : "loading..."
                                       }
                                    />
                                 </FormGroup>
                              </Col>

                              <Col sm="12">
                                 <FormGroup className="form-label-group position-relative has-icon-left">
                                    <Label>E-mail</Label>
                                    <Input
                                       type="email"
                                       name="email"
                                       readOnly
                                       value={
                                          userInfo && userInfo.email
                                             ? userInfo.email
                                             : "loading..."
                                       }
                                    />
                                 </FormGroup>
                              </Col>
                              <Col sm="12">
                                 <FormGroup className="form-label-group position-relative has-icon-left">
                                    <Label>Address</Label>
                                    <Input
                                       type="textarea"
                                       name="address"
                                       placeholder="Type Address"
                                    />
                                 </FormGroup>
                              </Col>
                           </Row>
                        ) : (
                           <Row>
                              <Col md="6" sm="12">
                                 <FormGroup className="form-label-group position-relative has-icon-left">
                                    <Label>First Name</Label>
                                    <Input
                                       type="text"
                                       name="firstName"
                                       readOnly
                                       value={
                                          userInfo && userInfo.firstName
                                             ? userInfo.firstName
                                             : "loading..."
                                       }
                                    />
                                 </FormGroup>
                              </Col>
                              <Col md="6" sm="12">
                                 <FormGroup className="form-label-group position-relative has-icon-left">
                                    <Label>Last Name</Label>
                                    <Input
                                       type="text"
                                       name="lastName"
                                       readOnly
                                       value={
                                          userInfo && userInfo.lastName
                                             ? userInfo.lastName
                                             : "loading..."
                                       }
                                    />
                                 </FormGroup>
                              </Col>
                              <Col md="6" sm="12">
                                 <FormGroup className="form-label-group position-relative has-icon-left">
                                    <Label>E-mail</Label>
                                    <Input
                                       type="email"
                                       name="email"
                                       readOnly
                                       value={
                                          userInfo && userInfo.email
                                             ? userInfo.email
                                             : "loading..."
                                       }
                                    />
                                 </FormGroup>
                              </Col>
                              <Col md="6" sm="12">
                                 <FormGroup className="form-label-group position-relative has-icon-left">
                                    <Label>PinCode</Label>
                                    <Input
                                       type="number"
                                       name="pinCode"
                                       readOnly
                                       value={
                                          userInfo && userInfo.pinCode
                                             ? userInfo.pinCode
                                             : "loading..."
                                       }
                                    />
                                 </FormGroup>
                              </Col>
                              <Col sm="12">
                                 <FormGroup className="form-label-group position-relative has-icon-left">
                                    <Label>Address</Label>
                                    <Input
                                       type="textarea"
                                       name="address"
                                       readOnly
                                       value={
                                          userInfo && userInfo.address
                                             ? userInfo.address
                                             : "loading..."
                                       }
                                    />
                                 </FormGroup>
                              </Col>
                           </Row>
                        )}
                     </CardBody>
                  </Card>
               ) : (
                  <Card style={styles.content}>
                     <CardHeader>
                        <div className="d-flex justify-content-between">
                           <CardTitle tag="h5">Pick-up Order</CardTitle>
                           <div className="d-flex flex-wrap flot-right">
                              <Button
                                 style={{
                                    color: "#000",
                                 }}
                                 color="secondary"
                                 type="submit"
                                 variant="contained"
                                 onClick={() => this.props.history.push("/")}
                                 outline="true"
                              >
                                 <span className="align-middle">
                                    Back To Menu
                                 </span>
                              </Button>
                           </div>
                        </div>
                     </CardHeader>
                     <CardBody>
                        <Row>
                           <Col sm="12">
                              {minutes === 0 && seconds === 0 ? (
                                 <h3>Your Order is Place Successfully</h3>
                              ) : (
                                 <h3>
                                    Time Remaining:
                                    {minutes}:
                                    {seconds < 10 ? `0${seconds}` : seconds}
                                 </h3>
                              )}
                           </Col>
                        </Row>
                     </CardBody>
                  </Card>
               )}
            </Col>

            <Col md="6" sm="12">
               <PlaceCart
                  style={styles.content}
                  cartData={this.props.cartItem}
                  cartTotal={this.cartTotal}
               />
            </Col>

            <Col md="6" sm="12">
               <Paymentb
                  dispatch={this.props.dispatch}
                  userData={userInfo}
                  timer={this.updateTimer}
                  data={this.paymentData}
                  cartPrice={this.state.cartPrice}
               />
            </Col>
            <Col md="6" sm="12">
               <Table style={styles.content} responsive bordered>
                  <thead>
                     <tr>
                        <th>Transaction Id</th>
                        <th>Amount</th>
                        <th>Status</th>
                     </tr>
                  </thead>

                  <tbody>
                     <tr>
                        <td>{paymentData.transaction}</td>

                        <td>{paymentData.amount}&nbsp; INR</td>

                        <td>{paymentData.status}</td>
                     </tr>
                  </tbody>
               </Table>
            </Col>
         </Row>
      );
   }
}
//Once data are store in dispatch variable so whenever use it variable to call like this in below:
const mapStateToProps = (state) => {
   return {
      cartItem: state.globalReducer.data,
      userInfo: state.globalReducer.userInfo,
      orderIn: state.orderIn.orderIn,
   };
};
export default connect(mapStateToProps)(Place);
