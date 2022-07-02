import { useState } from "react";


const UseStateCounter = () => {
  // TODO: Create state
  const [count, setCount] = useState(0)

  let changeAmount = (amount) => {
    // TODO: Update state
    setCount(prevCount => prevCount + amount)
  }

  let resetCount = () => {
    // TODO: Update state  
    setCount(0)
  }

  return (
    <div className="container pt-5">
      <h1>useState() counter</h1>
      <h1>{ count}</h1>
      <div className="d-grid gap-2">
        <button className="btn btn-secondary" type="button" onClick={() => changeAmount(1)}>+</button>
        <button className="btn btn-secondary" type="button" onClick={() => changeAmount(-1)}>-</button>
        <button className="btn btn-secondary" type="button" onClick={() => resetCount(1)}>Reset</button>
      </div>
    </div>
  )
}

export default UseStateCounter;
