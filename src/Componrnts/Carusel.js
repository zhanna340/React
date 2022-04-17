import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../assets/pexels-photo-4098275.jpg'
import img2 from '../assets/4f5aea67ea1ab9edd069f5ca1da377d3fe24ea55.jpg'
import img3 from '../assets/cf7b0084151bb7444efa72bbfed459909b9a9796.jpg'


class Carusel extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className={"d-block w-100"}
                        src={img1}
                        alt={"IMG_1"}
                    />
                    <Carousel.Caption>
                        <h3>Kristin Kostic</h3>
                        <p>Studio 3</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={"d-block w-100"}
                        src={img2}
                        alt={"IMG_2"}
                    />
                    <Carousel.Caption>
                        <h3>Victor Rosman</h3>
                        <p>Studio 2</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={"d-block w-100"}
                        src={img3}
                        alt={"IMG_3"}
                    />
                    <Carousel.Caption>
                        <h3>Ann Fulton</h3>
                        <p>Studio 4</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default Carusel;