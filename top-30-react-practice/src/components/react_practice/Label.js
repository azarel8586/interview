import React, { useContext } from "react";
import TextFieldContext from "./TextFieldContext";

const Label = ({children}) => {
    const instanceId = useContext(TextFieldContext);
    const display = 'block';

    return (
        <label style={{display}} for={instanceId}>{children}</label>
    );
}

export default Label;