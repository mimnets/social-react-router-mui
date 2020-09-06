import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Comments from '../Comments/Comments';
import { makeStyles, Card, CardHeader, CardContent, Typography } from '@material-ui/core';

const PostDetail = () => {
    
    const {postId} = useParams();


    const [post, setPost] = useState({})

    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])

    const [comments, setComments] = useState([])

    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    },[])
     
    const useStyles = makeStyles((theme) => ({
        root: {
          maxWidth: 600,
        },
        media: {
          height: 0,
          paddingTop: '56.25%', // 16:9
        },
        expand: {
          transform: 'rotate(0deg)',
          marginLeft: 'auto',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
          }),
        },
        expandOpen: {
          transform: 'rotate(180deg)',
        },
        avatar: {
          backgroundColor: 'red',
        },
      }));

      const classes = useStyles();

    return (

        <Card className={classes.root}>
      <CardHeader
        title={post.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {post.body}
        </Typography>
        <Typography>
            {
                comments.map(com => <Comments comments = {com}></Comments>)
            }
        </Typography>
            
      </CardContent>
    </Card> 
    );
};

export default PostDetail;