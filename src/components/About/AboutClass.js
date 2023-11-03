import React from "react";
import Profile from "../Profile/ProfileClass";

class About2 extends React.Component {

    constructor(props) {
        super(props);
        console.log("Parent-constructor");
    }

    async componentDidMount() {
        console.log("Parent-componentDidMount");
        const data = await fetch('https://api.github.com/users/Lopamudra00');
        const json = await data.json();

    }
    render() {
        console.log("Parent-render");
        return (
            <div>

                <h1>About Us Page</h1>
                <p> This is Finding the path</p>
                <Profile name={"Lopa"} xyz="abc" />
            </div>


        )
    }
}

export default About2

// Parent Constructor
// Parent Render
//      First Child Constructor
//      First Child render
//      Second Child Constructor
//      Second Child render

//      DOM Updated for children

//      first Child componentDidMount
//      second Child componentDidMount