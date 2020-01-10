import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './JoyStick.css';

class JoyStick extends Component {

    drawBase() {
        const x = this.props.centerX;
        const y = this.props.centerY;
        
        let style = {};
        if (x !== 0 && y !== 0) {
            style = {
                position: 'absolute',
                width: '100px',
                height: '100px',
                left: x-50,
                top: y-50,
                borderRadius: '50px',
                backgroundColor: 'yellow'
            };
        }
        const joyStick = document.querySelector(".Base");

        const element = <div id="baseCircle" style={style}></div>;
        ReactDOM.render(element, joyStick);
    }

    drawMovement() {
        const x = this.props.mouseX;
        const y = this.props.mouseY;
        
        let style = {};
        if (x !== 0 && y !== 0) {
            style = {
                position: 'absolute',
                width: '100px',
                height: '100px',
                left: x-50,
                top: y-50,
                borderRadius: '50px',
                backgroundColor: 'red'
            };
        }

        const joyStick = document.querySelector(".Movement");

        const element = <div id="moveCircle" style={style}></div>;
        ReactDOM.render(element, joyStick);
    }

    drawJoyStick() {
        this.drawBase();
        this.drawMovement();
    }

    componentDidUpdate() {
        console.log("component did update");
        this.drawJoyStick();
    }

    render() {
        return (
            <div className="JoyStick">
                <div className="Base"></div>
                <div className="Movement"></div>
            </div>
        );
    }
}

export default JoyStick;