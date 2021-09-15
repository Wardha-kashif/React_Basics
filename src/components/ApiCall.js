import react from "react";

class API extends react.Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(
            (response) => response.json()).then((data) => this.setState({
                data: data
            }))
    }
    render() {
        return (<div>
            <h1>Calling an API and showing the name of Users</h1>
           {this.state.data.map(d => <h6 key={d.id}>{d.name}</h6>)}
        </div>)
    }
}

export default API