import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/Auth-context';


const Cockpit = (props) => {


    const toggleButtonRef = useRef(null);

    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // /*const timer = */setTimeout(() => {
        //     alert('Some async request');
        // }, 1000);
        //toggleButtonRef.current.click();
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
            <button ref={toggleButtonRef} className={btnClass} onClick={props.clicked}>
                Toggle persons
            </button>
            <button onClick={authContext.login}>Log in</button>
            
        </div>
    );
}

export default React.memo(Cockpit)