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
            active: false,
            mouseX: 0,
            mouseY: 0
        };
    }

    handleMouseDown = (event) => {
        this.setState( {
            centerX: event.clientX,
            centerY: event.clientY,
            active: true
        } );
    }

    handleMouseUp = (event) => {
        this.setState( {
            centerX: 0,
            centerY: 0,
            active: false,
            mouseX: 0,
            mouseY: 0
        } );
    }

    handleMouseMove = (event) => {
        if (this.state.active) {
            this.setState( {
                mouseX: event.clientX,
                mouseY: event.clientY
            } );
        }
    }

    handleTouchStart = (event) => {
        const touch = event.targetTouches[0];
        this.setState( {
            centerX: touch.clientX,
            centerY: touch.clientY,
            active: true
        } );
    }

    handleTouchEnd = () => {
        this.setState( {
            centerX: 0,
            centerY: 0,
            active: false,
            mouseX: 0,
            mouseY: 0
        } );
    }

    handleTouchMove = (event) => {
        const touch = event.targetTouches[0];
        if (this.state.active) {
            this.setState( {
                mouseX: touch.clientX,
                mouseY: touch.clientY
            } );
        }
    }

    componentDidMount() {
        const panel = document.querySelector('.JoyStickPanel');

        panel.style.backgroundColor = this.props.color;
        panel.style.width = this.props.width;
    }

    render() {
        return (
            <div className="JoyStickPanel">
                <Hammer onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseMove={this.handleMouseMove} onTouchStart={this.handleTouchStart} onTouchEnd={this.handleTouchEnd} onTouchMove={this.handleTouchMove}>
                    <div className="container">
                        <JoyStick 
                            centerX={this.state.centerX}
                            centerY={this.state.centerY}
                            mouseX={this.state.mouseX}
                            mouseY={this.state.mouseY}
                            baseColor={this.props.joystickBaseColor}
                            movementColor={this.props.joystickMovementColor}
                            handleJoyStickData={this.props.handleJoyStickData} />
                    </div>
                </Hammer>
            </div>
        );
    }
}

export default JoyStickPanel;