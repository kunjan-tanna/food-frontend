import React from "react";
import {
   CardBody,
   CardHeader,
   Card,
   Row,
   Col,
   Table,
   CardTitle,
   Modal,
   ModalHeader,
   ModalBody,
} from "reactstrap";
import { Minus, Plus, Trash } from "react-feather";
import PlaceLogin from "./PlaceLogin";
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
         prevPrice: 0,
         price: 0,
         total: 0,
         updateData: [],
         showLeadModal: false,
      };
   }
   /*Handle the Increment Quantity*/
   handleInc = (i, index) => {
      let obj = {
         productId: i._id,
         quantity: i.quantity,
         price: i.price,
      };
      this.props
         .dispatch(globalActions.getIncProduct(i._id, obj))
         .then((res) => {
            let data1 = res.data;
            this.state.cart.map((item, index) => {
               if (item._id === data1._id) {
                  this.state.cart.splice(index, 1, data1);
                  let cart = this.state.cart;
                  let total = cart.reduce(
                     (totalitem, item) => +totalitem + +item.price,
                     0
                  );
                  this.setState({ total });
                  this.setState({ cart });
               }
            });
         });
   };
   /*Handle the Decrement Quantity*/
   handleDec = (item) => {
      this.setState(
         (prevState) => {
            return {
               price: item.price,
               prevPrice: prevState.price,
            };
         },
         () => {
            let obj = {
               productId: item._id,
               quantity: item.quantity,
               price: this.state.price,
            };
            this.props
               .dispatch(globalActions.getDecProduct(item._id, obj))
               .then((res) => {
                  let data1 = res.data;
                  data1.price = this.state.prevPrice;

                  this.state.cart.map((item, index) => {
                     if (item._id === data1._id) {
                        this.state.cart.splice(index, 1, data1);
                        let cart = this.state.cart;
                        let total = cart.reduce(
                           (totalitem, item) => +totalitem + +item.price,
                           0
                        );
                        this.setState({ total });
                        this.setState({ cart });
                     }
                  });
               });
         }
      );
   };
   /*Remove the particular Item*/
   handleDel = (item) => {
      this.props.dispatch(globalActions.removeParticularItem(item));
      window.location.reload();
   };
   /*Remove the all the item*/
   handleRemove = () => {
      this.props.removeItem();
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

   render() {
      let price = this.state.cart;
      let total1 =
         price &&
         price.reduce((totalitem, item) => +totalitem + +item.price, 0);
      const { styleTable } = this.props;
      return (
         <Card style={styles.img}>
            <CardHeader>
               <CardTitle tag="h5" style={styles.content}>
                  Orders
               </CardTitle>
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
                                   <td> {i.price} &nbsp; INR</td>
                                   <td> {i.quantity}</td>
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
