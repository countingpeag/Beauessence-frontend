import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

class BodyHome extends Component{

    render(){
        const {historical} = this.props;
        console.log("body");
        return(
            <Table striped bordered condensed hover>
                <thead>
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
                                    <td>12/08/2018</td>
                                    <td>{item.price}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        );
    }
}

export default BodyHome;