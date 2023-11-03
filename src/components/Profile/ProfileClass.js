import React from "react";

class Profile extends React.Component {
    //constructor is a place that is use for initialisation.nd this is the best place to create a state.
    constructor(props) {
        super(props);
        //create state
        this.state = {
            userInfo: "Dummy Name", //initial value 
            location: "Dummy Location",
        };
    }

    async componentDidMount() {
        console.log("Child-ComponentDidMount");
        //API Calls
        const data = await fetch('https://api.github.com/users/Lopamudra00');
        const json = await data.json();
        console.log(json)
        this.setState({
            userInfo: json,
        })
        console.log("Child -componentDidMount" + this.props.name);
    }
    componentDidUpdate() {
        console.log("Component did updated");
    }
    componentWillUnmount() {
        console.log("Component will unamount");
    }

    render() {
        console.log("Child-render")
        return (
            <div>
                <h1> profile class component</h1>
                <img src={this.state.userInfo.avatar_url} />
                <h2> Name: {this.state.userInfo.name} </h2>
                <h2>location: {this.state.userInfo.location} </h2>

                <button onClick={() => {
                    //We do not mutate the state directly. Never do this.state= something
                    this.setState({
                        count: 1,
                        count2: 2
                    })
                }}> SetCount</button>

            </div>
        )
    }
}

export default Profile;

//sequence of rendering


//Parent constructor
//Parent render
//Child Constructor
//Child render

//DOM is Updated


//Parent componentDidMount
//API CALL
//Child componentDidMount
//Child render