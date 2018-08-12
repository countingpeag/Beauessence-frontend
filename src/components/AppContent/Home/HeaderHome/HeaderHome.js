import React, {Component} from 'react';
import {Grid, Row, Col, Button, MenuItem, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import axios from 'axios';
import Dropdown from './Dropdown';
import '../../../../styles/HomeStyles.css';
import FielGroup from '../../../Login/FieldGroup';

class HeaderHome extends Component {

    constructor(){
        super();
        this.state = {
            staff: [],
            services: [],
            staffItem: {},
            servicesItem: {},
            staffDropdown: 'Personal',
            servicesDropdown: 'service',
            commentsState: '',
            priceState: ''
        };

        this.handleChoose = this.handleChoose.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    
    componentDidMount(){
        axios.get('http://localhost:8080/BeautyEssence/rest/staff')
        .then(({data}) => {
            this.setState({staff:data});
        })
        .catch(error => {
            console.log(error);
        });

        axios.get('http://localhost:8080/BeautyEssence/rest/service')
        .then(({data}) => {
            this.setState({services:data});
        })
        .catch(error => {
            console.log(error);
        });
    }    

    handleChange(event){
        if(event.target.id==='textArea')
            this.setState({commentsState:event.target.value});
        else
            this.setState({priceState:event.target.value});
            
    }

    handleChoose(item, component){
        if(component.target.id==='staff')
        {
            this.setState({staffItem: item});
            this.setState({staffDropdown:item.firstName});
        }
        else
        {
            this.setState({staffItem: item});
            this.setState({servicesDropdown:item.serviceName});
        }
    }

    render(){
        const {staff, services} = this.state;
        return(
            <Grid>
                <Row className="headerHome">
                    <Col xs={6} md={2} id="staff">
                        <Dropdown  
                            title={this.state.staffDropdown}
                            items={staff.map( item => (
                                <MenuItem 
                                    id="staff"
                                    onClick={component => this.handleChoose(item, component)} 
                                    key={item.idStaff} 
                                    eventKey={item.idStaff}>{`${item.firstName} ${item.lastName}`}
                                </MenuItem>
                            ))}
                        />
                    </Col>
                    <Col xs={6} md={2} id="services">
                        <Dropdown  
                            title={this.state.servicesDropdown} 
                            items={services.map( item => (
                                <MenuItem 
                                    id="services"
                                    onClick={component => this.handleChoose(item, component)} 
                                    key={item.idService} 
                                    eventKey={item.idService}>{`${item.serviceName} (${item.details})`}
                                </MenuItem>
                            ))}
                        />
                    </Col>
                    <Col xs={6} md={4} > 
                        <FormGroup controlId="textArea" className="textArea">
                            <ControlLabel></ControlLabel>
                            <FormControl componentClass="textarea" placeholder="comentarios" onChange={this.handleChange} value={this.state.commentsState} />
                        </FormGroup>
                    </Col>
                    <Col xs={6} md={2} >
                        <FielGroup
                            id="price"
                            state={null}
                            help={null}
                            type="text"
                            placeholder="precio"
                            onChange={null}
                            label=""
                            onChange={this.handleChange} value={this.state.priceState}
                        />
                    </Col>
                    <Col xs={6} md={2} id="submit">
                        <Button id="button" onClick={() => console.log(this.state.staffItem)}>Agregar</Button>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default HeaderHome;
