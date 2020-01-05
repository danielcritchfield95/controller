import React from 'react';

import './LeftPanel.css'

const LeftPanel = (props) => {
    return (
        <div className="LeftPanel">
            Left
            {props.children}
        </div>
    );
}

export default LeftPanel;