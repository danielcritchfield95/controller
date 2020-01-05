import React from 'react';
import LeftPanel from './LeftPanel/LeftPanel';
import RightPanel from './RightPanel/RightPanel';
import CustomJoyStick from './JoyStick/CustomJoyStick';

import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* Insert Component(s) desired for controller here */}
      <LeftPanel>
        <CustomJoyStick />
      </LeftPanel>
      <RightPanel></RightPanel>
    </div>
  );
}

export default App;
