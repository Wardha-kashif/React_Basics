// Practicing react lifecycle Methods
// 3 steps
// 1.Mounting 
// 2.updating
// 3.unmounting

import React from "react";

// Starting with the Mounting

// it contains 4 steps
// 1.constructor
// 2.getderivedStatefromProps
// 3.render
// 4.ComponentdidMount


class Lifecycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Wardha'
        }
    }
    render() {

        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>)
    }
}

//render -----> This is the only compulsory method required by the React. This method is responsible to render our JSX to DOM


