import react from "react";


class CmpMount extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Sana"
        }
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
                <h1>Component Did Mount is used to call External Data from the API</h1>
                <h2>{this.state.name}</h2>
            </div>
        )
    }
}

export default CmpMount