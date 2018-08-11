import React, {Component} from 'react';
import { Grid, Row } from 'react-bootstrap';
import NavBar from './NavBar';
import Home from './Home';
import Profile from './Profile';

class AppContent extends Component{

    constructor(){
        super();
        this.state = {
            navBarState: 'home'
        };
    }

    handleNavBar(pressedElement){
        this.setState({navBarState: pressedElement});
    }

    render(){
        const { navBarState } = this.state;
        return(
            <Grid fluid>
                <Row>
                    <NavBar handleClick={ pressedElement => this.handleNavBar(pressedElement)}/>
                </Row>
                <Row>
                    {
                        navBarState==='home' ? <Home /> : <Profile /> 
                    }

                </Row>
            </Grid>
        );
    }
}

export default AppContent;