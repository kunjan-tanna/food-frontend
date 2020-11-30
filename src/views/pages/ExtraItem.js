import React from "react";
import {
   Card,
   Col,
   Row,
   CardHeader,
   CardTitle,
   CardBody,
   Form,
   FormGroup,
   Table,
   Label,
   Input,
} from "reactstrap";
import { connect } from "react-redux";
//material-ui
import Button from "@material-ui/core/Button";

class ExtraItem extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         formData: {},
         extraPrice: 0,
         total: 0,
         name: "",
         addItem: this.props.addItem,
      };
   }
   /*Handle the Extra Items*/
   handleItem = (abc) => {
      this.setState({ extraPrice: abc.price }, () => {
         const total = +this.state.addItem.price + +this.state.extraPrice;

         this.setState({ total });
      });
      let name = abc.itemName;
      this.setState({ name });
   };
   /*Handle the AddToCart */
   handleClick = () => {
      let price = this.state.total
         ? this.state.total
         : this.state.addItem.price;
      let name =
         this.state.addItem.productName + " Extra Item: " + this.state.name;

      let quantity = this.state.addItem.quantity;
      let id = this.state.addItem._id;
      this.props.handleChild(price, name, quantity, id);
   };

   render() {
      const { addItem } = this.state;
      const { addExtraItem, style, styleTable } = this.props;
      return (
         <Row>
            <Col sm="12">
               <Card>
                  <CardHeader style={style}>Combo Items</CardHeader>
                  <CardBody className="pt-2">
                     <Col sm="12">
                        <Table size="md" responsive bordered style={styleTable}>
                           <thead>
                              <tr>
                                 <th>Product Name</th>
                                 <th>Price</th>
                                 <th>Quantity</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <td>{addItem.productName}</td>
                                 <td>
                                    {addItem.price}
                                    &nbsp; INR
                                 </td>
                                 <td>{addItem.quantity}</td>
                              </tr>
                           </tbody>

                           <thead className="pt-4">
                              <tr>
                                 <th>Item Name</th>
                                 <th>Price</th>
                                 <th>Pick One</th>
                              </tr>
                           </thead>
                           {addExtraItem &&
                              addExtraItem.map((item, index) => {
                                 return (
                                    <tbody key={index}>
                                       <tr>
                                          <td>{item.itemName}</td>
                                          <td>
                                             {item.price}
                                             &nbsp; INR
                                          </td>
                                          <td>
                                             <Input
                                                className="ml-3"
                                                type="radio"
                                                name="radio"
                                                onChange={() =>
                                                   this.handleItem(item)
                                                }
                                             />
                                          </td>
                                       </tr>
                                    </tbody>
                                 );
                              })}
                        </Table>
                     </Col>
                  </CardBody>
                  <div className="invoice-total-table">
                     <Row>
                        <Col sm="12">
                           <Table responsive borderless>
                              <tbody>
                                 <tr>
                                    <th className="text-right">Total</th>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div className="d-flex justify-content-between">
                                          <Button
                                             style={{
                                                color: "#000",
                                             }}
                                             color="secondary"
                                             type="submit"
                                             variant="contained"
                                             onClick={() => this.handleClick()}
                                          >
                                             Add To Cart
                                          </Button>

                                          {this.state.total
                                             ? this.state.total
                                             : this.state.addItem.price}
                                       </div>
                                    </td>
                                 </tr>
                              </tbody>
                           </Table>
                        </Col>
                     </Row>
                  </div>
               </Card>
            </Col>
         </Row>
      );
   }
}
//Once data are store in dispatch variable so whenever use it variable to call like this in below:
const mapStateToProps = (state) => {
   return {};
};

export default connect(mapStateToProps)(ExtraItem);
