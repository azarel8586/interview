import useLocalStorage from "./hooks/useLocalStorage";
import { useEffect } from "react";

const ToDo = () => {
    const [storedItems, setStoredItems] = useLocalStorage('items', []);
    let inputNode = null;
    
    useEffect(() => {
    }, [setStoredItems]);

    const addItem = (value) => {
        setStoredItems([...storedItems, value]);
    }

    const updateItem = (idx, value, fullfilled) => {
        console.log("Mut", idx, value, fullfilled);
        const clonedList = structuredClone(storedItems);
        console.log("Mut", clonedList);
        clonedList[idx] = {fullfilled: fullfilled, value: value};
        console.log("Mut", clonedList);
        setStoredItems(clonedList);
    }

    return (
        <div className="todo-app">
            <header>
                <h3>To Do Application</h3>
            </header>
            <section>
                <input type="text" placeholder="Enter item" ref={node => {inputNode = node}}/>
                <button onClick={(e) => { addItem({fullfilled: false, value: inputNode.value}) }}>Submit</button>
            </section>
            <section>
                {storedItems &&
                    <ul>
                        {storedItems.map((item, idx) => {
                            return (
                                <li key={idx}>
                                    <input type="checkbox" checked={item.fullfilled} onChange={(e)=> {
                                        updateItem(idx, item.value, !item.fullfilled);
                                    }}/>: {item.value}
                                </li>
                            );
                        })}
                    </ul>
                }
            </section>
        </div>
    );
}

export default ToDo;