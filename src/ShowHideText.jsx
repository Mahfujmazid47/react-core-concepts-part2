import { useState } from "react";

export default function ShowHideText() {
    const [isVisible, setIsVisible] = useState(true);
    const toggleVisibility =()=>{
        setIsVisible(!isVisible)
    }     

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <button 
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
                onClick={toggleVisibility}
            >
                {isVisible ? "Hide Text" : "Show Text"}
            </button>
            {isVisible && (
                <p className="mt-4 p-4 bg-white shadow-lg rounded-lg">This is the text that can be shown or hidden.</p>
            )}
        </div>
    );
}
