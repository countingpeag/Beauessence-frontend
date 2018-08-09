import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import FielGroup from './FieldGroup';
import '../../styles/LoginStyles.css';

class BodyForm extends Component{

    constructor()
    {
        super();
        this.state = {
            userNameState: '',
            passwordState: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        if(event.target.id==="userName")
            this.setState({userNameState: event.target.value});
        else
            this.setState({passwordState: event.target.value});
        
        localStorage.setItem('userName', this.state.userNameState);
        localStorage.setItem('password', this.state.passwordState);
    }

    render(){
        const {userNameState, passwordState} = this.state;
        const {submitHandler} = this.props;
        return(
            <div className="BodyForm">
                <FielGroup 
                    id="userName"
                    label="Nombre de usuario"
                    state={null}
                    help={null}
                    type="text"
                    placeholder="usuario"
                    onChange={this.handleChange}
                    value={userNameState}
                />
                <FielGroup
                    id="password"
                    label="Contraseña"
                    state={null}
                    help={null}
                    type="password"
                    placeholder="contraseña"
                    onChange={this.handleChange}
                    value={passwordState}
                />
                <Button id="loginButton" bsStyle="success" onClick={submitHandler}>Iniciar Sesion</Button>
            </div>
        );
    }
}

export default BodyForm;