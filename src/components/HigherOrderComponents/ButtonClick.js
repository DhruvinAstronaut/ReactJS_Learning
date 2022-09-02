import React, { Component } from 'react';
import WithCount from './WithCount';


class ButtonClick extends Component {
    render() {
        const { count, clickHandler } = this.props
        return (
            <button onClick={clickHandler}>
                {this.props.name} Clikc {count} Time
            </button>
        );
    }
}

export default WithCount(ButtonClick, 5);