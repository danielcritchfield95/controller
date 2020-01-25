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
    comp.setState({ style:{backgroundColor: 'aqua', width: '50%'} });
  }

  const handleDoubleTap = (event, comp) => {
    comp.setState({ style:{backgroundColor: 'orange', width: '50%'} });
  }

  const handlePinch = (event, comp) => {
    comp.setState({ style:{backgroundColor: 'yellow', width: '50%'} });
  }

  const handleSwipeLeft = (event, comp) => {
    comp.setState({ style:{backgroundColor: 'red', width: '50%'} });
  }

  const handleSwipeRight = (event, comp) => {
    comp.setState({ style:{backgroundColor: 'blue', width: '50%'} });
  }

  const handleSwipeUp = (event, comp) => {
    comp.setState({ style:{backgroundColor: 'green', width: '50%'} });
  }

  const handleSwipeDown = (event, comp) => {
    comp.setState({ style:{backgroundColor: 'black', width: '50%'} });
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