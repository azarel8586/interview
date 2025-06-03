import React, { useState } from "react";

const InputToConsole = () => {
    const [input, setInput] = useState(null);
    const printOutput = (e) => {
        e.preventDefault();
        console.log(input);
    }

    return (
        <div>
            <input onChange={(e) => { setInput(e.target.value) }} type="text" placeholder="Input Console Text" value={input}/>
            <button onClick={printOutput}>Submit</button>
        </div>
    );
}

export default InputToConsole;