import React, { Component } from 'react';
import Login from './components/Login/index';
import NavBar from './components/Home/NavBar';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      dataToSend: {
        userName: '',
        password: ''
      },
      response: null
    };

    this.submitHandler = this.submitHandler.bind(this);
  }

  //when user make a click perform this functionality(Calls to server)
  submitHandler(data){
    const {userName, password} = data;

    axios.post("http://localhost:8080/BeautyEssence/rest/administrator", data)
    .then(({data}) => {
      console.log(data);
      this.setState({response:data});
    })
    .catch(error => {
      console.log(error);
    });
    
    this.setState({dataToSend: { 
        userName, 
        password
      }
    });
  }

  render() {
    const {response} = this.state;
    var renderElement;

    //choose what to render
    if(response!==null)
    {
      if(response.userName!==null)
        renderElement = <NavBar />;
      else
      {
        renderElement = <Login submitHandler={this.submitHandler}/>;
        alert("usuario o contraseña incorrectos");
      }
    }
    else
      renderElement = <Login submitHandler={this.submitHandler}/>;

    return (
      <div>
        {
          renderElement
        }
      </div>
    );
  }
}

export default App;
