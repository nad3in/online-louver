import React from "react";
import IcomoonReact from "icomoon-react";
const iconSet = require("./selection.json");

const Icon = props => {
    const { color, size = "100%", icon, className = "" } = props;
    return (
        <IcomoonReact
            className={className}
            iconSet={iconSet}
            color={color}
            size={size}
            icon={icon}
        />
    );
};


export default Icon;