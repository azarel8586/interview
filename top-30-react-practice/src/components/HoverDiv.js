import React, {useState} from "react";

const HoverDiv = () => {
    const [bgColor, setBgColor] = useState(false);
    const toggleState = (value) => {
        setBgColor(value ? "red" : "white");
    }

    return (
        <div
            style={{ backgroundColor: bgColor, width: "200px", height: "100px", margin: "0 auto" }}   
            onMouseEnter={() => { toggleState(true) }} 
            onMouseLeave={() => { toggleState(false) }}>
            Hover over me!
        </div>
    );
}

export default HoverDiv;
