import React, { Component } from 'react';
import WithCount from './WithCount';


class MouseHover extends Component {
    render() {
        const {count, clickHandler} = this.props
        return (
            <h2 onMouseOver={clickHandler}>
                Mouse Hover {count} Time
            </h2>
        );
    }
}

export default WithCount(MouseHover, 3);