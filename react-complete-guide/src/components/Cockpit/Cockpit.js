import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';


const Cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // /*const timer = */setTimeout(() => {
        //     alert('Some async request');
        // }, 1000);
        return () => {
            //clearTimeout(timer)
            console.log("[Cockpit.js] useEffect cleanupWork");
        }
    }, []);

    useEffect(() => {
        console.log("[Cockpit.js] 2nd useEffect");
        return () => {
            console.log("[Cockpit.js] 2nd useEffect cleanupWork");
        };
    })

    const assignedClasses = [];
    let btnClass = "";

    if (props.showPerson) {
        btnClass = classes.Red;
    }

    if (props.personsLenght <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.personsLenght <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(" ")}>
                This is really working!
            </p>
            <button className={btnClass} onClick={props.clicked}>
                Toggle persons
            </button>
        </div>
    );
}

export default React.memo(Cockpit)