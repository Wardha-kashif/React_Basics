import React from "react";


class CounterApp extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            counter:0
        }
    }
    render() {
       var increment=()=>{
            this.setState({
                counter:this.state.counter + 1
            });
        }
       var  decrement=()=>{
            this.setState({
                counter:this.state.counter - 1
            });
        }
        return (
            <div>
                <h1>Counter Application Using Class Component</h1>
                Count : {this.state.counter}<br/>
                <button onClick={()=>increment()}>Increment </button>

                <button onClick={()=>decrement()}>Decrement </button>
            </div>
        )
    }
}

export default CounterApp