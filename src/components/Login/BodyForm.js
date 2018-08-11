import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import FielGroup from './FieldGroup';
import PropTypes from 'prop-types';
import '../../styles/LoginStyles.css';

class BodyForm extends Component{

    constructor()
    {
        super();
        this.state = {
            password: '',
            userName: '',
            userNameState: {
                stte1: null,
                help1: null
            },
            passwordState: {
                state2: null,
                help2: null
            },
        }
        this.handleChange = this.handleChange.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }

    //Method to handle every chanche in the textBoxes
    handleChange(event){
        //it checks which box is the event
        if(event.target.id==="userName")
            this.setState({userName: event.target.value});
        else
            this.setState({password: event.target.value});

        //if the usernameBox has more than 1 character the error state is removed
        if(this.state.userName.length>0){
            this.setState({userNameState: {
                state1: null,
                help1: null
            }});
        }

        //if the passwordBox has more than 1 character the error state is removed
        if(this.state.password.length>0){
            this.setState({passwordState: {
                state2: null,
                help2: null
            }});
        }
    }

    //Method to handle every click
    clickHandler(){
        const {submitHandler} = this.props;

        //if the passwordBox has less character than 4 set the passwordSate to error
        if(this.state.password.length<4)
        {
            var help='';
            if(this.state.password.length===0)
                help="Este campo e obligatorio.";
            else
                help="La contraseña debe ser mayor a 4 digitos"

            this.setState({passwordState: {
                state2: 'error',
                help2: help
            }});
        }

        //if the usernameBox is empty set the passwordState to error
        if(this.state.userName.length===0)
        {
            this.setState({userNameState:{
                state1: 'error',
                help1: 'Este campo es obligatorio'
            }});
        }

        if(this.state.password!=='' && this.state.userName!=='')
            submitHandler({userName: this.state.userName, password: this.state.password});

    }


    render(){
        const {userName, password} = this.state;
        const {state1, help1} = this.state.userNameState;
        const {state2, help2} = this.state.passwordState;
        return(
            <div className="BodyForm">
                <FielGroup 
                    id="userName"
                    label="Nombre de usuario"
                    state={state1}
                    help={help1}
                    type="text"
                    placeholder="usuario"
                    onChange={this.handleChange}
                    value={userName}
                />
                <FielGroup
                    id="password"
                    label="Contraseña"
                    state={state2}
                    help={help2}
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

BodyForm.propTypes = {
    submitHandler: PropTypes.func.isRequired,
}

export default BodyForm;