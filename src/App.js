import React, { Component } from 'react';
import Login from './components/Login/index';
import './App.css';

class App extends Component {

  submitHandler(){
    //console.log("Clicked");
    console.log(localStorage.getItem("userName"));
    console.log(localStorage.getItem("password"));
    localStorage.removeItem("userName");
    localStorage.removeItem("password");
  }

  render() {
    return (
        <Login submitHandler={this.submitHandler}/>
    );
  }
}

export default App;
