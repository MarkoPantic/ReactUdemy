import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            { id: 'asdasdasd', name: "Max", age: 28 },
            { id: 'asdqweasd', name: "Manu", age: 29 },
            { id: 'zxcasdqwd', name: "Stehpanie", age: 26 }
        ],
        showPersons: false
    };

    togglePersonsHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons
        });
    };

    deletePersonHandler = (index) => {
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({
            persons
        })
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex((el) => {
            return el.id === id
        })
        
        const person = {...this.state.persons[personIndex]};
        
        person.name = event.target.value;
        
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons
        });
    }

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
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                key={person.id}
                                name={person.name}
                                age={person.age}
                                click={() => {this.deletePersonHandler(index)}}
                                changed={(event) => {this.nameChangeHandler(event, person.id)}}
                            />
                        );
                    })}
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
