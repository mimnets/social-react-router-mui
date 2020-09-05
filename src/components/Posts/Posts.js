import React, { useContext } from 'react';
import { PostsContext } from '../../App';

const Posts = () => {
const [posts, setPosts] = useContext(PostsContext); 
// const tl = posts.title;
    return (
        <div>
            <h1>This is posts section :{posts.length}</h1>
            {
                posts.map(pt => <h1>{pt.title.toUpperCase()}</h1>)
            }
        </div>
    );
};

export default Posts;