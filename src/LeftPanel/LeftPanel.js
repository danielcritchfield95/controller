import React from 'react';

import './LeftPanel.css'

const LeftPanel = (props) => {
    return (
        <div className="LeftPanel">
            {props.children}
        </div>
    );
}

export default LeftPanel;