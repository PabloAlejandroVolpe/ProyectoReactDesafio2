import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartWidget from '../CartWidget/CartWidget';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom"
import './NavBar.css'

const NavBar = (props) => {
    const {nombre="Invitado"} = props
    return (
            <Container fluid id="cont-reset-side-pad">
                    <Row id="row-navbar-styles">
                        <Col md={12} xl={7}>
                            <Nav id="just-start-nowrap">
                                <NavDropdown id="nav-dropdown-styles" title="Categorías" >
                                    <NavDropdown.Item as={Link} to="/categories/rolls">Rolls</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/categories/laminas">Sashimis</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/categories/nigiris">Nigiris</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link as={Link} to="/products">inicio</Nav.Link>
                            </Nav>
                        </Col>
                        <Col md={12} xl={5}>
                            <Nav id="just-end-to-center-nowrap">
                                <Nav.Link as={Link} to="/" >Hola {nombre}!</Nav.Link>
                                <Nav.Link as={Link} to="/cart" > <CartWidget productos="4"/> </Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
            </Container>
    )
}

export default NavBar