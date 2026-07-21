import { useState, useEffect } from 'react'


function App() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  document.title = 'Exercise 7';
  useEffect(() => {

    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove);

    () => {
      return removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouse])

  return (
    <>
      <h2>Y: {mouse.y}</h2>
      <br />
      <h2>X: {mouse.x}</h2>
    </>
  )
}

export default App
