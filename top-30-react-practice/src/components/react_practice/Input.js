import React, { useContext } from "react";
import TextFieldContext from "./TextFieldContext";

const Input = () => {
    const instanceId = useContext(TextFieldContext);

    return (
        <input type="text" id={instanceId}/>
    );
}

export default Input;