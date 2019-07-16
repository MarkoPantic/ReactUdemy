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
        ],
        showPersons: false
    };

    togglePersonsHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons
        });
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
            backgroundColor: "white",
            font: "inherit",
            border: "1px solid blue",
            padding: "8px",
            cursor: "pointer"
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
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

        return (
            <div className="App">
                <h1>Hi, I'm react app</h1>
                <button onClick={this.togglePersonsHandler} style={style}>
                    Toggle persons
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
