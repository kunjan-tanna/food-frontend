import React from "react";
//import spinnerImg from "../imgs/loading.gif";
import spinnerImg from "../imgs/loader-2_food.gif";
import backImg from "../imgs/loaderImg.jpeg";

const styles = {
   loaderContainer: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      //backgroundImage: `url(${backImg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
   },
   loader: {
      left: "35%",
      top: "30%",
      position: "absolute",
   },
};

class Spinner extends React.Component {
   render() {
      return (
         <div style={styles.loaderContainer}>
            <div style={styles.loader}>
               <img style={styles.img} src={spinnerImg} />
            </div>
         </div>
      );
   }
}
export default Spinner;
