import React, {Component} from 'react';
import {Table, Image, Button} from 'react-bootstrap';
import Popup from './Popup';
import '../../../../styles/HomeStyles.css';

class BodyHome extends Component{

    constructor()
    {
        super();
        this.state = {
            open: false,
        };

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    
      handleClickOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

    updateClick = () => {
        alert("actualizar");
    }

    deleteClick = () => {
        alert("eliminar");
    }

    render(){
        const {historical} = this.props;
        return(
            <div> 
            <Table striped bordered condensed hover>
                <thead className="headertable">
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Servicio</th>
                        <th>Detalles</th>
                        <th>Comentarios</th>
                        <th>Fecha</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                         historical.map( item => {
                            return(
                                <tr key={item.idHistorical}>
                                    <td>{item.idHistorical}</td>
                                    <td>{item.staff.firstName}</td>
                                    <td>{item.staff.lastName}</td>
                                    <td>{item.service.serviceName}</td>
                                    <td>{item.service.details}</td>
                                    <td>{item.comment}</td>
                                    <td>{item.historicalDate}</td>
                                    <td>{item.price}</td>
                                    <td id="buttons">
                                        <Image id="updateimage" src={require('../../../../images/update.png')} 
                                            onClick={this.handleClickOpen} />
                                        <Image id="deleteimage" src={require('../../../../images/delete.png')} 
                                            onClick={this.handleClickOpen} />
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
            <Popup openfun={this.state.open} closefun={this.handleClose}/>
            </div>
        );
    }
}

export default BodyHome;