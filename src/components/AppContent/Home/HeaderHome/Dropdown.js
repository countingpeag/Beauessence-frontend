import React from 'react';
import {ButtonToolbar, DropdownButton} from 'react-bootstrap';


function Dropdown({title="nuevo", nuevo, ...props}){
    return(
        <ButtonToolbar>
            <DropdownButton
                bsSize="large"
                title={title}
                id="dropdown-size-large"
            >
            {
                props.items
            }
            {
                nuevo
            }
            </DropdownButton>
        </ButtonToolbar>
    );
}

export default Dropdown;