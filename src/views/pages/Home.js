import React from "react";
import {
   Card,
   CardBody,
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
import HomeStart from "../Components/HomeStart";
import { history } from "../../history";
import * as globalActions from "../../redux/actions/global";
import IMG from "../../configs/imgConfig";
import img from "../../imgs/logo.jpg";
//material-ui
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import LocationOn from "@material-ui/icons/LocationOn";
import InputBase from "@material-ui/core/InputBase";

const styles = (theme) => ({
   root: {
      borderColor: "#333",
      cursor: "pointer",
   },
   row: {
      marginLeft: theme.spacing(5),
      position: "relative",
      flex: 1,
      paddingTop: 20,
   },
   input: {
      flex: 1,

      position: "relative",
   },
   results: {
      position: "absolute",
      bottom: -166,
      left: "26%",
      zIndex: 999,
      width: 760,
      height: "15%",
   },
   iconButton: {
      padding: 1,
   },
   divider: {
      height: 28,
      margin: 4,
   },
   center: {
      textAlign: "center",
   },
});

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
         .dispatch(globalActions.getNearBanquet(70.4645757, 21.5134252))
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
      const { classes } = this.props;
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
            <HomeStart />
            <Col sm="12">
               <Grid item>
                  <Typography variant="h5" className={classes.center} noWrap>
                     Your favourite food, delivered with FoodOrder&nbsp;&nbsp;
                     <span style={{ fontSize: 40 }}>🍽</span>
                  </Typography>
               </Grid>
               <Col
                  sm="12"
                  md={{ size: 4, offset: 4 }}
                  style={{ paddingTop: 20 }}
               >
                  <InputGroup>
                     <InputGroupAddon addonType="append">
                        <InputGroupText>
                           <LocationOn className={classes.iconButton} />
                        </InputGroupText>
                     </InputGroupAddon>
                     <Input
                        type="text"
                        //className={classes.input}
                        id="banquet"
                        placeholder="Search Banquet"
                        onChange={(e) => this.updateSearchQuery(e.target.value)}
                        value={this.state.value}
                     />
                  </InputGroup>
               </Col>
               <Row className={classes.row}>
                  {filteredData && filteredData.length > 0
                     ? filteredData.map((item, index) => {
                          return (
                             <Col lg="4" sm="12" key={index}>
                                <Card
                                   body
                                   outline
                                   className={classes.root}
                                   variant="outlined"
                                   onClick={() =>
                                      history.push(
                                         `/menu?banquetId=${item._id}`
                                      )
                                   }
                                >
                                   <CardHeader
                                      title={
                                         <Typography
                                            component="h6"
                                            variant="h6"
                                         >
                                            {item.banName}
                                         </Typography>
                                      }
                                      subheader={
                                         <CardActionArea
                                            href={item.locationLink}
                                         >
                                            <CardContent>
                                               <LocationOn />
                                               &nbsp; Find Location
                                            </CardContent>
                                         </CardActionArea>
                                      }
                                   ></CardHeader>
                                   <CardBody>
                                      <CardImg
                                         variant="bottom"
                                         src={IMG.baseURL + "/" + item.avtar}
                                      />
                                      <hr />
                                      <div className="justify-content-between">
                                         <i>Capacity:&nbsp;&nbsp;</i>
                                         <Typography
                                            variant="caption"
                                            color="initial"
                                         >
                                            {item.capacity}
                                         </Typography>
                                         <br />
                                         <br />
                                         <i>Location:&nbsp;&nbsp;</i>
                                         <Typography
                                            variant="caption"
                                            color="initial"
                                         >
                                            {item.location}
                                         </Typography>

                                         <br />
                                         <br />
                                         <i>Mobile:&nbsp;&nbsp;</i>
                                         <Typography
                                            variant="caption"
                                            color="initial"
                                         >
                                            {item.mobile}
                                         </Typography>
                                      </div>
                                   </CardBody>
                                </Card>
                             </Col>
                          );
                       })
                     : "No such venue found near you!"}
               </Row>
            </Col>
         </Row>
      );
   }
}
//Once data are store in dispatch variable so whenever use it variable to call like this in below:
const mapStateToProps = (state) => {
   return {};
};

export default connect(mapStateToProps)(
   withStyles(styles, { withTheme: true })(Home)
);
