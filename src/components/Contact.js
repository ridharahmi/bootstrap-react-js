import React, {Component, Fragment} from 'react';
import './css/blog.css';

import {Form, Button, Container, Alert} from 'react-bootstrap';

class Contact extends Component {
    render() {
        return (
            <Fragment>
            <div className="blog">
            <Container>
            <Alert  variant="success">
             This is a  alert—check it out!
            </Alert>
            <Form>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label> Textarea</Form.Label>
        <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button variant="outline-info" type="submit">
            Send Message
            </Button>
            </Form>
            </Container>
</div>
            </Fragment>
            );
    }
}

export default Contact;
