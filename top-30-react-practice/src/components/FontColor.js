import React, {useState} from "react";

const FontColor = () => {
    const [color, setColor] = useState('#000');

    const changeColor = () => {
        if (color === '#000') {
            setColor('red');
        } else {
            setColor('#000');
        }
    }
    
    return (
        <div>
            <p style={{color}}>This text will change color!</p>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}

export default FontColor;