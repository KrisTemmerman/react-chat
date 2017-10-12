import React, { Component } from 'react';
/* Import react-router-dom elements */
import { NavLink, Route } from 'react-router-dom';

import LoginPage from './pages/login-page';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import Navigation from './components/Navigation'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Navigation />
          <LoginPage />
        </div>
      </div>
    );
  }
}

export default App;
