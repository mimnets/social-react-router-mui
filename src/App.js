import React, { useState, useEffect, createContext } from 'react';
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
import PostDetail from './components/PostDetail/PostDetail';

export const PostsContext = createContext()

function App() {
    
    const [posts, setPosts] = useState([])
    
    const url = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
        .catch(err => err)
    },[])
  return (
    <Container maxWidth="sm">
  <PostsContext.Provider value={[posts, setPosts]}>
    <Router>
      <div>
        <nav>
          <ul>
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
        <Route path="/post/:postId">
            <PostDetail />
          </Route>
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
    </PostsContext.Provider>
    </Container>
  );
}

export default App;
