import React from "react";

class Parent extends React.Component {
    render() {
        return (<div>
            <h1>Using get Derived State</h1>
            <ChildComponent namefromparent="The name is Changed to amna" />
        </div>)
    }
}
class ChildComponent extends Parent {
    constructor(props) {
        super(props);
        this.state = {
            name: "wardha"
        }
    }

    static getDerivedStateFromProps(props, state) {
        return { name: props.namefromparent }
    }

    render() {
        return (
            <div>
                {this.state.name}
            </div>
        )
    }
}



export default Parent