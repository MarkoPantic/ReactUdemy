import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm react app</h1>
        <Person name='Marko' age='25'/>
        <Person name='Pavle' age='22'>My Hobbies: Racing</Person>
        <Person name='Jelena' age='55'/>
      </div>
    );
  }
}

export default App;
