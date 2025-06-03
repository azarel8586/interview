import React, {useState} from "react";

const SelfDisablingButton = () => {
    const [isDisabled, setIsDisabled] = useState(false);
    const toggleState = (e) => {
        e.preventDefault();
        setIsDisabled(!isDisabled);
    }

    return (
        <div>
            <button disabled={isDisabled} onClick={toggleState}>Press Me Gently</button>
        </div>
    );
}

export default SelfDisablingButton;
