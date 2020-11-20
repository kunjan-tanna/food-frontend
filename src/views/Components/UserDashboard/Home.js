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
import { history } from "../../../history";
import * as globalActions from "../../../redux/actions/global";
import IMG from "../../../configs/imgConfig";
import { MapPin } from "react-feather";

class Home extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [],
         latitude: "",
         searchVal: "",
         longtitude: "",
         rowData: [],
      };
   }
   /*To get Current Location*/
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
   /*Handle the location error*/
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
   /*To get current latitude & longtitude*/
   getCoordinates = (position) => {
      //70.4645757, 21.5134252
      const data = position.coords.latitude;
      const abc = position.coords.longitude;

      this.props
         .dispatch(globalActions.getNearBanquet(abc, data))
         .then((res) => {
            let data = res.data;
            this.setState({ data });
         });
   };

   /*For Searching Value*/
   updateSearchQuery = (val) => {
      this.setState({
         searchVal: val,
      });
   };
   /*On load screen to show nearBy location*/
   componentDidMount = () => {
      this.props.dispatch(globalActions.getBanquet()).then((res) => {
         let rowData = res.data;
         this.setState({ rowData });
      });
      this.getLocation();
   };

   render() {
      const final =
         this.state.data &&
         this.state.data.map((item) => {
            return item.banquetId;
         });
      let filteredData = final.filter((data) => {
         return (
            data.banName
               .toLowerCase()
               .indexOf(this.state.searchVal.toLowerCase()) !== -1
         );
      });
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
                                 onChange={(e) =>
                                    this.updateSearchQuery(e.target.value)
                                 }
                                 value={this.state.value}
                              />
                              <InputGroupAddon addonType="append">
                                 <InputGroupText>
                                    <MapPin size="15" />
                                 </InputGroupText>
                              </InputGroupAddon>
                           </InputGroup>
                        </Col>
                        <Row className="pt-4">
                           {filteredData && filteredData.length > 0
                              ? filteredData.map((item, index) => {
                                   return (
                                      <Col lg="4" sm="12" key={index}>
                                         <Card
                                            body
                                            outline
                                            style={{
                                               borderColor: "#333",
                                               cursor: "pointer",
                                            }}
                                            className="mt-4"
                                            onClick={() =>
                                               history.push(
                                                  `/menu?banquetId=${item._id}`
                                               )
                                            }
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
                                })
                              : "No such venue found near you!"}
                        </Row>
                     </Col>
                  </CardBody>
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

export default connect(mapStateToProps)(Home);
