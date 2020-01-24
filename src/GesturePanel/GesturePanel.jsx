import React, { Component } from 'react';
import Hammer from 'hammerjs';

import './GesturePanel.css';

class GesturePanel extends Component {

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
            this.props.onTap(event);
        });

        hammer.on("doubletap", event => {
            this.props.onDoubleTap(event);
        });

        hammer.on("swipeleft", event => {
            this.props.onSwipeLeft(event);
        });

        hammer.on("swiperight", event => {
            this.props.onSwipeRight(event);
        });

        hammer.on("swipeup", event => {
            this.props.onSwipeUp(event);
        });

        hammer.on("swipedown", event => {
            this.props.onSwipeDown(event);
        });

        hammer.on("pinchstart", event => {
            this.props.onPinch(event);
        });
    }

    render() {
        return (
            <canvas className="GesturePanel"></canvas>
        );
    }
}

export default GesturePanel;