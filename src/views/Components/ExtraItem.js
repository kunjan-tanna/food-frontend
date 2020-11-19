import React from "react";
import {
   Card,
   Col,
   Row,
   Button,
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
import * as globalActions from "../../redux/actions/global";

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
   handleItem = (abc) => {
      this.setState({ extraPrice: abc.price }, () => {
         const total = +this.state.addItem.price + +this.state.extraPrice;

         this.setState({ total });
      });
      let name = abc.itemName;
      this.setState({ name });
   };
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
   handleFormSubmit = () => {};
   render() {
      const { addItem } = this.state;
      const { addExtraItem } = this.props;
      return (
         <Row>
            <Col sm="12">
               <Card>
                  <CardHeader>Combo Items</CardHeader>
                  <CardBody className="pt-2">
                     <Col sm="12">
                        <Table size="md" responsive bordered>
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
                              addExtraItem.map((iten, index) => {
                                 return (
                                    <tbody key={index}>
                                       <tr>
                                          <td>{iten.itemName}</td>
                                          <td>
                                             {iten.price}
                                             &nbsp; INR
                                          </td>
                                          <td>
                                             <Input
                                                className="ml-3"
                                                type="radio"
                                                name="radio"
                                                onChange={() =>
                                                   this.handleItem(iten)
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
                                             className="mr-1"
                                             color="primary"
                                             type="submit"
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
