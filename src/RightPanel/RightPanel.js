import React from 'react';

import './RightPanel.css';

const RightPanel = (props) => {
    return (
        <div className="RightPanel">
            {props.children}
        </div>
    );
}

export default RightPanel;