import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import HeaderHome from './HeaderHome/HeaderHome';
import BodyHome from './BodyHome';
import axios from 'axios';

class Home extends Component{

    constructor()
    {
        super();
        this.state ={
            historical: [],
            clickButton: false
        }
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

        axios.get('http://localhost:8080/BeautyEssence/rest/historical')
        .then(({data}) => {
            this.setState({historical:data});
        })
        .catch(error => {
            console.log(error);
        });
    }

    componentDidMount(){
        axios.get('http://localhost:8080/BeautyEssence/rest/historical')
        .then(({data}) => {
            this.setState({historical:data});
        })
        .catch(error => {
            console.log(error);
        });
    }

    render(){
        console.log("heello");
        const {historical} =this.state; 
        return(
            <Grid>
                <Row>
                    <Col>
                        <HeaderHome sentData={historical => this.sentData(historical)}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <BodyHome historical={historical}/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Home;