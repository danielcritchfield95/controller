import React, { Component } from 'react';
import { Joystick } from 'react-joystick-component'; //https://www.npmjs.com/package/react-joystick-component

import './CustomJoyStick.css';

class CustomJoyStick extends Component {

    handleMove = (event) => {
        console.log(event);
    }

    handleStop = (event) => {
        console.log(event);
    }

    render() {
        return (
            <div className="CustomJoyStick">
                <Joystick 
                    size={100} 
                    baseColor="red" 
                    stickColor="blue" 
                    move={this.handleMove} 
                    stop={this.handleStop}></Joystick>
            </div>
        );
    }
}

export default CustomJoyStick;
