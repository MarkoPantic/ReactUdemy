import React from 'react';
import logo from './logo.svg';
import classes from './App.module.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <Layout>
        <BurgerBuilder/>
    </Layout>
  );
}

export default App;
