import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import HeaderHome from './HeaderHome/HeaderHome';
import BodyHome from './BodyHome/BodyHome';
import axios from 'axios';
import '../../../styles/HomeStyles.css';

class Home extends Component{

    constructor()
    {
        super();
        this.state ={
            historical: [],
            staff: [],
            services: [],
        }

        this.updateHistorical = this.updateHistorical.bind(this);
        this.updateSelects = this.updateSelects.bind(this);
    }

    componentDidMount(){
        this.updateHistorical();
        this.updateSelects();
    }

    updateSelects(){
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

    updateHistorical = () => {
        axios.get('http://localhost:8080/BeautyEssence/rest/historical')
        .then(({data}) => {
            this.setState({historical:data});
        })
        .catch(error => {
            console.log(error);
        });
    }

    render(){
        const {historical, staff, services} = this.state;
        return(
            <Grid>
                <Row>
                    <Col>
                        <HeaderHome staff={staff} services={services}/>
                    </Col>
                </Row>
                <Row>
                    <Col className="bodyHome">
                        <BodyHome historical={historical}/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Home;