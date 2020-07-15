import React, {Component, Fragment} from 'react';
import './css/footer.css';
import logo_react from '../logo.svg';
import logo_bootstrap from './img//bootstrap.png';

import { Button, Form, Row, Col, Container} from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <Fragment>
            <footer className="footer">
            <Container>
            <Row>
            <Col md={4}>
            <img src={logo_react} width="150"/>
            </Col>
            <Col md={4}>
            <img src={logo_bootstrap} width="150"/>

            </Col>
            <Col md={4}>
            <Form>
            <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Your email" />

        </Form.Group>

            <Button variant="outline-success" type="submit">
            subscribe
            </Button>
            </Form>

            </Col>
            <Col md={12}>
            <div className="copyright">
            <p>© 2020 Copyright VueJs. Tous droits réservés. Réalisé par <a href="https://www.facebook.com/MedRidhaRahmi" target="_blank">Ridha Rahmi</a></p>
</div>
            </Col>
        </Row>
        </Container>
        </footer>
        </Fragment>
    );
    }
}

export default Footer;
