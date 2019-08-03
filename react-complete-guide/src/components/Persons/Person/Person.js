import React, { Component, Fragment } from 'react';
import "./Person.module.css";  
import Aux from "../../../hoc/Auxiliary";
import classes from './Person.module.css';
import withClass from "../../../hoc/withClass";
import PropTypes from 'prop-types';
import AuthContext from '../../../context/Auth-context';


class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        console.log("[Person.js] componentDidMount rendering...");
        //this.inputElement.focus();  old style
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        return (
            <Aux>
                {/* <AuthContext.Consumer>       old way
                    {context => 
                        context.authenticated ? <p>Logged in</p> : <p>Plaese log in</p>
                    }
                </AuthContext.Consumer> */}

                {/* betterway */}

                {this.context.authenticated ? <p>Logged in</p> : <p>Plaese log in</p>} 
                <p onClick={this.props.click}>
                    I'm a {this.props.name} and I am {this.props.age}
                </p>
                <p>{this.props.children}</p>
                <input
                    // ref={(inputEl) => {this.inputElement = inputEl}} old style
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    placeholder={this.props.name}
                />
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person)