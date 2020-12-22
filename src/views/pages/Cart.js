import React from "react";
import {
   CardBody,
   CardHeader,
   Card,
   Row,
   Col,
   Table,
   Input,
   CardTitle,
   Modal,
   ModalHeader,
   ModalBody,
} from "reactstrap";
import { Minus, Plus, Trash } from "react-feather";
import { Redirect } from "react-router-dom";
import * as globalActions from "../../redux/actions/global";
import backImg from "../../imgs/punjabi_bg.jpg";

//material-ui
import Button from "@material-ui/core/Button";

const styles = {
   img: {
      backgroundImage: `url(${backImg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
   },
   content: {
      color: "white",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
   },
   button: {
      color: "#000",
   },
};
class Cart extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         cart: this.props.addItem1,
         IncPrice: 0,
         prevPrice: 0,
         quantity: 1,
         price: 0,
         total: 0,
         updateData: [],
         showLeadModal: false,
      };
   }
   /*Handle the Increment Quantity*/
   handleInc = (i) => {
      this.setState(
         (prevState) => {
            if (prevState.quantity < 9) {
               return {
                  quantity: prevState.quantity + 1,
               };
            }
         },
         () => {
            const quan = this.state.quantity;
            this.setState({ IncPrice: i.price }, () => {
               const priceData = i.price * quan;
               const cartData = {
                  _id: i._id,
                  price: priceData,
                  quantity: quan,
                  productName: i.productName,
                  categoryName: i.categoryName,
               };
               this.state.cart.map((item, index) => {
                  if (item._id === cartData._id) {
                     this.state.cart.splice(index, 1, cartData);
                     let cart = this.state.cart;
                     let total = cart.reduce(
                        (totalitem, item) => +totalitem + +item.price,
                        0
                     );
                     this.setState({ total });
                     this.props.dispatch(globalActions.saveData(cart));
                     this.setState({ cart });
                  }
               });
            });
         }
      );
   };
   /*Handle the Decrement Quantity*/
   handleDec = (item) => {
      this.setState(
         (prevState) => {
            if (prevState.quantity > 0) {
               return {
                  quantity: prevState.quantity - 1,
               };
            }
         },
         () => {
            this.setState(
               (prevState) => {
                  return {
                     IncPrice: item.price - prevState.IncPrice,
                  };
               },
               () => {
                  const priceData = this.state.IncPrice;
                  const cartData = {
                     _id: item._id,
                     price: priceData,
                     quantity: this.state.quantity,
                     productName: item.productName,
                     categoryName: item.categoryName,
                  };
                  this.state.cart.map((item, index) => {
                     if (item._id === cartData._id) {
                        this.state.cart.splice(index, 1, cartData);
                        let cart = this.state.cart;
                        let total = cart.reduce(
                           (totalitem, item) => +totalitem + +item.price,
                           0
                        );
                        this.setState({ total });
                        this.props.dispatch(globalActions.saveData(cart));
                        this.setState({ cart });
                     }
                  });
               }
            );
         }
      );
   };
   /*Remove the particular Item*/
   handleDel = (item) => {
      this.props.removeItem(item);
      window.location.reload();
   };
   /*Remove the all the item*/
   handleRemove = () => {
      this.props.removeall();
      window.location.reload();
   };
   /*Open the Pop-Up Box for combo*/
   toggleModal = () => {
      this.setState((prevState) => ({
         showLeadModal: !prevState.showLeadModal,
      }));
   };
   toggle = () => {
      this.setState((state) => ({ collapse: !state.collapse }));
   };
   onEntered = () => {
      this.setState({ status: "Opened" });
   };
   onEntering = () => {
      this.setState({ status: "Opening..." });
   };
   onExited = () => {
      this.setState({ status: "Closed" });
   };
   onExiting = () => {
      this.setState({ status: "Closing..." });
   };
   /*handle the Delivery in OrderIn Tab*/
   handleDelivery = (e) => {
      const orderInDel = e.target.value;

      this.props.orderIn(orderInDel);
   };
   /*handle the Pick-up in OrderIn Tab*/
   handlePickup = (e) => {
      const orderInPick = e.target.value;
      this.props.orderIn(orderInPick);
   };
   render() {
      let price = this.state.cart;
      let total1 =
         price &&
         price.reduce((totalitem, item) => +totalitem + +item.price, 0);
      const { styleTable } = this.props;
      return (
         <Card style={styles.img}>
            <CardHeader style={styles.content}>
               <div className="d-flex">
                  <div className="mr-auto p-2">
                     <CardTitle tag="h5">Orders</CardTitle>
                  </div>

                  <div className="mr-4 p-2">
                     <Input
                        type="radio"
                        name="radio"
                        value="pickup"
                        checked={
                           this.props.value == "pickup" ? this.props.value : ""
                        }
                        onChange={(e) => this.handlePickup(e)}
                     />
                     <label>Pick-Up</label>
                  </div>
                  <div className="p-2">
                     <Input
                        type="radio"
                        name="radio"
                        value="delivery"
                        checked={
                           this.props.value == "delivery"
                              ? this.props.value
                              : ""
                        }
                        onChange={(e) => this.handleDelivery(e)}
                     />
                     <label>Delivery</label>
                  </div>
               </div>
            </CardHeader>
            <CardBody>
               <Table bordered responsive style={styleTable}>
                  <thead>
                     <tr>
                        <th>Remove</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Add</th>
                     </tr>
                  </thead>
                  {this.state.cart.length > 0
                     ? this.state.cart &&
                       this.state.cart.map((i, index) => {
                          return (
                             <tbody key={index}>
                                <tr>
                                   <td>
                                      <div className="d-flex justify-content-start">
                                         <Button
                                            style={styles.button}
                                            color="secondary"
                                            type="submit"
                                            variant="contained"
                                            onClick={(e) => this.handleDel(i)}
                                         >
                                            <Trash size={15} />
                                         </Button>
                                      </div>
                                   </td>
                                   <td>{i.productName}</td>
                                   <td>{i.price}&nbsp;INR</td>
                                   <td>{i.quantity}</td>
                                   <td>
                                      <div className="d-flex justify-content-between">
                                         <Button
                                            style={styles.button}
                                            color="secondary"
                                            type="submit"
                                            variant="contained"
                                            onClick={() => this.handleDec(i)}
                                         >
                                            <Minus size={15} />
                                         </Button>
                                         <Button
                                            style={styles.button}
                                            color="secondary"
                                            type="submit"
                                            variant="contained"
                                            onClick={() =>
                                               this.handleInc(i, index)
                                            }
                                         >
                                            <Plus size={15} />
                                         </Button>
                                      </div>
                                   </td>
                                </tr>
                             </tbody>
                          );
                       })
                     : "No Products Found"}
               </Table>
            </CardBody>
            <div className="invoice-total-table">
               <Row>
                  <Col sm="12">
                     <Table responsive borderless>
                        <tbody>
                           <tr>
                              <th
                                 className="text-right"
                                 style={{ color: "white" }}
                              >
                                 Total
                              </th>
                           </tr>
                           <tr>
                              <td
                                 className="text-right"
                                 style={{ color: "white" }}
                              >
                                 {this.state.total ? this.state.total : total1}
                              </td>
                           </tr>

                           <tr>
                              <td>
                                 <div className="d-flex justify-content-between">
                                    <Button
                                       style={styles.button}
                                       color="secondary"
                                       type="submit"
                                       variant="contained"
                                       onClick={() => this.handleRemove()}
                                    >
                                       Remove All
                                    </Button>
                                    {this.state.cart.length > 0 ? (
                                       <Button
                                          style={styles.button}
                                          color="secondary"
                                          type="submit"
                                          variant="contained"
                                          onClick={() => this.toggleModal()}
                                       >
                                          Place Order
                                       </Button>
                                    ) : (
                                       "No Place the order"
                                    )}
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </Table>
                  </Col>
               </Row>
            </div>
            {/* Open the Pop-Up Model */}
            <Modal
               isOpen={this.state.showLeadModal}
               toggle={this.toggleModal}
               className="modal-dialog-centered modal-lg"
            >
               <ModalHeader toggle={this.toggleModal} className="bg-primary">
                  Welcome back, please login to your account
               </ModalHeader>
               <ModalBody>
                  <Redirect to="/login" />
               </ModalBody>
            </Modal>
         </Card>
      );
   }
}

export default Cart;
