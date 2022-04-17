import React, {Component} from 'react';
import {Container, CardGroup, Card} from "react-bootstrap";
import img1 from '../assets/pexels-spencer-selover-428364.jpg'
import  img2 from '../assets/pexels-ike-louie-natividad-3136340.jpg'
import  img3 from '../assets/pexels-ekrulila-3292558.jpg'
import CardHeader from "react-bootstrap/CardHeader";

class About extends Component {
    render() {
        return (
            <div>
                <Container>
                    <CardGroup>
                        <Card className={"m-4"}>
                            <Card.Img variant={"top"}
                                      src={img1}
                            />
                            <CardHeader>
                                <Card.Title>Victor Rosman</Card.Title>
                                <Card.Text>Hi, i've been doing photography since 2017, my favorite style is minimalism </Card.Text>
                            </CardHeader>
                        </Card>
                        <Card className={"m-4"}>
                            <Card.Img variant={"top"}
                                      src={img2}
                            />
                            <CardHeader>
                                <Card.Title>Kristin Kostic</Card.Title>
                                <Card.Text>Hi, i've been doing photography since 2017, my favorite style is story shooting</Card.Text>
                            </CardHeader>
                        </Card>
                        <Card className={"m-4"}>
                            <Card.Img variant={"top"}
                                      src={img3}
                            />
                            <CardHeader>
                                <Card.Title>Ann Fulton</Card.Title>
                                <Card.Text>Hi, i've been doing photography since 2017, my favorite style is lifeStyle</Card.Text>
                            </CardHeader>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        );
    }
}

export default About;