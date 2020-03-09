import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './Components/layout/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
