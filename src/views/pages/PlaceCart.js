import React from "react";
import {
   CardBody,
   CardHeader,
   Card,
   Button,
   Row,
   Col,
   Table,
   CardTitle,
   Modal,
   ModalHeader,
   ModalBody,
} from "reactstrap";

const styles = {
   content: {
      width: "100%",
      color: "white",
      backgroundColor: "rgba(0, 3, 0, 0.5)",
   },
};
class PlaceCart extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         cartData: this.props.cartData,
         prevPrice: 0,
         price: 0,
         total: 0,
         total1: 0,
         updateData: [],
         showLeadModal: false,
      };
   }
   componentDidMount = () => {
      let price = this.state.cartData;
      let total1 =
         price &&
         price.reduce((totalitem, item) => +totalitem + +item.price, 0);
      this.setState({ total1 });
      this.props.cartTotal(total1);
   };

   render() {
      const { style } = this.props;
      return (
         <Card className="mb-4" style={style}>
            <CardHeader>
               <CardTitle tag="h5">Orders Details</CardTitle>
            </CardHeader>
            <CardBody>
               <Table style={styles.content} bordered>
                  <thead>
                     <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                     </tr>
                  </thead>
                  {this.state.cartData.length > 0
                     ? this.state.cartData &&
                       this.state.cartData.map((i, index) => {
                          return (
                             <tbody key={index}>
                                <tr>
                                   <td>{i.productName}</td>
                                   <td>{i.price}&nbsp; INR</td>
                                   <td>{i.quantity}</td>
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
                     <Table
                        style={{ color: "white", paddingTop: "10px" }}
                        responsive
                        borderless
                     >
                        <tbody>
                           <tr>
                              <th className="text-right">Total</th>
                           </tr>
                           <tr>
                              <td className="text-right">
                                 {this.state.total1}
                              </td>
                           </tr>
                        </tbody>
                     </Table>
                  </Col>
               </Row>
            </div>
         </Card>
      );
   }
}

export default PlaceCart;
