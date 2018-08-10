import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../../styles/HomeStyles.css';

function NavBar(){
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
                        <NavItem key={1} href="#">
                            Inicio
                        </NavItem>
                        <NavItem key={2} href="#">
                            Perfil
                        </NavItem>
                        <NavItem key={2} href="#">
                            Cerrar sesion
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;