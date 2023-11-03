import './About.css'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Profile from '../Profile/ProfileClass'
const About = () => {
    return (

        <div>
            <h1>About Us Page</h1>
            <p> This is Finding the path</p>
            <Outlet />
            <Profile name={"Lopa"} />

        </div>
    )
}



export default About


