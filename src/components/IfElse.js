import React, { Component } from 'react';

class IfElse extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        // It means if isLoggedIn is true then only show this div otherwise nothign will show on the screen 
        return this.state.isLoggedIn && <div>Welcome Dhruvin</div>

        // If Else condition 
        return this.state.isLoggedIn ? (<div>Welcome Dhruvin</div>) : (<div>Please welcome</div>)
    }
}

export default IfElse;