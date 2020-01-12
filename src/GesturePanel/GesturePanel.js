import React, { Component } from 'react';
import Hammer from 'react-hammerjs';

import './GesturePanel.css';

class GesturePanel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tapX: 0,
            tapY: 0,
            tapped: false,
            doubleTapX: 0,
            doubleTapY: 0,
            doubleTapped: false
        }
    }

    handleTap = (event) => {
        this.setState({
            tapX: event.center.x,
            tapY: event.center.y,
            tapped: true
        });
    }

    handleDoubleTap = (event) => {
        this.setState({
            doubleTapX: event.center.x,
            doubleTapY: event.center.y,
            doubleTapped: true
        });
    }

    handleRotate = (event) => {
        // TODO
        console.log(event);
    }

    handlePinchIn = (event) => {
        console.log(event);
    }

    handleSwipe = (event) => {
        document.body.style.backgroundColor = 'red';
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
                onPinchIn={this.handlePinchIn}
                // onPinchOut={}
                onRotate={this.handleRotate}
                // onSwipe={} 
            >
                <div className="GesturePanel"></div>
            </Hammer>
        );
    }
}

export default GesturePanel;