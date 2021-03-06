import React from "react";
import DropIn from "braintree-web-drop-in-react";
import * as paymentAction from "../../redux/actions/payment/payment";
import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap";
//material-ui
import Button from "@material-ui/core/Button";

const styles = {
   content: {
      height: "95%",
      color: "white",
      backgroundColor: "rgba(0, 3, 0, 0.5)",
   },
   button: {
      display: "block",
      width: "100%",
      color: "#000",
   },
};
class Paymentb extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         clientToken: null,
         instance: {},
         userInfo: this.props.userData,
      };
   }
   componentDidMount = () => {
      const userId = this.state.userInfo._id;
      this.props.dispatch(paymentAction.getToken(userId)).then((res) => {
         let clientToken = res.data.clientToken;
         this.setState({ clientToken });
      });
   };
   onPurchase = () => {
      const userId = this.state.userInfo._id;
      this.state.instance.requestPaymentMethod().then((data) => {
         const nonce = data.nonce;
         const paymentData = {
            amount: this.props.cartPrice,
            paymentMethodNonce: nonce,
         };
         this.props
            .dispatch(paymentAction.processPayment(userId, paymentData))
            .then((res) => {
               const resData = res.data;
               let obj = {
                  transaction: resData.transaction.id,
                  status: resData.transaction.status,
                  amount: resData.transaction.amount,
               };
               this.props.data(obj);
               this.props.timer();
            });
      });
   };
   render() {
      return (
         <Row>
            <Col sm={{ size: 11, offset: 0 }}>
               <Card style={styles.content}>
                  <CardHeader>
                     <CardTitle tag="h5">Payment Details</CardTitle>
                  </CardHeader>
                  <CardBody>
                     {this.state.clientToken !== null ? (
                        <div>
                           <DropIn
                              options={{
                                 authorization: this.state.clientToken,
                              }}
                              onInstance={(instance) =>
                                 (this.state.instance = instance)
                              }
                           />
                           <Button
                              style={styles.button}
                              color="secondary"
                              type="submit"
                              variant="contained"
                              onClick={() => this.onPurchase()}
                           >
                              Buy
                           </Button>
                        </div>
                     ) : (
                        "loading.."
                     )}
                  </CardBody>
               </Card>
            </Col>
         </Row>
      );
   }
}

export default Paymentb;
