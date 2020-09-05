import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Posts = () => {
    
    const [posts, setPosts] = useState([])
    
    const url = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
        .catch(err => err)
    },[])
    return (
        <div>
            <h1>This is posts section :{posts.length}</h1>
        </div>
    );
};

export default Posts;