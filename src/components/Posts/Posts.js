import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, makeStyles, Card, CardContent, Typography, CardActions } from '@material-ui/core';

const Posts = (props) => {
    const {title,id} = props.post;
    const history = useHistory()
    console.log(history);
    const handleClick = (postId) =>{
        const url = `/post/${postId}`;
        history.push(url);
    }
    
    const useStyles = makeStyles({
        root: {
          minWidth: 275,
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      });

    const classes = useStyles();

    return (

        <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
      <Button size ="small" variant="contained" onClick={() => handleClick(id)}>Post Details</Button>
      </CardActions>
    </Card>
            
    
    );
};

export default Posts;