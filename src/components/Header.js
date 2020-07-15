import React, {Component, Fragment, useState, useEffect} from 'react';
import {Navbar, NavDropdown, Nav, Modal, Button} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';


function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <Fragment>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
        <NavLink exact activeClassName="active" to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" activeClassName="active" className="nav-link">About Us</NavLink>
         <NavLink to="/blog" activeClassName="active" className="nav-link">Blog</NavLink>
        <NavLink to="/contact" activeClassName="active" className="nav-link">Contact Us</NavLink>
      <Nav.Link  onClick={handleShow}>
        Login
        </Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
    <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <img
    className="d-block w-100"
    src="http://placehold.it/300x200"
    alt="modal"
        />
    Woohoo, you're reading this text in a modal!' +
    '</Modal.Body>
    <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
        Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
        Save Changes
    </Button>
    </Modal.Footer>
    </Modal>
    </Fragment>
);

}

export default Header;
