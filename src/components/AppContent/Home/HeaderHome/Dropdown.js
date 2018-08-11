import React from 'react';
import {ButtonToolbar, DropdownButton} from 'react-bootstrap';


function Dropdown({title, ...props}){
    return(
        <ButtonToolbar>
            <DropdownButton
                bsSize="large"
                title="Personal"
                id="dropdown-size-large"
            >
            {
                props.items
            }
            </DropdownButton>
        </ButtonToolbar>
    );
}

export default Dropdown;