import { useState } from "react"

export default function Toggle (){
     const [text, setText] = useState('Hello, React Learner');

     const handleShow =()=>{
        const newText = "Hello, React Learner";
        setText(newText)
     }
     const handleHide =()=>{
        setText("")
     }
    return (
        <div className="userCard">
            <h2>{text}</h2>
            <button onClick={handleShow}>Show</button>
            <button onClick={handleHide}>Hide</button>
        </div>
    )
}