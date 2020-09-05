import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Comments from '../Comments/Comments';

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
     
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            {
                comments.map(com => <Comments comments = {com}></Comments>)
            }
            
        </div>
    );
};

export default PostDetail;