import React from 'react';
import {Image} from 'react-bootstrap';
import '../../styles/LoginStyles.css';

function Header(){
    return(
        <div>
            <Image id="loginImage" src={require("../../images/beauessence.jpg")} />
        </div>
    );
}

export default Header;