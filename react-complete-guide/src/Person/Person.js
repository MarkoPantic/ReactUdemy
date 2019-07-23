import React from 'react';
import './Person.css';

// class Person {

// }

// export default Person


const person = (props) => {

    return (
        <div className='Person'>
            <p onClick={props.click}>
                I'm a {props.name} and I am {props.age}
            </p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} placeholder={props.name}/>
        </div>
    );
}

export default person;