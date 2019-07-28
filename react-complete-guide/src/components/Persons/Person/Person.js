import React, { Component } from 'react';
import "./Person.module.css";
import classes from './Person.module.css';

class Person extends Component {

    
    componentDidMount() {
        console.log("[Person.js] componentDidMount rendering...");
    }

    render() {
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>
                    I'm a {this.props.name} and I am {this.props.age}
                </p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    placeholder={this.props.name}
                />
            </div>
        );
    }
}

export default Person