import React, {Component, Fragment} from 'react';
import Slider from './Slider';
import Jumb from './Jumb';

class Home extends Component {
    render() {
        return (
            <Fragment>
            <Slider/>
            <Jumb/>
            </Fragment>
    )
        ;
    }
}

export default Home;
