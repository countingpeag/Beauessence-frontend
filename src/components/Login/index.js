import React, { Component } from 'react';
import FielGroup from './FieldGroup';
import Header from './Header';
import Footer from './Footer';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import '../../styles/LoginStyles.css';

class Login extends Component{

    constructor()
    {
        super();
        this.state = {
            userNameState: null,
            passwordState: null
        }
    }

    render(){
        const {userNameState, passwordState} = this.state;
        return(
            <Grid>
                <Row>
                    <Col xs={12} sm={6} md={4} mdOffset={5} className="headerForm">
                        <Header />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={4} mdOffset={5} className="loginForm">
                    <div>
                        <FielGroup 
                            id="userName"
                            label="Nombre de usuario"
                            state={userNameState}
                            help={null}
                            type="text"
                            placeholder="usuario"
                        />
                        <FielGroup
                            id="password"
                            label="Password"
                            state={passwordState}
                            help={null}
                            type="password"
                            placeholder="password"
                        />
                        <Button bsStyle="success">Iniciar Sesion</Button>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={4} mdOffset={5} className="headerForm">
                        <Footer />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Login;