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
    document.body.style.backgroundColor = 'aqua';
  }

  const handleDoubleTap = (event) => {
    document.body.style.backgroundColor = 'orange';
  }

  const handlePinch = (event) => {
    document.body.style.backgroundColor = 'yellow';
  }

  const handleSwipeLeft = (event) => {
    document.body.style.backgroundColor = 'red';
  }

  const handleSwipeRight = (event) => {
    document.body.style.backgroundColor = 'blue';
  }

  const handleSwipeUp = (event) => {
    document.body.style.backgroundColor = 'green';
  }

  const handleSwipeDown = (event) => {
    document.body.style.backgroundColor = 'black';
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