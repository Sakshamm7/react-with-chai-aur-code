import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter] = useState(7);

  const addvalue = () => {
    setcounter(counter + 1);
  }

  const removevalue = () => {
    setcounter(counter - 1);
  }

  return (
    <>
      <h1> Chai Aur React </h1>
      <h2>Counter value : {counter} </h2>
      <button onClick={addvalue} >Add Value {counter}</button>
      <br />
      <button onClick={removevalue} >Remove Value {counter} </button>
      <p>Footer : {counter} </p>
    </>
  )
}

export default App