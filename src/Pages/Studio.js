import React, {Component} from 'react';
import {Card, CardImg, Container, CardGroup} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";
import img1 from "../assets/2bfb01b0a891c3d4d5e6a33a9b5b679f1dd7aef0ab89c4293412df567a97c9cf.jpeg";
import img2 from "../assets/cover.jpeg";
import img3 from "../assets/cover2.jpeg";
import img4 from "../assets/c3.jpeg";

class Contacts extends Component {
    render() {
        return (
            <div>
                <Container>
                    <CardGroup>
                        <Card className={"m-4"}>
                                <CardImg variant={"top"}
                                         src={img1}
                                />
                        </Card>
                        <Card className={"m-4"}>
                                <CardImg variant={"top"}
                                         src={img2}
                                />
                        </Card>
                    </CardGroup>
                    <CardGroup>
                        <Card className={"m-4"}>
                            <CardImg variant={"top"}
                                     src={img3}
                            />
                        </Card>
                        <Card className={"m-4"}>
                            <CardImg variant={"top"}
                                     src={img4}
                            />
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        );
    }
}

export default Contacts;