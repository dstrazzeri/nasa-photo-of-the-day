import React from "react";

const Header = props => {
    const {text} = props
    return (
        <div className='header'>
            <header className='header'>    
                    <h1>{text}</h1>
            </header>
        </div>
    )
}


export default Header;