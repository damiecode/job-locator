import React from 'react';
import {
  Switch, Route,
} from 'react-router-dom';
import '../assets/css/App.css';
import AllCategories from '../containers/home/home';
import Header from './header';
import Footer from './footer';

const App = () => (
  <div className="App">
    <Header />
    <Switch>
    </Switch>
    <Footer />
  </div>
);

export default App;
