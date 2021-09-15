import react from 'react'

class Eventhandling extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 22
        }
    }
    render() {
        var updatedata = () => {
            this.setState({
                age: 25
            })
        }

        var deleteUserWithName = (name) => {
            // define any functionality
        }
        // users = ["wardha", "kashif", "Amna"]
        return (
            <div>
                <h1>Event Handling</h1>
                {this.state.age}
                <button onClick={() => updatedata()}>Change in the State Occur</button>

                <h1>Calling an Inline Function on Event Occur</h1>
                <button onClick={() => alert("Event handling in an Inline Function")}>Event handling in an Inline Function</button>

                {/* Pass a Button Value to an Inline Function */}

                <button value="This is event Handling Function" onClick={e => alert(e.target.value)}>Pass a Button Value to an Inline Function</button>

                {/* Pass a Value from an Array to an Inline Function */}

                {/* <ul>
                    {users.map(name => (
                        <li>
                            <button onClick={() => deleteUserWithName(name)}>
                                Click me!
                            </button>
                        </li>
                    ))}
                </ul> */}

            </div>
        )
    }
}


export default Eventhandling