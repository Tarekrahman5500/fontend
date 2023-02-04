import React from 'react';
import  './style.css'
const CardIndex = (props) => {
    return (
        <div
            className="card"
            {...props}
        >
            {props.children}
        </div>
    );
};

export default CardIndex;