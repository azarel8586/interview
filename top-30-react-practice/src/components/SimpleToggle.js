import React, {useState} from "react";

const SimpleToggle = () => {
    const [toggle, setToggle] = useState(false);
    const toggleState = (e) => {
        e.preventDefault();
        setToggle(!toggle);
    }

    return (
        <div>
            <p>{toggle ? "On" : "OFF"}</p>
            <button onClick={toggleState}>Toggle</button>
        </div>
    );
}

export default SimpleToggle;
