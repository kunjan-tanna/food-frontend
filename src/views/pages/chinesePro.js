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
import * as IMG from "../../configs/imgConfig";
import backImg from "../../imgs/chinese_bg.jpg";
import chineseItem from "../../imgs/chinese.jpeg";
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
   chineseHeader: {
      backgroundImage: `url(${chineseItem})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
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
class ChinesePro extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         collapse: false,
         product: this.props.rowData,
      };
   }
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
      const { product } = this.state;
      return (
         <Card style={styles.img}>
            <CardHeader>
               <div className="d-flex justify-content-between">
                  <CardTitle tag="h2">{product.banName}</CardTitle>
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
                        src={IMG.default.baseURL + "" + product.image}
                        alt="Generic placeholder image"
                        height="112"
                        width="112"
                     />
                  </Media>
                  <Media body className="pt-3" style={styles.content}>
                     <p>
                        <i>{product.description}</i>
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
               {/* Chinese */}
               <Card>
                  <CardHeader style={styles.chineseHeader}>
                     <CardTitle tag="h5" style={styles.content}>
                        Chinese
                     </CardTitle>
                  </CardHeader>
                  <CardBody>
                     <Table responsive bordered style={styles.table}>
                        <thead>
                           <tr>
                              <th>Product Name</th>
                              <th>Price</th>
                              <th>Quantity</th>
                              <th>Add To Cart</th>
                           </tr>
                        </thead>
                        {product.productDetails &&
                           product.productDetails.map((item, index) => {
                              if (item.categoryName == "Chinese") {
                                 return (
                                    <tbody key={index}>
                                       <tr>
                                          <td>{item.productName}</td>
                                          <td>
                                             {item.price}
                                             &nbsp; INR
                                          </td>
                                          <td>{item.quantity}</td>

                                          <td>
                                             <Button
                                                style={{
                                                   color: "#000",
                                                   marginLeft: "10%",
                                                }}
                                                color="secondary"
                                                type="submit"
                                                variant="contained"
                                                onClick={() =>
                                                   this.props.addItem(item)
                                                }
                                             >
                                                Add To Cart
                                             </Button>
                                          </td>
                                       </tr>
                                    </tbody>
                                 );
                              }
                           })}
                     </Table>
                  </CardBody>
               </Card>
            </Collapse>
         </Card>
      );
   }
}
export default ChinesePro;
