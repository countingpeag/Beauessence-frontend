import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

function FielGroup({id, label, help, state, ...props}){
    return(
        <FormGroup controlId={id} validationState={state}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl { ...props }/>
            {
                help && <HelpBlock>{help}</HelpBlock>
            }
        </FormGroup>
    );
}

export default FielGroup;