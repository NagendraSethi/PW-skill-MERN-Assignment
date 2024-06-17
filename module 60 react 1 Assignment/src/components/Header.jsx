import React from 'react';

const Header = ({title})=>{
    return (
        <>
            <h2>Question-3: Header Component</h2>
            <header>
                <h1>
                    {title}
                </h1>
            </header>
        </>
    )
}

export default Header;