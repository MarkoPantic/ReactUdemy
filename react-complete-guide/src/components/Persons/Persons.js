import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {


    // static getDerivedStateFromProps(props, state) {
    //     console.log("[Persons.js] getDerivedStateFromProps", props);
    //     return state;
    // } 


    shouldComponentUpdate (nextProps, nextState) {
        console.log("[Persons.js] shouldComponentUpdate", nextProps, nextState);
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("[Persons.js] getSnapshotBeforeUpdate", prevProps, prevState);
        return null
    }

    componentDidUpdate() {
        console.log("[Persons.js] componentDidUpdate");
    }

    componentDidMount(){
        console.log("[Persons.js] componentDidMount rendering...");
    }

    render() {
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    click={() => {
                        this.props.clicked(index);
                    }}
                    changed={event => {
                        this.props.changed(event, person.id);
                    }}
                />
            );
        });
    }
}


export default Persons;
