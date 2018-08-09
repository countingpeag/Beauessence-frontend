import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import FielGroup from './FieldGroup';
import '../../styles/LoginStyles.css';

class BodyForm extends Component{

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
            <div className="BodyForm">
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
                    label="Contraseña"
                    state={passwordState}
                    help={null}
                    type="password"
                    placeholder="contraseña"
                />
                <Button id="loginButton" bsStyle="success">Iniciar Sesion</Button>
            </div>
        );
    }
}

export default BodyForm;