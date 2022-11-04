import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './SearchBar.css'
import Logo from "../logotodosushi.png"
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';


const SearchBar = () => {
    return (
        <Container fluid id="cont-bg">
            <Row className="searchBarText">
                <Col sm={12} lg={3} >
                    <Nav.Link as={Link} to="/"><img  src={Logo} className="nav-logo" alt="logo temporario" />TodoSushi</Nav.Link>
                </Col>
                <Col sm={6} lg={6} >
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Buscar un producto"
                            className="me-10"
                            aria-label="Search"
                        />
                    </Form>
                </Col>
                <Col sm={12} lg={3}  id="offer-just">
                    Bienvenido a todo sushi!
                </Col>
            </Row>

        </Container>
    )
}
export default SearchBar;