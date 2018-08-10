import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import FielGroup from './FieldGroup';
import '../../styles/LoginStyles.css';

class BodyForm extends Component{

    constructor()
    {
        super();
        this.state = {
            password: '',
            userName: '',
            userNameState: null,
            passwordState: {
                state: null,
                help: null
            },
        }
        this.handleChange = this.handleChange.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }

    handleChange(event){
        if(event.target.id==="userName")
            this.setState({userName: event.target.value});
        else
            this.setState({password: event.target.value});
    }

    clickHandler(){
        const {submitHandler} = this.props;
        if( this.state.password.length<4)
        {
            this.setState({passwordState: {
                state: 'error',
                help: 'La contraseña debe ser mayor a 4 digitos'
            }});
        }
        submitHandler({userName: this.state.userName, password: this.state.password});
    }


    render(){
        const {userName, password} = this.state;
        const {state, help} = this.state.passwordState;
        return(
            <div className="BodyForm">
                <FielGroup 
                    id="userName"
                    label="Nombre de usuario"
                    state={this.state.userNameState}
                    help={null}
                    type="text"
                    placeholder="usuario"
                    onChange={this.handleChange}
                    value={userName}
                />
                <FielGroup
                    id="password"
                    label="Contraseña"
                    state={state}
                    help={help}
                    type="password"
                    placeholder="contraseña"
                    onChange={this.handleChange}
                    value={password}
                />
                <Button id="loginButton" bsStyle="success" onClick={this.clickHandler}>Iniciar Sesion</Button>
            </div>
        );
    }
}

export default BodyForm;