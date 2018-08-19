import React, {Component} from 'react';
import {Table, Image, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import axios from 'axios';
import Popup from './Popup';
import '../../../../styles/HomeStyles.css';
import FielGroup from '../../../Login/FieldGroup';

class BodyHome extends Component{

    constructor()
    {
        super();
        this.state = {
            open: false,
            itemSelected: {},
            commentState: "",
            priceState: ""
        };

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleClickOpen = item => {
        const {comment, price} = item;
        this.setState({ 
            open: true, 
            itemSelected:item,
            commentState: comment, 
            priceState: price
        });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };

    handleSave = () => {
        const {idHistorical, staff, service, historicalDate} = this.state.itemSelected;
        const {commentState, priceState} = this.state;

        const historicalObj = {
            idHistorical,
            staff,
            service,
            comment:commentState,
            price: priceState,
            historicalDate

        };

        axios.post('http://localhost:8080/BeautyEssence/rest/historical/update', historicalObj)
        .then(  ({data}) => {
            if(data!=="Updated")
                alert("Actualizado");
            else
                alert("El elemento no pudo ser actualizar");
        })
        .catch(error => {
            console.log(error);
        });

        this.setState({ open: false });                                        
    }

    handleDelete(item)
    {
        axios.delete(`http://localhost:8080/BeautyEssence/rest/historical/${item.idHistorical}`)
        .then( ({data}) => {
            if(data!=="Deleted")
                alert("Eliminado");
            else
                alert("El elemento no pudo ser eliminado");
        })
        .catch(error => {
            console.log(error);
        });
    }

    handleChange = event => {
        const {id, value} = event.target;
        if(id==="textArea"){
            this.setState({commentState: value});
        }
        else{
            this.setState({priceState: value});
        }
    }

    render(){
        const {historical} = this.props;
        const {idHistorical, service, staff} = this.state.itemSelected;
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
                                                onClick={() => this.handleClickOpen(item)} />
                                            <Image id="deleteimage" src={require('../../../../images/delete.png')} 
                                                onClick={() => this.handleDelete(item)} />
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </Table>
                <Popup 
                    open={this.state.open} 
                    closefunc={this.handleClose} 
                    savefunc={this.handleSave}
                    title="Editar" 
                    content={
                        <div>
                            <h3>{idHistorical}</h3>
                            <h3>{staff && staff.firstName}</h3>
                            <h3>{service && service.serviceName}</h3>
                            <FormGroup controlId="textArea" className="textArea">
                                <ControlLabel>Comentarios</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="comentarios" value={this.state.commentState} onChange={this.handleChange} />
                            </FormGroup>
                            <FielGroup
                                id="price"
                                state={null}
                                help={null}
                                type="text"
                                placeholder="precio"
                                label="Precio"
                                onChange={this.handleChange} 
                                value={this.state.priceState}
                            />
                        </div>
                    } 
                />
            </div>
        );
    }
}

export default BodyHome;