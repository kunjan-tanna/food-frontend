import React from "react"
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

} from "reactstrap";
class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            banquetId:
                this.props.location &&
                    this.props.location.state &&
                    this.props.location.state.banquetId
                    ? this.props.location.state.banquetId // you will get the edit Id here
                    : "",

        };

    }
    render() {

        return (
            <Row>
                <Col md="6" sm="12" className="pt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>welcome</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <h1> hiii</h1>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="6" sm="12">
                    <h2> hello</h2>
                </Col>
            </Row>
        )
    }
}

export default Menu