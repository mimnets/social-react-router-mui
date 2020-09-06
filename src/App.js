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
import { makeStyles, AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';

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

    const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
    }));
    const classes = useStyles();
  return (
    <Container maxWidth="sm" style={{ backgroundColor: '#6699CC', border: '1px solid gray', borderRadius:'20px'}}>

  <PostsContext.Provider value={[posts, setPosts]}> 
    <Router>

    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <Button color="inherit"><Link to="/" style={{color:"inherit", textDecoration: 'none'}}>Home</Link></Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
      <div>
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
