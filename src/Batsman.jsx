import { useState } from "react"

export default function Batsman() {
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    const [fours, setFours] = useState(0);
    const [balls, setBalls] = useState(0);
    const [overs, setOvers] = useState(0)

    const handleSingles = () => {
        const newRun = runs + 1;
        setRuns(newRun)
    }
    const handleFour = () => {
        const newRun = runs + 4;
        const newFours = fours + 1;
        setFours(newFours)
        setRuns(newRun)
    }
    const handleSix = () => {
        const newRun = runs + 6;
        const newSixes = sixes + 1;
        setSixes(newSixes)
        setRuns(newRun)
    }
    const handleBalls = () => {
        const newBalls = balls + 1;
        setBalls(newBalls);
    
        if (newBalls % 6 === 0) {
            setOvers(overs + 1);
        }
    }
    return (
        <div>
            <h3>Player: Bangla </h3>
            <h2>ball : {balls}</h2>
            <p><small>four: {fours}</small></p>
            <p><small>six: {sixes}</small></p>
            <p><small>over: {overs}</small></p>
            <h2>Runs: {runs}</h2>
            {
                runs > 50 && <p>You scored: 50 </p> // ternaray diye set korlam 
            }
            <button onClick={handleSingles}>singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
            <button onClick={handleBalls}>ball</button>
        </div>
    )
}