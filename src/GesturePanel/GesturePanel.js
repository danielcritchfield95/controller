import React, { Component } from 'react';
import Hammer from 'react-hammerjs';

import './GesturePanel.css';

class GesturePanel extends Component {

    handleTap = (event) => {
        console.log("Tapped");
        document.body.style.backgroundColor='aqua';
    }

    handleDoubleTap = (event) => {
        console.log("Double Tapped");
        document.body.style.backgroundColor='orange';
    }

    handlePinchIn = (event) => {
        document.body.style.backgroundColor='yellow';
    }

    handleSwipeLeft = (event) => {
        document.body.style.backgroundColor = 'red';
    }

    handleSwipeRight = (event) => {
        document.body.style.backgroundColor = 'blue';
    }

    handleSwipeUp = (event) => {
        document.body.style.backgroundColor = 'green';
    }

    handleSwipeDown = (event) => {
        document.body.style.backgroundColor = 'black';
    }

    componentDidMount() {
        const panel = document.querySelector('.GesturePanel');

        panel.style.backgroundColor = this.props.color;
        panel.style.width = this.props.width;
    }

    render() {
        return (
            <Hammer
                onTap={this.handleTap}
                onDoubleTap={this.handleDoubleTap}
                onPinchStart={this.handlePinchIn}
                onSwipeRight={this.handleSwipeRight}
                onSwipeLeft={this.handleSwipeLeft} 
                onSwipeUp={this.handleSwipeUp}
                onSwipeDown={this.handleSwipeDown}
                options={{
                    recognizers: {
                       pinch: { enable: true }
                    }
                 }}
                 >
                <canvas className="GesturePanel"></canvas>
            </Hammer>
        );
    }
}

export default GesturePanel;