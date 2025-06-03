import React from "react";

const HelloName = ({name}) => {
    return <div>Hello {name}</div>
}

HelloName.defaultProps = { name: "John" };

export default HelloName;