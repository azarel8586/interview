import React, {useId} from "react";
import TextField from "./react_practice/TextField";
import Label from "./react_practice/Label";
import Input from "./react_practice/Input";
import TextFieldContext from "./react_practice/TextFieldContext";

const TextWithComp = () => {
    const instanceKey = useId();

    return (
        <div>
            <h3>Text Input with composition and useId()</h3>
            <TextFieldContext.Provider value={instanceKey}>
                <TextField>
                    <Label>First Name Von Last Name</Label>
                    <Input/>
                </TextField>
            </TextFieldContext.Provider>
        </div>
    );
}

export default TextWithComp;
