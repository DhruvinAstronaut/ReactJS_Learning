import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "ClickMessage"
        }
        this.eventHandler = this.eventHandler.bind(this)
    }
    eventHandler() {
        this.setState({
            message: "ChagenStatClickMessage"
        })
        console.log(this.state.message)
    }

    eventHandler = () => {
        this.setState({
            message: "messageChange"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                // Two types for calling a function 
                <button onClick={this.eventHandler.bind(this)}>EventBindClick</button>
                <button onClick={() => this.eventHandler()}>EventBindClick</button>
                <button onClick={this.eventHandler}>EventBindClick</button>

            </div>
        )
    }
}

export default EventBind
