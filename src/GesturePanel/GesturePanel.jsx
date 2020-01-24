import React, { Component } from 'react';
import Hammer from 'hammerjs';

import './GesturePanel.css';

class GesturePanel extends Component {

    constructor(props) {
        super();
        this.myRef = React.createRef();
        this.state = {
            backgroundColor: props.color,
            width: props.width
        };
    }

    componentDidMount() {
        let hammer = new Hammer(this.myRef.current);

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

        const { color, width } = this.props;

        this.setState({ backgroundColor: color, width: width });
    }

    render() {
        return (
            <canvas ref={this.myRef} className="GesturePanel" style={this.state}></canvas>
        );
    }
}

export default GesturePanel;