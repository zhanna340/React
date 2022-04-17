import React, {Component} from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import logo from './IMG_7326.png'
import {BrowserRouter, Route, Router, Routes, Switch, Link} from "react-router-dom";

import Home from "../Pages/Home";
import Photographer from "../Pages/Photographer";
import Studio from "../Pages/Studio";

class Header extends Component {
    render() {
        return (
            <>
            <Navbar collapseOnSelect expand={"md"} bg={"light"} variant={"light"}>
                <Container>
                    <Navbar.Brand href={"/"}>
                        <img
                            src={logo}
                            height={"25"}
                            width={"30"}
                            className={"d-inline-block align-top"}
                            alt={"Logo"}
                        /> Gallery
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={"responsive-navbar-nav"} />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className={"me-auto"}>
                            <Nav.Link href={"/"}>Home</Nav.Link>
                            <Nav.Link href={"/photographer"}>Photographers</Nav.Link>
                            <Nav.Link href={"/studio"}>Studios</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/Photographer"} element={<Photographer/>}/>
                        <Route path={"/Studio"} element={<Studio/>}/>
                    </Routes>
                </BrowserRouter>
                </>
        );
    }
}

export default Header;