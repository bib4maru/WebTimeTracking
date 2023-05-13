import React from 'react';

const CHIP_MAX_WIDTH =  170;

const CustomLabel = (props) => {
    const { children } = props;
    return (
    <div style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: CHIP_MAX_WIDTH
    }}>
        {children}
    </div>
    );
};

export default CustomLabel;