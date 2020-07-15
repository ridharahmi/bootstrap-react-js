import React, {Component, Fragment} from 'react';
import './css/blog.css';

import {Row, Col, Container, Card, Button} from 'react-bootstrap';

class Blog extends Component {
    render() {
        return (
            <Fragment>
            <div className="blog">
            <Container>
            <Row>
            <Col md={4}>
            <Card>
                 <Card.Img variant="top" src="http://placehold.it/300x200" />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="outline-primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </Col>
        <Col md={4}>
            <Card>
            <Card.Img variant="top" src="http://placehold.it/300x200" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </Card.Text>
        <Button variant="outline-primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </Col>
        <Col md={4}>
            <Card>
            <Card.Img variant="top" src="http://placehold.it/300x200" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </Card.Text>
        <Button variant="outline-primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </Col>
        <Col md={4}>
            <Card>
            <Card.Img variant="top" src="http://placehold.it/300x200" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </Card.Text>
        <Button variant="outline-primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </Col>
        <Col md={4}>
            <Card>
            <Card.Img variant="top" src="http://placehold.it/300x200" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </Card.Text>
        <Button variant="outline-primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </Col>
        <Col md={4}>
            <Card>
            <Card.Img variant="top" src="http://placehold.it/300x200" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </Card.Text>
        <Button variant="outline-primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </Col>
        </Row>
            </Container>
            </div>
            </Fragment>
    );
    }
}

export default Blog;
