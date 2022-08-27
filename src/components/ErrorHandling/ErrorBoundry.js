import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ErrorStatus: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            ErrorStatus: true
        }
    }

    componentDidCatch(error, info){
        console.log(error);
        console.log(info);
    }

    render() {
        if (this.state.ErrorStatus) {
            return <h1>Somethings went wrong. Please try again latter</h1>;
        } 
            return this.props.children;
    }
}

export default ErrorBoundry;