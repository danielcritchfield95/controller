import React, { Component } from 'react';
import Hammer from 'react-hammerjs';
import JoyStick from '../JoyStick/JoyStick';

import './JoyStickPanel.css';

class JoyStickPanel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            centerX: 0,
            centerY: 0
        };
    }

    press = (event) => {
        this.setState( {
            centerX: event.center.x,
            centerY: event.center.y
        } );
        console.log(this.state);
    }

    render() {
        return (
            <div className="JoyStickPanel">
                <Hammer onTap={this.press}>
                    <div className="test">
                        <div></div>
                    </div>
                </Hammer>
            </div>
        );
    }
}

export default JoyStickPanel;