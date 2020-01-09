import React, { Component } from 'react';

import './JoyStick.css';

class JoyStick extends Component {

    drawBase() {
        const x = this.props.centerX;
        const y = this.props.centerY;
        
        let style = {};
        if (x !== 0 && y !== 0) {
            style = {
                position: 'absolute',
                width: '100px',
                height: '100px',
                left: x-50,
                top: y-50,
                borderRadius: '50px',
                backgroundColor: 'yellow'
            }
        }
        return (
            <div style={style}></div>
        );

    }

    drawMovement() {
        // TODO
    }

    render() {
        return this.drawBase();
    }
}

export default JoyStick;