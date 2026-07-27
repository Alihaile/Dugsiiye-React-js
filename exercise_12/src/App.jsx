import { useState, useEffect } from 'react'


function App() {
  const [count, setCount] = useState(0);

  document.title = 'Exercise 12';

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  }
  const handleDecrement = () => {
    if (count === 0)
      return

    setCount((prev) => prev - 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleDecrement} disabled={count === 0}>Decrement</button>

      <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

export default App
