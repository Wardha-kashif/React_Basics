import react, { useState } from "react";

function CounterFunction() {

    const [Count, setCount] = useState(0);

    var increment = () => {
        setCount:setCount(Count + 1)
    }

    var decrement = () => {
        setCount:setCount(Count - 1)
    }
    return (
        <div>
            <h1>Counter app by functional component</h1>
            <h2>Count : {Count}</h2>
            <button onClick={() => increment()}>Increment</button>
            <button onClick={() => decrement()}>Decrement</button>
        </div>
    )
}

export default CounterFunction