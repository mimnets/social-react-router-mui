import React, { useState } from 'react';
import { useEffect } from 'react';
import Photo from '../Photo/Photo';

const Comments = (props) => {
    const {name, email, body} = props.comments;

    const [photo, setPhoto] = useState([]);

    useEffect(()=> {
    fetch('https://randomuser.me/api/?results=1')
    .then(res => res.json())
    .then(data => setPhoto(data.results))
    .catch(error => console.log(error))
    },[])

    return (
        <div>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{body}</p>
            {
                photo.map(ph => <Photo pht = {ph}></Photo>)
            }
        </div>
    );
};

export default Comments;