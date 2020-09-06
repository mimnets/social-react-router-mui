import React, { useState } from 'react';
import { useEffect } from 'react';
import Photo from '../Photo/Photo';
import { makeStyles, Card, CardHeader, Avatar, IconButton, CardContent, Typography } from '@material-ui/core';

const Comments = (props) => {
    const {name, email, body} = props.comments;

    const [photo, setPhoto] = useState([]);

    useEffect(()=> {
    fetch('https://randomuser.me/api/?results=1')
    .then(res => res.json())
    .then(data => setPhoto(data.results))
    .catch(error => console.log(error))
    },[])


    const useStyles = makeStyles((theme) => ({
        root: {
          maxWidth: 500,
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
          backgroundColor: 'red[500]',
        },
      }));

      const classes = useStyles();

    return (

        <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {
                photo.map(ph => <Photo pht = {ph}></Photo>)
            }
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title={name}
        subheader={email}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {body}
        </Typography>
      </CardContent>
    </Card>
    );
};

export default Comments;