import React from "react";

const HardCodedState = ({isLoggedIn}) => {
    return (
        <div>
            <p>{isLoggedIn ? "Logged In" : "F Off"}</p>
        </div>
    );
}

export default HardCodedState;
