import React, { useEffect } from 'react';
import JoyStickPanel from './JoyStickPanel/JoyStickPanel';
import GesturePanel from './GesturePanel/GesturePanel';

import './App.css';

const App = () => {

  const handleJoyStickData = (joyStickData) => {
    // Insert code to handle joystick output data
    console.log(joyStickData);
  }

  const handleTap = (event) => {
    const panel = document.querySelector('.GesturePanel');
    panel.style.backgroundColor = 'aqua';
  }

  const handleDoubleTap = (event) => {
    const panel = document.querySelector('.GesturePanel');
    panel.style.backgroundColor = 'orange';
  }

  const handlePinch = (event) => {
    const panel = document.querySelector('.GesturePanel');
    panel.style.backgroundColor = 'yellow';
  }

  const handleSwipeLeft = (event) => {
    const panel = document.querySelector('.GesturePanel');
    panel.style.backgroundColor = 'red';
  }

  const handleSwipeRight = (event) => {
    const panel = document.querySelector('.GesturePanel');
    panel.style.backgroundColor = 'blue';
  }

  const handleSwipeUp = (event) => {
    const panel = document.querySelector('.GesturePanel');
    panel.style.backgroundColor = 'green';
  }

  const handleSwipeDown = (event) => {
    const panel = document.querySelector('.GesturePanel');
    panel.style.backgroundColor = 'black';
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
  });

  return (
    <div className="App">
      {/* Insert Component(s) desired for controller here */}
      <JoyStickPanel
        color={'dodgerblue'}
        width={'50%'}
        joystickBaseColor={'green'}
        joystickMovementColor={'red'}
        handleJoyStickData={handleJoyStickData} />
      <GesturePanel
        color={'purple'}
        width={'50%'}
        onTap={handleTap}
        onDoubleTap={handleDoubleTap}
        onSwipeLeft={handleSwipeLeft}
        onSwipeRight={handleSwipeRight}
        onSwipeUp={handleSwipeUp}
        onSwipeDown={handleSwipeDown}
        onPinch={handlePinch} />
    </div>
  );
}

export default App;