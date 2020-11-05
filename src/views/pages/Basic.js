import React from "react";
import "../../index.css";

class Basic extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        title: "My Title",
                        descripition: "My Description",
                };
                console.log("PROPSSS", this.props);
        }
        render() {
                return (
                        <div>
                                <div className="container-fluid">
                                        <div className="bg-dark text-white text-center">
                                                <h2 className="display-4">
                                                        {this.state.title}
                                                </h2>
                                                <p className="lead">
                                                        {
                                                                this.state
                                                                        .descripition
                                                        }
                                                </p>
                                        </div>
                                </div>
                        </div>
                );
        }
}

export default Basic;
