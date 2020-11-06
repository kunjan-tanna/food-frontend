import React from "react";
import {
   CardBody,
   CardHeader,
   Card,
   Button,
   Row,
   Col,
   CardText,
   Input,
   CardLink,
   CardImg,
   Nav,
   NavItem,
   NavLink,
   CardTitle,
   InputGroup,
   InputGroupAddon,
   InputGroupText,
} from "reactstrap";
import { connect } from "react-redux";
import * as globalActions from "../../../redux/actions/global";
import IMG from "../../../configs/imgConfig";
import { Star, Edit, Trash2, Search, MapPin, ThumbsUp } from "react-feather";

class Home extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [],
         latitude: null,
         longtitude: null,
         rowData: [],
      };
      // console.log("UserData", this.props);
   }
   getLocation = () => {
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(
            this.getCoordinates,
            this.handleLocation
         );
      } else {
         alert("hi");
      }
   };
   handleLocation = (error) => {
      switch (error.code) {
         case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
         case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
         case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
         case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
         default:
      }
   };
   getCoordinates = (postion) => {
      const data = postion.coords.latitude;
      const abc = postion.coords.longitude;
      const final = data + " , " + abc;
      this.setState({ data: final });
   };

   componentDidMount = () => {
      this.props.dispatch(globalActions.getBanquet()).then((res) => {
         let rowData = res.data;
         this.setState({ rowData });
      });
      this.getLocation();
      // console.log("ComponentDidMount");
      // this.props.dispatch(trackerAction.getData()).then((res) => {
      //    console.log("Tracker Data", res);
      //    if (res) {
      //       this.setState({ formData: res }); //() => {console.log();}
      //    }
      // });
   };
   render() {
      console.log(this.state.data);
      return (
         <Row>
            <Col sm="12">
               <Card className="pt-1">
                  <CardBody>
                     <Col sm="12">
                        <Col
                           sm="12"
                           md={{ size: 4, offset: 4 }}
                           style={{ paddingTop: 20 }}
                        >
                           <InputGroup>
                              <Input
                                 type="text"
                                 id="banquet"
                                 placeholder="Search Banquet"
                                 //onChange={this.handleDiscount}
                              />
                              <p>{this.state.data}</p>
                              <InputGroupAddon addonType="append">
                                 <InputGroupText>
                                    <MapPin size="15" />
                                 </InputGroupText>
                              </InputGroupAddon>
                           </InputGroup>
                        </Col>
                        <Row className="pt-4">
                           {this.state.rowData &&
                              this.state.rowData.map((item, index) => {
                                 return (
                                    <Col lg="4" sm="12" key={index}>
                                       <Card
                                          body
                                          outline
                                          style={{
                                             borderColor: "#333",
                                          }}
                                          className="mt-4"
                                       >
                                          <CardHeader className="justify-content-between">
                                             <div className="card-heading">
                                                <CardTitle>
                                                   <h6>
                                                      <strong>
                                                         {item.banName}
                                                      </strong>
                                                   </h6>
                                                </CardTitle>
                                                <CardText>
                                                   <CardLink
                                                      href={item.locationLink}
                                                   >
                                                      <MapPin size="15" />{" "}
                                                      &nbsp; Find Location
                                                   </CardLink>
                                                </CardText>
                                             </div>
                                          </CardHeader>
                                          <CardBody>
                                             <CardImg
                                                variant="bottom"
                                                src={
                                                   IMG.baseURL +
                                                   "/" +
                                                   item.avtar
                                                }
                                             />
                                             <hr />
                                             <div className="justify-content-between">
                                                <i>Capacity:&nbsp;&nbsp;</i>
                                                <span className="text-success">
                                                   {item.capacity}
                                                </span>
                                                <br />
                                                <br />
                                                <i>Location:&nbsp;&nbsp;</i>
                                                <span className="text-secondary">
                                                   {item.location}
                                                </span>
                                                <br />
                                                <br />
                                                <i>Mobile:&nbsp;&nbsp;</i>
                                                <span className="text-info">
                                                   {item.mobile}
                                                </span>
                                             </div>
                                          </CardBody>
                                       </Card>
                                    </Col>
                                 );
                              })}
                        </Row>
                     </Col>
                  </CardBody>
               </Card>
            </Col>
         </Row>
      );
   }
}
const mapStateToProps = (state) => {
   return {};
};

export default connect(mapStateToProps)(Home);
