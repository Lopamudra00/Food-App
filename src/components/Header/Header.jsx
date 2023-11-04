import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom'
const Title = () => {
    return (
        // anchor tag to go to the home page on clicking the logo
        <a href='/'>
            <img className="w-32 h-20 p-1" src={require('../../img/food-logo.png')} alt='Dine Devine' />
        </a>
    )
};

const Header = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    return (
        <div className="h-20 w-full	 flex justify-between bg-amber-500 shadow-xl ">
            <Title />
            <div className='items-center mt-7'>
                <ul className='flex justify-between'>
                    <Link to='/'><li className='px-3 font-sans hover:font-serif font-semibold'>Home</li> </Link>
                    <Link to="/about"><li className='px-3 font-sans hover:font-serif font-semibold'>About</li></Link>
                    <Link to="/contact"><li className='px-3 font-sans hover:font-serif font-semibold'>Contact Us</li></Link>
                    <Link> <li className='px-3 font-sans hover:font-serif font-semibold'>  Cart</li></Link>

                    <Link to="/instamart"><li className='px-3 font-sans hover:font-serif font-semibold'>Instamart</li></Link>
                </ul>
            </div>

            {
                (isLoggedIn) ? <button className='mr-10 font-semibold font-sans h-12 w-24 rounded-3xl  mt-4 py-1 bg-amber-200 p-3'
                    onClick={() => {
                        setLoggedIn(false);
                    }}>Log out</button> : <button className='mr-10 font-semibold font-sans h-12 w-24 rounded-3xl mt-4 py-1 bg-amber-200 p-3'
                        onClick={() => {
                            setLoggedIn(true)
                        }}>Log in</button>
            }


        </div>
    )
}

export default Header