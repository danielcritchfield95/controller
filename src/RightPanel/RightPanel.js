import React from 'react';

import './RightPanel.css';

const RightPanel = (props) => {
    return (
        <div className="RightPanel">
            Right
            {props.children}
        </div>
    );
}

export default RightPanel;