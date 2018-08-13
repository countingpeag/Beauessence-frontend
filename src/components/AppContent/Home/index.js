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
            clickButton: false
        }

        this.updateHistorical = this.updateHistorical.bind(this);
    }

    sentData(historical){
        console.log(JSON.stringify(historical));

        axios.post('http://localhost:8080/BeautyEssence/rest/historical/add', historical)
        .then(response => {
            alert("Agregado");
            this.setState({clickButton:true});
        })
        .catch(error => {
            console.log(error);
        });
        this.updateHistorical();
    }

    componentDidMount(){
        this.updateHistorical();
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
        const {historical} = this.state;
        return(
            <Grid>
                <Row>
                    <Col>
                        <HeaderHome sentData={historical => this.sentData(historical)}/>
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