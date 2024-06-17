import React from 'react';

const Button = ({onClick, text})=>{
    return(
        <>
            <h2>Question 2: Button Component</h2>
            <button onClick={onClick}>{text}</button>
        </>
    )
};

export default Button;