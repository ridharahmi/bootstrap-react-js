import React, {Component, Fragment} from 'react';
import './css/blog.css';

import {Media, Container, Table} from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <Fragment>
            <div className="about">
            <Container>
            <Media>
            <img
        width={64}
        height={64}
        className="align-self-start mr-3"
        src="http://placehold.it/64x64"
        alt="Generic placeholder"
            />
            <Media.Body>
            <h5>Media Heading</h5>
        <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
        </p>

        <p>
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
        </p>
        </Media.Body>
        </Media>

        <Media>
        <img
        width={64}
        height={64}
        className="align-self-center mr-3"
        src="http://placehold.it/64x64"
        alt="Generic placeholder"
            />
            <Media.Body>
            <h5>Media Heading</h5>
        <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
        </p>

        <p>
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
        </p>
        </Media.Body>
        </Media>

        <Media>
        <img
        width={64}
        height={64}
        className="align-self-end mr-3"
        src="http://placehold.it/64x64"
        alt="Generic placeholder"
            />
            <Media.Body>
            <h5>Media Heading</h5>
        <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
        </p>

        <p className="mb-0">
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
        </p>
        </Media.Body>
        </Media>
        <Table striped bordered hover>
        <thead>
        <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        </tr>
        <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        </tr>
        <tr>
        <td>3</td>
        <td colSpan="2">Larry the Bird</td>
        <td>@twitter</td>
        </tr>
        </tbody>
        </Table>
        </Container>
</div>
        </Fragment>
         );
    }
}

export default About;
