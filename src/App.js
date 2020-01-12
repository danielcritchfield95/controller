import React from 'react';
import JoyStickPanel from './JoyStickPanel/JoyStickPanel';
import GesturePanel from './GesturePanel/GesturePanel';

import './App.css';

const App = () => {

  const handleJoyStickData = (joyStickData) => {
    // Insert code to handle joystick output data
    console.log(joyStickData);
  }

  const handleGestureData = (gestureData) => {
    // Insert code to handle gesture output data
    console.log(gestureData);
  }

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
        handleGestureData={handleGestureData} />
    </div>
  );
}

export default App;
