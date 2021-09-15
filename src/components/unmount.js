import React from 'react'
import react from 'react'

class ComponentWillUnmount extends react.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
        }
    }
    render() {
        return (
            <div>

                <p>{this.state.show ? <Child /> : null}</p>
                <button onClick={() => { this.setState({ show: !this.state.show }) }}>Click me to toggle</button>
            </div>
        )
    }
}

export class Child extends react.Component {
    componentWillUnmount() {
        alert('This will unmount')
    }
    render() {
        return (
            <>
                I am a child component
            </>
        )
    }
}

export default ComponentWillUnmount