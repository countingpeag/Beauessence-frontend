import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../../styles/HomeStyles.css';

function NavBar({handleClick})
{
    const clickEvent = event => {
        handleClick(event.target.id);
    };

    return(
        <div>
            <Navbar className="navBar">
                <Navbar.Header>
                    <Navbar.Brand>
                        Beauessence
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem key={1} id="home" onClick={clickEvent}>
                            Inicio
                        </NavItem>
                        <NavItem key={2} id="profile" onClick={clickEvent}>
                            Perfil
                        </NavItem>
                        <NavItem key={3} id="logout" onClick={clickEvent}>
                            Cerrar sesion
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;