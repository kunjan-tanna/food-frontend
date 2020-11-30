import React from "react";
import {
   CardBody,
   CardHeader,
   Card,
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
import { ChevronDown, ChevronUp } from "react-feather";
import Cart from "./Cart";
import ExtraItem from "./ExtraItem";
import { connect } from "react-redux";
import * as IMG from "../../configs/imgConfig";
import backImg from "../../imgs/punjabi_bg.jpg";
import vegItem from "../../imgs/vegItem.jpg";
import pannerItem from "../../imgs/pannerItem.jpg";
import comboItem from "../../imgs/comboImg.jpeg";
import * as globalActions from "../../redux/actions/global";

//material-ui
import Button from "@material-ui/core/Button";

const styles = {
   img: {
      backgroundImage: `url(${backImg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      cursor: "pointer",
      color: "white",
   },
   vegHeader: {
      backgroundImage: `url(${vegItem})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
   },
   paneerHeader: {
      backgroundImage: `url(${pannerItem})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
   },
   comboHeader: {
      backgroundImage: `url(${comboItem})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      color: "white",
   },
   content: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
   },
   header: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
   },
   table: {
      color: "white",
      backgroundColor: "#333945",
   },
};

class Menu extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         collapse: false,
         status: "Opened",
         rowData: [],
         comboItem: [],
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
                        <Card style={styles.img} key={index}>
                           <CardHeader style={styles.header}>
                              <div className="d-flex justify-content-between">
                                 <CardTitle tag="h2">{i.banName}</CardTitle>
                                 {!this.state.collapse ? (
                                    <ChevronDown
                                       className="collapse-icon"
                                       size={20}
                                       onClick={this.toggle}
                                    />
                                 ) : (
                                    <ChevronUp
                                       className="collapse-icon"
                                       size={20}
                                       onClick={this.toggle}
                                    />
                                 )}
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
                                 <CardHeader style={styles.paneerHeader}>
                                    <CardTitle tag="h5" style={styles.content}>
                                       Paneer Items
                                    </CardTitle>
                                 </CardHeader>
                                 <CardBody>
                                    <Table
                                       responsive
                                       bordered
                                       style={styles.table}
                                    >
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
                                                                  style={{
                                                                     color:
                                                                        "#000",
                                                                     marginLeft:
                                                                        "10%",
                                                                  }}
                                                                  color="secondary"
                                                                  type="submit"
                                                                  variant="contained"
                                                                  onClick={() =>
                                                                     this.addToCart(
                                                                        item
                                                                     )
                                                                  }
                                                               >
                                                                  Add To Cart
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
                                 <CardHeader style={styles.vegHeader}>
                                    <CardTitle tag="h5" style={styles.content}>
                                       Veg Items
                                    </CardTitle>
                                 </CardHeader>
                                 <CardBody>
                                    <Table
                                       responsive
                                       bordered
                                       style={styles.table}
                                    >
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
                                                                  style={{
                                                                     color:
                                                                        "#000",
                                                                  }}
                                                                  color="secondary"
                                                                  type="submit"
                                                                  variant="contained"
                                                                  onClick={() =>
                                                                     this.addToCart(
                                                                        item
                                                                     )
                                                                  }
                                                               >
                                                                  Add To Cart
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
                                 <CardHeader style={styles.comboHeader}>
                                    <CardTitle tag="h5" style={styles.content}>
                                       Combo Items
                                    </CardTitle>
                                 </CardHeader>
                                 <CardBody>
                                    <Table
                                       size="md"
                                       responsive
                                       bordered
                                       style={styles.table}
                                    >
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
                                                                  style={{
                                                                     color:
                                                                        "#000",
                                                                     marginLeft:
                                                                        "10%",
                                                                  }}
                                                                  color="secondary"
                                                                  type="submit"
                                                                  variant="contained"
                                                                  onClick={() =>
                                                                     this.toggleModal(
                                                                        item
                                                                     )
                                                                  }
                                                               >
                                                                  Add To Cart
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
                                 style={{ backgroundColor: "#f7a692" }}
                              >
                                 Choose Extra Items
                              </ModalHeader>
                              <ModalBody>
                                 <ExtraItem
                                    style={styles.comboHeader}
                                    styleTable={styles.table}
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
                  styleTable={styles.table}
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
