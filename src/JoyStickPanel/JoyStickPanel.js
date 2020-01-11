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
            mouseDown: false,
            mouseX: 0,
            mouseY: 0
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
            mouseDown: false,
            mouseX: 0,
            mouseY: 0
        } );
    }

    mouseMove = (event) => {
        if (this.state.mouseDown) {
            this.setState( {
                mouseX: event.clientX,
                mouseY: event.clientY
            } );
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
                            mouseX={this.state.mouseX}
                            mouseY={this.state.mouseY}
                        />
                    </div>
                </Hammer>
            </div>
        );
    }
}

export default JoyStickPanel;