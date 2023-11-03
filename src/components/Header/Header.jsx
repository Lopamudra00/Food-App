import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom'
const Title = () => {
    return (
        // anchor tag to go to the home page on clicking the logo
        <a href='/'>
            <img className='logo' src={require('../../img/food-logo.png')} />
        </a>
    )
};
//inline style. work as a object 
const styleObj = {
    border: '1px solid red',
}
const Header = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    return (
        <div className='header'
            style={styleObj}
        >
            <Title />
            <div className='navItems'>
                <ul>
                    <Link to='/'><li>Home</li> </Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/contact"><li>Contact Us</li></Link>
                    <li>Cart</li>
                    <Link to="/instamart"><li>Instamart</li></Link>
                </ul>
            </div>

            {
                (isLoggedIn) ? <button onClick={() => {
                    setLoggedIn(false);
                }}>Log out</button> : <button onClick={() => {
                    setLoggedIn(true)
                }}>Log in</button>
            }


        </div>
    )
}

export default Header