import React from 'react';
import PropTypes from 'prop-types';
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

FielGroup.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    help: PropTypes.string,
    state: PropTypes.string
}

export default FielGroup;