import React from 'react';

const List = ({items}) =>{
    return(
        <>
        <h2>Question-4: List Component</h2>
        <ul>
            {items.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
        </>
    )
};

export default List;