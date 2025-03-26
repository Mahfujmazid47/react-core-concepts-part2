import Batsman from './Batsman'
import Counter from './counter'
import './App.css'

function App() {

  function handleClick(){
    alert('clicked 1')
  }
  const handleClick3=()=>{
    alert('clicked 3')
  }
  const handleClick5=(num)=>{
    const number = num + 5;
    alert(number)
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      <Batsman></Batsman>
      <Counter></Counter>

      {/* normal js:==>  <button onclick="handleClick()">click me</button> */}
      <button onClick={handleClick}>Click me</button>
      <button onClick={function handleClick2(){alert("clicked 2")}}>click me2</button>
      <button onClick={handleClick3}>click me3</button>
      <button onClick={()=>{alert("cliked 4")}}>click me4</button>
      <button onClick={()=>handleClick5(10)}>Add 5</button>
    </>
  )
}

export default App
