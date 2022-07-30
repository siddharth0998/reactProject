import React, { useState } from "react";
import ReactDOM from "react-dom";

function Counter() {

    const [count,setCount] = useState(0);

    const increment = () => {
         setCount(count + 1);
    }

    const decrement = () => {
         setCount(count -1);
    }
        
       return (
        <div>
            <button onClick={decrement}>Decrement</button>
            {count}
            <button onClick={increment}>Increment</button>
        </div>
       )

}

export default Counter;