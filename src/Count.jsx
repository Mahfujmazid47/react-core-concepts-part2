import { useState } from "react"

export default function Count() {

    const [count, setCount] = useState(0);
    const handleAdd=()=>{
        const newCount = count +1;
        setCount(newCount)
    }
    const handleSubstract =()=>{
        const newCount = count -1;
        setCount(newCount)
    }
    const handleReset =()=>{
        
        setCount(0)
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSubstract}>Substract</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
} 