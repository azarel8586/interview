import React, {useState} from "react";

const SimpleCounter = () => {
    const [count, setCount] = useState(0);
    const increment = (e) => {
        e.preventDefault();
        setCount(count + 1);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default SimpleCounter;
