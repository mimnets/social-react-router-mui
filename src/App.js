import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Posts from './components/Posts/Posts';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

function App() {
  return (
    <Container maxWidth="sm" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
    
    <Router>
      <div>
        <nav>
          <ul style={{textStyle: 'none'}}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Posts">
            <Posts />
          </Route>
          <Route path="/users">
            <Header />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </Container>
  );
}

export default App;
