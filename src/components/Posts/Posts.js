import React, { useContext } from 'react';
import { PostsContext } from '../../App';
import Post from '../Post/Post';

const Posts = () => {
const [posts, setPosts] = useContext(PostsContext); 
    return (
        <div>
            <h1>This is posts section :{posts.length}</h1>
            {
                posts.map(pt => <Post post={pt}></Post>)
            }
        </div>
    );
};

export default Posts;