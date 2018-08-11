import React, { Component } from 'react';
import Login from './components/Login/index';
import AppContent from './components/AppContent';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      response: null
    };

    this.submitHandler = this.submitHandler.bind(this);
  }

  //when user make a click perform this functionality(Calls to server)
  submitHandler(data){

    axios.post("http://localhost:8080/BeautyEssence/rest/administrator", data)
    .then( ({data}) => {
      sessionStorage.setItem('idAdmin', data.idAdmin);
      this.setState({response:data});
    })
    .catch(error => {
      console.log(error);
    });
  }

  //Choose what to render
  toRender(response){
    let renderElement;
    if(sessionStorage.getItem('idAdmin')!==null)
    {
      if(sessionStorage.getItem('idAdmin')!=='null')
        renderElement = <AppContent />;
      else
      {
        renderElement = <Login submitHandler={this.submitHandler}/>
        alert("el usuario o contraseña es incorrecto");
      }
    }
    else
      renderElement = <Login submitHandler={this.submitHandler}/>;

    return renderElement;
  }

  render() {
    const {response} = this.state;
    let element = this.toRender(response);
    return (
      <div>
        {
          element
        }
      </div>
    );
  }
}

export default App;
