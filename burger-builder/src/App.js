import React from 'react';
import classes from './App.module.css';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <Layout>
        <BurgerBuilder/>
    </Layout>
  );
}

export default App;
