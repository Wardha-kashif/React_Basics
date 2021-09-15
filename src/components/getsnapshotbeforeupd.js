import react from "react";


class Snp extends react.Component {
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

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("previous").innerHTML = "The prvious State is " + prevState.name
    }
    componentDidUpdate() {
        document.getElementById("current").innerHTML = "The Current State is " + this.state.name
    }
    render() {
        return (
            <div>
                <h1>GeSnapshot Before Update</h1>
                <h2>{this.state.name}</h2>
                <h2 id="current"></h2>
                <h2 id="previous"></h2>
            </div>
        )
    }
}

export default Snp