import React, { useContext } from 'react';
import { PostsContext } from '../../App';
import Post from '../Post/Post';

const Posts = () => {
const [posts, setPosts] = useContext(PostsContext); 
// const tl = posts.title;
    return (
        <div>
            <h1>This is posts section :{posts.length}</h1>
            {
                // posts.map(pt => <Post post={pt}></Post>)
                posts.map(pt => <h1>{pt.title}</h1>)
            }
        </div>
    );
};

export default Posts;