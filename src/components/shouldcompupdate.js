import react from "react";


class Cmpupdate extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Sana"
        }
    }
    shouldComponentUpdate() {
        return false
        // return true if you want to update the state on Change
    }
    componentDidMount() {

        setTimeout(() => {
            this.setState({
                name: "This is the Component Did Mount"
            })
        }, 5000)
    }
    render() {
        return (
            <div>
                <h1>Component Should Update or Not</h1>
                <h2>{this.state.name}</h2>
            </div>
        )
    }
}

export default Cmpupdate