import React from 'react';
import LeftPanel from './LeftPanel/LeftPanel';
import RightPanel from './RightPanel/RightPanel';

import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* Insert Component(s) desired for controller here */}
      <LeftPanel>Left</LeftPanel>
      <RightPanel>Right</RightPanel>
    </div>
  );
}

export default App;
