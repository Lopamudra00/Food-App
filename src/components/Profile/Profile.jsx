import React, { useEffect, useState } from "react";

const Profile = (props) => {

    const [count, setCount] = useState(0);
    //we have to destroy this component cuz it is keep going on
    useEffect(() => {
        // setInterval(() => {
        //     console.log("Namaste");

        // }, 1000);

        console.log("useEffect");
        return () => {
            console.log("useEffect return")

            //this return is called when we want to unmount or destroy the component
        }
    }, []);

    console.log("render")
    return (

        <div>
            <h2>Portfolio Profile</h2>

        </div>
    )
}
export default Profile