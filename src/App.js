import React from 'react';
import LeftPanel from './LeftPanel/LeftPanel';
import RightPanel from './RightPanel/RightPanel';
import JoyStick from './JoyStick/JoyStick';

import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* Insert Component(s) desired for controller here */}
      <LeftPanel>
        <JoyStick></JoyStick>
      </LeftPanel>
      <RightPanel></RightPanel>
    </div>
  );
}

export default App;
