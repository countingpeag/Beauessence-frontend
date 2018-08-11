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

        this.toRender = this.toRender.bind(this);
    }

    handleNavBar(pressedElement){
        this.setState({navBarState: pressedElement});
    }

    toRender(){
        const {logout} = this.props;
        const {navBarState} = this.state;
        if(navBarState==='home')
            return <Home />
        else if(navBarState==='profile')
            return <Profile />
        else
            logout();
    }

    render(){
        return(
            <Grid fluid>
                <Row>
                    <NavBar handleClick={ pressedElement => this.handleNavBar(pressedElement)}/>
                </Row>
                <Row>
                    {
                        this.toRender()
                    }
                </Row>
            </Grid>
        );
    }
}

export default AppContent;