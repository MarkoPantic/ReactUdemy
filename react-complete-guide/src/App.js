import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.module.css";
import classes from "./App.module.css";
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
        

        let persons = null;
        let btnClass = '';

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

            btnClass = classes.Red

        }

        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }

        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }



        return (
            <div className={classes.App}>
                <h1>Hi, I'm react app</h1>
                <p className={assignedClasses.join(' ')}>This is really working!</p>
                <button className={btnClass} onClick={this.togglePersonsHandler}>
                    Toggle persons
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
