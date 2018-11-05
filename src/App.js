import React, { Component } from 'react';
import './App.css';
import InputAjout from './Containers/InputAjout';
import ListeCourses from './Containers/ListeCourses';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <InputAjout />
        <ListeCourses />
      </Container>
    );
  }
}

export default App;

