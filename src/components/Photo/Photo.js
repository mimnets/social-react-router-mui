import React, { useState, useEffect } from 'react';

const Photo = (props) => {
    const {picture} = props.pht;
    return (
        <div>
            <h2>{<img src={picture.medium} alt=""/>}</h2>
        </div>
    );
};

export default Photo;