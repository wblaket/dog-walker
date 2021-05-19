import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DogCard from './pages/DogCard';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {

    return (
      <Router>
        <Header />
        <div>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/:dogname" component={DogCard}/>
        </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
