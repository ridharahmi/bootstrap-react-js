import React, {Component, Fragment} from 'react';
import './css/Jumb.css';

import {Jumbotron,Button , Container} from 'react-bootstrap';

class Jumb extends Component {
    render() {
        return (
            <Fragment>
            <div className="jumb">
            <Container>
            <Jumbotron >
                <h1>Hello, world!</h1>
                <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="success">Learn More</Button>

        </p>
                </Jumbotron>
                </Container>
        </div>
        </Fragment>
    );
    }
}

export default Jumb;
