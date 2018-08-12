import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import HeaderHome from './HeaderHome/HeaderHome';
import BodyHome from './BodyHome';

class Home extends Component{
    render(){
        return(
            <Grid>
                <Row>
                    <Col>
                        <HeaderHome />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <BodyHome />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Home;