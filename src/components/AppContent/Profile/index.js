import React, { Component } from 'react';
import {Grid, Row, Col, Image, Label, OverlayTrigger, Popover}  from 'react-bootstrap';
import {storage} from '../../Storage/Storage';
import '../../../styles/ProfileStyles.css';

class Profile extends Component{

    render(){
        const {firstName, lastName, userName } = storage.getContent();

        const popoverRight = (
            <Popover id="popover-positioned-right">
              <strong>Hola!</strong> Bienvenido {storage.getContent().firstName}.
            </Popover>
        );

        return(
            <Grid>
                <Row>
                    <Col xs={5} sm={5} md={5} className="info">
                        <OverlayTrigger trigger="click" placement="right" overlay={popoverRight}>
                            <Image className="avatar" src={require("../../../images/logo.jpg")} rounded />
                        </OverlayTrigger >
                        <h1><Label className="h1Profile">Usuario: {userName}</Label></h1>
                        <h1><Label className="h1Profile">Nombre: {firstName}</Label> </h1>
                        <h1><Label className="h1Profile">Apellido: {lastName}</Label></h1>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Profile;