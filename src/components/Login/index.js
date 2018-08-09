import React, { Component } from 'react';
import Header from './Header';
import BodyForm from './BodyForm';
import Footer from './Footer';
import { Grid, Row, Col } from 'react-bootstrap';
import '../../styles/LoginStyles.css';

class Login extends Component{
    
    clickHandler(){
        const {submitHandler} = this.props;
        console.log("secont step");
        submitHandler();
    }

    render(){
        return(
            <Grid>
                <Row>
                    <Col xs={12} sm={6} md={3} mdOffset={4} className="ColHeader">
                        <div>
                            <Header />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={3} mdOffset={4} className="ColForm">
                        <div>
                            <BodyForm submitHandler={ () => this.clickHandler()}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={3} mdOffset={4} className="ColFooter">
                        <div>
                            <Footer />
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Login;