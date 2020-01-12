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

    tap = (event) => {
        this.setState({
            tapX: event.center.x,
            tapY: event.center.y,
            tapped: true
        });
    }

    doubleTap = (event) => {
        this.setState({
            doubleTapX: event.center.x,
            doubleTapY: event.center.y,
            doubleTapped: true
        });
    }

    rotate = (event) => {
        // TODO
        console.log(event);
    }

    componentDidMount() {
        const panel = document.querySelector('.GesturePanel');

        panel.style.backgroundColor = this.props.color;
        panel.style.width = this.props.width;
    }

    render() {
        return (
            <Hammer
                onTap={this.tap}
                onDoubleTap={this.doubleTap}
            // onPinchIn={}
            // onPinchOut={}
            onRotate={this.rotate}
            // onSwipe={} 
            >
                <div className="GesturePanel"></div>
            </Hammer>
        );
    }
}

export default GesturePanel;