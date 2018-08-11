import React, { Component } from 'react';
import Login from './components/Login/index';
import AppContent from './components/AppContent';
import {storage} from './components/Storage/Storage';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      response: null,
      isLogin: false
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.logoutHandler = this.logoutHandler.bind(this);
  }

  //when user make a click perform this functionality (Calls to server)
  submitHandler(data){

    axios.post("http://localhost:8080/BeautyEssence/rest/administrator", data)
    .then( ({data}) => {
      storage.setContent(data)
      this.setState({response:data});
    })
    .catch(error => {
      console.log(error);
    });
  }

  logoutHandler(){
    console.log("salio");
  }

  //Choose what to render
  toRender(response){
    let renderElement;

    if(storage.isNull())
    {
      if(response!==null)
        alert("usuario o contraseña incorrecto");

      renderElement = <Login submitHandler={this.submitHandler}/>
    }
    else
      renderElement = <AppContent logout={this.logoutHandler}/>;

    return renderElement;
  }

  render() {
    const {response} = this.state;
    return (
      <div>
        {
          this.toRender(response)
        }
      </div>
    );
  }
}

export default App;
