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
        const mouseX = this.props.mouseX;
        const mouseY = this.props.mouseY;
        const centerX = this.props.centerX;
        const centerY = this.props.centerY;
        
        let clickX = mouseX-50; // -50 because width of circle is 100px
        let clickY = mouseY-50; // * -1 because top of screen is 0

        const deltaX = mouseX - centerX;

        // outter circle radius
        const radius = 90;

        // SOHCAHTOA
        let adjacent = mouseX - centerX;
        let opposite = mouseY - centerY;
        const hypotenuse = Math.sqrt(Math.pow(adjacent, 2) + Math.pow(opposite, 2));

        let angle = 0;
        if (hypotenuse !== 0) {
            angle = Math.asin(opposite/hypotenuse);
        }

        if (hypotenuse > radius) {
            opposite = Math.sin(angle)*radius;
            adjacent = Math.cos(angle)*radius;

            clickY = centerY + opposite - 50;
            if (deltaX > 0) {
                clickX = centerX + adjacent - 50;
            } else {
                clickX = centerX - adjacent - 50;
            }
        }

        let style = {};
        if (mouseX !== 0 && mouseY !== 0) {
            style = {
                position: 'absolute',
                width: '100px',
                height: '100px',
                left: clickX,
                top: clickY,
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

    outputData() {
        const mouseX = this.props.mouseX;
        const mouseY = this.props.mouseY;
        const centerX = this.props.centerX;
        const centerY = this.props.centerY;

        // SOHCAHTOA
        const adjacent = mouseX - centerX;
        const opposite = mouseY - centerY;
        const hypotenuse = Math.sqrt(Math.pow(adjacent, 2) + Math.pow(opposite, 2));

        let angle = 0;
        if (hypotenuse !== 0) {
            angle = Math.sin(opposite/hypotenuse);
        }

        const data = {
            x: adjacent,
            y: opposite * (-1), // * -1 because of screen is 0
            throttle: hypotenuse,
            direction: angle
        };

        console.log(data);
    }

    componentDidUpdate() {
        this.drawJoyStick();
        this.outputData();
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