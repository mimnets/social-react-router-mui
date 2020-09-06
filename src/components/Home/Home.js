import React from 'react';
import Posts from '../Posts/Posts';
import { useContext } from 'react';
import { PostsContext } from '../../App';

const Home = () => {
    const [posts] = useContext(PostsContext); 
    
    return (
        <div>
            {
                posts.map(pt => <Posts post={pt}></Posts>)
            }
        </div>
    );
};

export default Home;