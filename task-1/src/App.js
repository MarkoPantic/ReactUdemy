import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './User/UserInput'
import UserOutput from './User/UserOutput'


class App extends Component {
    state = {
        username: "Marko"
    };

    setUsername = event => {
        this.setState({
            username: event.target.value
        });
    };

    

    render(){
        console.log(this.state);
        return (
            <div>
                <UserInput changed={this.setUsername} username={this.state.username}/>
                <UserOutput>{this.state.username}</UserOutput>
            </div>
        );
    }

}

export default App;
