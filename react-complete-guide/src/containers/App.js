import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.module.css";
import classes from "./App.module.css";
import Persons from '../components/Persons/Persons';
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/Auth-context';


class App extends Component {
    constructor(props) {
        //if you want to set inital state from props do it in the constructor!
        super(props);
        console.log("[App.js] constructor");
        // this.state = {           //old way
        //     persons: [
        //         { id: "asdasdasd", name: "Max", age: 28 },
        //         { id: "asdqweasd", name: "Manu", age: 29 },
        //         { id: "zxcasdqwd", name: "Stehpanie", age: 26 }
        //     ],
        //     showPersons: false
        // };
    }

    componentDidMount() {
        console.log("[App.js] componentDidMount");
    }

    shouldComponentUpdate() {
        console.log("[App.js] shouldComponentUpdate");
        return true
    }

    componentDidUpdate() {
        console.log("[App.js] componentDidUpdate");
    }

    state = {
        persons: [
            { id: "asdasdasd", name: "Max", age: 28 },
            { id: "asdqweasd", name: "Manu", age: 29 },
            { id: "zxcasdqwd", name: "Stehpanie", age: 26 }
        ],
        showPersons: false,
        showCockpit: true,
        changeCounter: 0,
        authenticated: false
    };

    static getDerivedStateFromProps(props, state) {
        console.log("[App.js] getDerivedStateFromProps", props);
        return state;
    }

    togglePersonsHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons
        });
    };

    deletePersonHandler = index => {
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({
            persons
        });
    };

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(el => {
            return el.id === id;
        });

        const person = { ...this.state.persons[personIndex] };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState((prevState, props) => {
            return {
                persons,
                changeCounter: prevState.changeCounter + 1
            };
        });
    };


    loginHandler = () => {
        this.setState({
            authenticated: true
        })
    }

    // componentWillMount() {     //throwing an error depricated!
    //     console.log("[App.js] componentWillMount");
    // }

    componentDidMount() {
        console.log("[App.js] componentDidMount");
    }

    render() {
        console.log("[App.js] render");

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}
                    isAuth={this.state.authenticated}
                />
            );
        }

        return (
            <Aux>
                <button onClick={() => {
                    this.setState({showCockpit: false})
                }}>Remove cockpit</button>
                <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}> 
                    {this.state.showCockpit ? <Cockpit
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    personsLenght={this.state.persons.length}
                    clicked={this.togglePersonsHandler}
                    login={this.loginHandler}
                    /> : null}
                    {persons}
                </AuthContext.Provider>
            </Aux>
        );
    }
}

export default withClass(App, classes.App);
