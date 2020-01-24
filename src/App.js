import React, { useEffect } from 'react';
import JoyStickPanel from './JoyStickPanel/JoyStickPanel';
import GesturePanel from './GesturePanel/GesturePanel';

import './App.css';

const App = () => {

  const handleJoyStickData = (joyStickData) => {
    // Insert code to handle joystick output data
    console.log(joyStickData);
  }

  const handleTap = (event, comp) => {
    comp.setState({ backgroundColor: 'aqua' });
  }

  const handleDoubleTap = (event, comp) => {
    comp.setState({ backgroundColor: 'orange' });
  }

  const handlePinch = (event, comp) => {
    comp.setState({ backgroundColor: 'yellow' });
  }

  const handleSwipeLeft = (event, comp) => {
    comp.setState({ backgroundColor: 'red' });
  }

  const handleSwipeRight = (event, comp) => {
    comp.setState({ backgroundColor: 'blue' });
  }

  const handleSwipeUp = (event, comp) => {
    comp.setState({ backgroundColor: 'green' });
  }

  const handleSwipeDown = (event, comp) => {
    comp.setState({ backgroundColor: 'black' });
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