import React from "react";

const AlertClick = () => {
    return (
        <div>
            <button onClick={(e) => {
                e.preventDefault();
                window.alert("Button Clicked!")
            }}>Click Me!</button>
        </div>
    )
}

export default AlertClick;