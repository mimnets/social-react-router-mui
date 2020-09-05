import React from 'react';
import Posts from '../Posts/Posts';
import { useContext } from 'react';
import { PostsContext } from '../../App';

const Home = () => {
    const [posts] = useContext(PostsContext); 
    return (
        <div>
            <h1>This is home</h1>
            {
                posts.map(pt => <Posts post={pt}></Posts>)
            }
            <Posts></Posts>
        </div>
    );
};

export default Home;