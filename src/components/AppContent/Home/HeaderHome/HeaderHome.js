import React, {Component} from 'react';
import {MenuItem} from 'react-bootstrap';
import axios from 'axios';
import Dropdown from './Dropdown';

class HeaderHome extends Component {

    constructor(){
        super();
        this.state = {
            data: null
        };
    }
    componentWillMount(){
        axios.get('http://localhost:8080/BeautyEssence/rest/staff')
        .then(({data}) => {
            this.setState(data);
        })
        .catch(error => {
            console.log(error);
        });
        console.log("method")
    }    

    render(){
        console.log(this.state, "render");
        return(
            <div>
                <Dropdown  title="Personal" items={[<MenuItem key={1} eventKey="1">Action</MenuItem>, ]}/>
                <Dropdown  title="Servicio" items={[<MenuItem key={1} eventKey="1">Action</MenuItem>, ]}/>
            </div>
        );
    }
}

export default HeaderHome;