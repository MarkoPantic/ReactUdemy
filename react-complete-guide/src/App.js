import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            { name: "Max", age: 28 },
            { name: "Manu", age: 29 },
            { name: "Stehpanie", age: 26 }
        ]
    };

    switchNameHandler = newName => {
        this.setState({
            persons: [
                { name: "Max", age: 28 },
                { name: newName, age: 29 },
                { name: "Stehpanie sex bomb", age: 26 }
            ]
        });
    };

    nameChangedHandler = event => {
        this.setState({
            persons: [
                { name: "Max", age: 28 },
                { name: event.target.value, age: 29 },
                { name: "Stehpanie sex bomb", age: 26 }
            ]
        });
    };

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }

        return (
            <div className="App">
                <h1>Hi, I'm react app</h1>
                <button 
                    onClick={this.switchNameHandler.bind(this, "Marko")}
                    style={style}>
                    Swtich me
                </button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    changed={this.nameChangedHandler}
                >
                    My Hobbies: Racing
                </Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                />
            </div>
        );
    }
}

export default App;
