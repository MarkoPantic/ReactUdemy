import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.module.css";
import classes from "./App.module.css";
import Persons from '../components/Persons/Persons';
import Cockpit from "../components/Cockpit/Cockpit";

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
        
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}
                />
            );
        }


        return (
            <div className={classes.App}>
                <Cockpit 
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}
                />
                {persons}
            </div>
        );
    }
}

export default App;
