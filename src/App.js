import React, { Component } from 'react';
import Login from './components/Login/index';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} sm={4} md={4}>
            <Login />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
