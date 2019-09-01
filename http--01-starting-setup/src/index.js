import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';


axios.interceptors.request.use(req => {
    //Edit request config auth, set headers, etc.
    return req
}, error => {
    console.log(error);
    return Promise.reject(error)
})

axios.interceptors.response.use(res => {
    //Edit response config auth, set headers, etc.
    return res
}, error => {
    console.log(error);
    return Promise.reject(error)
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
