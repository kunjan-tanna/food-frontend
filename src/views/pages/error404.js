import React from "react";
import errorImg from "../../imgs/404-error-page.jpg";

class error404 extends React.Component {
   render() {
      return (
         <div style={{ textAlign: "center" }}>
            <img src={errorImg} />
         </div>
      );
   }
}

export default error404;
