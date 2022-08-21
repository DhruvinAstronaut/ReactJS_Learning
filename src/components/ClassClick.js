import React, { Component } from 'react';

class ClassClick extends Component {
    // No need the wright function before the name of the function
    clickHandler(){
        console.log("Click the classButton")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>classButton</button>
            </div>
        );
    }
}

export default ClassClick;