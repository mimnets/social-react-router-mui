import React from 'react';
import { useHistory } from 'react-router-dom';

const Posts = (props) => {
    const {title,id} = props.post;
    const history = useHistory()
    console.log(history);
    const handleClick = (postId) =>{
        const url = `/post/${postId}`;
        history.push(url);
    }
    
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={() => handleClick(id)}>See Details</button>
        </div>
    );
};

export default Posts;