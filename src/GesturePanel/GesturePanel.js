import React, { Component } from 'react';
import Hammer from 'hammerjs';

import './GesturePanel.css';

class GesturePanel extends Component {

    handleTap = (event) => {
        console.log("Tapped");
        document.body.style.backgroundColor = 'aqua';
    }

    handleDoubleTap = (event) => {
        console.log("Double Tapped");
        document.body.style.backgroundColor = 'orange';
    }

    handlePinchIn = (event) => {
        document.body.style.backgroundColor = 'yellow';
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

        let hammer = new Hammer(panel);

        // enable all directions
        hammer.get('swipe').set({
            direction: Hammer.DIRECTION_ALL,
        });
        
        // enable pinch
        hammer.get('pinch').set({
            enable: true
        });

        hammer.on("tap", event => {
            this.handleTap(event);
        });

        hammer.on("doubletap", event => {
            this.handleDoubleTap(event);
        });

        hammer.on("swipeleft", event => {
            this.handleSwipeLeft(event);
        });

        hammer.on("swiperight", event => {
            this.handleSwipeRight(event);
        });

        hammer.on("swipeup", event => {
            this.handleSwipeUp(event);
        });

        hammer.on("swipedown", event => {
            this.handleSwipeDown(event);
        });

        hammer.on("pinchstart", event => {
            this.handlePinchIn(event);
        });
    }

    render() {
        return (
            <canvas className="GesturePanel"></canvas>
        );
    }
}

export default GesturePanel;