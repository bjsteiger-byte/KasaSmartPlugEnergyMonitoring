import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './Components/Home.js';
import Layout from './Components/Layout.js';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route path='/' component={Home}>
          </Route>
        </Layout>
      </Router>
    );
  }
}

