import Batsman from './Batsman'
import Counter from './Counter'
import Users from './users'
import Friends from './Friends'
import Posts from './Posts'
import Count from './Count'
import Toggle from './Toggle'
import ShowHideText from './ShowHideText'
import './App.css'
import { Suspense } from 'react'


// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
// .then (res=>res.json())

// const fetchFriends = async()=>{
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// }

// const fetchPosts = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   return response.json()
// }

function App() {
  // const friendsPromise = fetchFriends();
  // const postsPromise = fetchPosts();

  function handleClick() {
    alert('clicked 1')
  }
  const handleClick3 = () => {
    alert('clicked 3')
  }
  const handleClick5 = (num) => {
    const number = num + 5;
    alert(number)
  }

  return (
    <>

      <h1>Vite + React</h1>
      {/* <Suspense fallback={<h1>Loading Posts...</h1>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense> */}
      {/* <Suspense fallback={<h3>Loading...</h3>}>
      <Users fetchUsers ={fetchUsers}></Users>
      </Suspense> */}
      {/* <Suspense fallback={<h3>Loading For Friends...</h3>}>
      <Friends friendsPromise ={friendsPromise}></Friends>
      </Suspense> */}
      <ShowHideText></ShowHideText>
      <Toggle></Toggle>
      <Count></Count>
      <Batsman></Batsman>
      <Counter></Counter>

      {/* normal js:==>  <button onclick="handleClick()">click me</button> */}
      <button onClick={handleClick}>Click me</button>
      <button onClick={function handleClick2() { alert("clicked 2") }}>click me2</button>
      <button onClick={handleClick3}>click me3</button>
      <button onClick={() => { alert("cliked 4") }}>click me4</button>
      <button onClick={() => handleClick5(10)}>Add 5</button>
    </>
  )
}

export default App
