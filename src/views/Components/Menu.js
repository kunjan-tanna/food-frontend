import React from "react";
import {
   CardBody,
   CardHeader,
   Card,
   Button,
   Row,
   Col,
   Table,
   Modal,
   ModalHeader,
   ModalBody,
   Media,
   Collapse,
   CardTitle,
} from "reactstrap";
import { ChevronDown } from "react-feather";
import Cart from "./Cart";
import ExtraItem from "./ExtraItem";
import { connect } from "react-redux";
import * as IMG from "../../configs/imgConfig";
import * as globalActions from "../../redux/actions/global";

class Menu extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         collapse: false,
         status: "Opened",
         rowData: [],
         subTotal: 0,
         comboItem: [],
         total: 0,
         arr: this.props.data1,
         data: [],
         item: [],
         showLeadModal: false,
      };
   }

   /*On load screen to show products*/
   componentDidMount = () => {
      const search = this.props.location.search;
      const banquetId = search.split("=")[1];

      this.props.dispatch(globalActions.getBundle()).then((res) => {
         let rowData = res.data.filter((i) => {
            if (i.banquetId === banquetId) {
               return i;
            } else {
               console.log("sorry");
            }
         });
         this.setState({ rowData });
      });
   };

   /*Open the Pop-Up Box for combo*/
   toggleModal = (item) => {
      this.state.rowData &&
         this.state.rowData.map((item) =>
            this.setState({ item: item.ItemDetails })
         );

      this.setState({ comboItem: item });
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
   /* Handle the AddToCart Component*/
   addToCart = (data) => {
      let arr = this.state.arr;
      arr.push({
         ...data,
         count: 1,
      });

      this.props.dispatch(globalActions.saveData(arr));

      this.setState({ arr });
   };
   /*Remove from Cart*/
   handleRemove = () => {
      this.props.dispatch(globalActions.removeItem());
      window.location.reload();
   };

   /*handle the data from Child Component*/
   handleChild = (price, name, quantity, id) => {
      let cart = {
         price: price,
         productName: name,
         quantity: quantity,
         _id: id,
      };
      let arr = this.state.arr;
      arr.push({
         ...cart,
         count: 1,
      });
      this.props.dispatch(globalActions.saveData(arr));
      this.setState({ arr });
      this.toggleModal();
   };

   render() {
      return (
         <Row>
            <Col md="6" sm="12">
               {this.state.rowData &&
                  this.state.rowData.map((i, index) => {
                     return (
                        <Card
                           style={{
                              cursor: "pointer",
                           }}
                           key={index}
                        >
                           <CardHeader>
                              <div className="d-flex justify-content-between">
                                 <CardTitle tag="h2">{i.banName}</CardTitle>
                                 <ChevronDown
                                    className="collapse-icon"
                                    size={20}
                                    onClick={this.toggle}
                                 />
                              </div>
                              <Media className="d-sm-flex d-block">
                                 <Media className="mt-md-1 mt-0">
                                    <Media
                                       className="rounded mr-2"
                                       object
                                       src={IMG.default.baseURL + "" + i.image}
                                       alt="Generic placeholder image"
                                       height="112"
                                       width="112"
                                    />
                                 </Media>
                                 <Media body className="pt-3">
                                    <p>
                                       <i>{i.description}</i>
                                    </p>
                                 </Media>
                              </Media>
                           </CardHeader>
                           <Collapse
                              isOpen={this.state.collapse}
                              onExited={this.onExited}
                              onEntered={this.onEntered}
                              onExiting={this.onExiting}
                              onEntering={this.onEntering}
                           >
                              {/* Paneer Items */}
                              <Card>
                                 <CardHeader>
                                    <CardTitle tag="h5">Paneer Items</CardTitle>
                                 </CardHeader>
                                 <CardBody>
                                    <Table size="md" responsive bordered>
                                       <thead>
                                          <tr>
                                             <th>Product Name</th>
                                             <th>Price</th>
                                             <th>Quantity</th>
                                             <th>Add To Cart</th>
                                          </tr>
                                       </thead>
                                       {i.productDetails &&
                                          i.productDetails.map(
                                             (item, index) => {
                                                if (
                                                   item.categoryName ==
                                                   "Paneer Items"
                                                ) {
                                                   return (
                                                      <tbody key={index}>
                                                         <tr>
                                                            <td>
                                                               {
                                                                  item.productName
                                                               }
                                                            </td>
                                                            <td>
                                                               {item.price}
                                                               &nbsp; INR
                                                            </td>
                                                            <td>
                                                               {item.quantity}
                                                            </td>
                                                            <td>
                                                               <Button
                                                                  className="mr-1"
                                                                  color="primary"
                                                                  type="submit"
                                                                  onClick={() =>
                                                                     this.addToCart(
                                                                        item
                                                                     )
                                                                  }
                                                               >
                                                                  Add
                                                               </Button>
                                                            </td>
                                                         </tr>
                                                      </tbody>
                                                   );
                                                }
                                             }
                                          )}
                                    </Table>
                                 </CardBody>
                              </Card>
                              {/* Veg Items */}
                              <Card>
                                 <CardHeader>
                                    <CardTitle tag="h5">Veg Items</CardTitle>
                                 </CardHeader>
                                 <CardBody>
                                    <Table size="md" responsive bordered>
                                       <thead>
                                          <tr>
                                             <th>Product Name</th>
                                             <th>Price</th>
                                             <th>Quantity</th>
                                             <th>Add To Cart</th>
                                          </tr>
                                       </thead>
                                       {i.productDetails &&
                                          i.productDetails.map(
                                             (item, index) => {
                                                if (
                                                   item.categoryName ==
                                                   "Veg Items"
                                                ) {
                                                   return (
                                                      <tbody key={index}>
                                                         <tr>
                                                            <td>
                                                               {
                                                                  item.productName
                                                               }
                                                            </td>
                                                            <td>
                                                               {item.price}
                                                               &nbsp; INR
                                                            </td>
                                                            <td>
                                                               {item.quantity}
                                                            </td>
                                                            <td>
                                                               <Button
                                                                  className="mr-1"
                                                                  color="primary"
                                                                  type="submit"
                                                                  onClick={() =>
                                                                     this.addToCart(
                                                                        item
                                                                     )
                                                                  }
                                                               >
                                                                  Add
                                                               </Button>
                                                            </td>
                                                         </tr>
                                                      </tbody>
                                                   );
                                                }
                                             }
                                          )}
                                    </Table>
                                 </CardBody>
                              </Card>
                              {/* Combo Items */}
                              <Card>
                                 <CardHeader>
                                    <CardTitle tag="h5">Combo Items</CardTitle>
                                 </CardHeader>
                                 <CardBody>
                                    <Table size="md" responsive bordered>
                                       <thead>
                                          <tr>
                                             <th>Product Name</th>
                                             <th>Price</th>
                                             <th>Quantity</th>
                                             <th>Add To Cart</th>
                                          </tr>
                                       </thead>
                                       {i.productDetails &&
                                          i.productDetails.map(
                                             (item, index) => {
                                                if (
                                                   item.categoryName ==
                                                   "Combo Items"
                                                ) {
                                                   return (
                                                      <tbody key={index}>
                                                         <tr>
                                                            <td>
                                                               {
                                                                  item.productName
                                                               }
                                                            </td>
                                                            <td>
                                                               {item.price}
                                                               &nbsp; INR
                                                            </td>
                                                            <td>
                                                               {item.quantity}
                                                            </td>
                                                            <td>
                                                               <Button
                                                                  className="mr-1"
                                                                  color="primary"
                                                                  type="submit"
                                                                  onClick={() =>
                                                                     this.toggleModal(
                                                                        item
                                                                     )
                                                                  }
                                                               >
                                                                  Add
                                                               </Button>
                                                            </td>
                                                         </tr>
                                                      </tbody>
                                                   );
                                                }
                                             }
                                          )}
                                    </Table>
                                 </CardBody>
                              </Card>
                           </Collapse>
                           {/* Open the Pop-Up Model */}
                           <Modal
                              isOpen={this.state.showLeadModal}
                              toggle={this.toggleModal}
                              className="modal-dialog-centered modal-lg"
                           >
                              <ModalHeader
                                 toggle={this.toggleModal}
                                 className="bg-primary"
                              >
                                 Choose Extra Items
                              </ModalHeader>
                              <ModalBody>
                                 <ExtraItem
                                    toggleModal={this.toggleModal}
                                    addItem={this.state.comboItem}
                                    addExtraItem={this.state.item}
                                    handleChild={this.handleChild}
                                 />
                              </ModalBody>
                           </Modal>
                        </Card>
                     );
                  })}
            </Col>

            <Col md="6" sm="12">
               <Cart
                  addItem1={this.state.arr}
                  dispatch={this.props.dispatch}
                  removeItem={this.handleRemove}
               />
            </Col>
         </Row>
      );
   }
}
//Once data are store in dispatch variable so whenever use it variable to call like this in below:
const mapStateToProps = (state) => {
   return {
      data1: state.globalReducer.data,
   };
};
export default connect(mapStateToProps)(Menu);
