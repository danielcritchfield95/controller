import React, { Component } from 'react';
import Hammer from 'react-hammerjs';
import JoyStick from '../JoyStick/JoyStick';

import './JoyStickPanel.css';

class JoyStickPanel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            centerX: 0,
            centerY: 0,
            mouseDown: false
        };
    }

    press = (event) => {
        this.setState( {
            centerX: event.center.x,
            centerY: event.center.y,
            mouseDown: true
        } );
    }

    pressUp = () => {
        this.setState( {
            centerX: 0,
            centerY: 0,
            mouseDown: false
        } );
    }

    mouseMove = (event) => {
        if (this.state.mouseDown) {
            console.log("X: " + event.clientX);
            console.log("Y: " + event.clientY);

            // TODO
        }
    }

    render() {
        return (
            <div className="JoyStickPanel">
                <Hammer onPress={this.press} onPressUp={this.pressUp} onMouseMove={this.mouseMove}>
                    <div className="container">
                        <JoyStick 
                            centerX={this.state.centerX}
                            centerY={this.state.centerY}

                        />
                    </div>
                </Hammer>
            </div>
        );
    }
}

export default JoyStickPanel;