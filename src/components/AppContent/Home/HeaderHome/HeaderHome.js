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
            servicesDropdown: 'Service',
            commentsState: '',
            priceState: ''
        };
        
        this.handleChoose = this.handleChoose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addHistorical = this.addHistorical.bind(this);
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
        if(component.target.id==='staff'){
            this.setState({staffItem: item});
            this.setState({staffDropdown:item.firstName});
        }
        else if(component.target.id==='services'){
            this.setState({servicesItem: item});
            this.setState({servicesDropdown:item.serviceName});
        }
        else
            console.log("Hola");
    }

    addHistorical(){
        const {staffItem, servicesItem, commentsState, priceState} = this.state;
        let date = new Date();
        let day = date.getDate()+1;
        let month = date.getMonth()+1;
        let year = date.getFullYear();
        let today = `${year}-${month}-${day}`;
        const {sentData} = this.props;

        let historicalObj = {
            staff: staffItem,
            service: servicesItem,
            comment: commentsState,
            price: priceState,
            historicalDate: today
        }
        sentData(historicalObj);
    }

    render(){
        const {staff, services} = this.state;
        return(
            <Grid>
                <Row className="headerHome">
                    <Col xs={6} md={2} id="staff">
                        <Dropdown  
                            title={this.state.staffDropdown}
                            nuevo={<MenuItem 
                                    id="new"
                                    onClick={component => this.handleChoose({}, component)}
                                    eventKey="new"><strong>nuevo</strong>
                                    </MenuItem>
                            }
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
                            nuevo={<MenuItem 
                                id="new"
                                onClick={component => this.handleChoose({}, component)} 
                                key="new" 
                                eventKey="new"><strong>nuevo</strong>
                                </MenuItem>
                            }  
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
                        <Button id="button" onClick={this.addHistorical}>Agregar</Button>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default HeaderHome;
