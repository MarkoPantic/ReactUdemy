import React, { Component } from 'react';
import "./Person.module.css";  
import Aux from "../../../hoc/Auxiliary";
import classes from './Person.module.css';


class Person extends Component {

    
    componentDidMount() {
        console.log("[Person.js] componentDidMount rendering...");
    }

    render() {
        return (
            <Aux>
                <p onClick={this.props.click}>
                    I'm a {this.props.name} and I am {this.props.age}
                </p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    placeholder={this.props.name}
                />
            </Aux>
        );
    }
}

export default Person