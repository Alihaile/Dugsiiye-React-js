import { useState, useEffect } from 'react'


function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');
  const [title, setTitle] = useState('Welcome!');

  document.title = title;

  useEffect(() => {
    if (name && greeting) {
      document.title = `${greeting}, ${name}`
    }
  }, [name])

  const changeName = (e) => {
    setName(e.target.value)
  }

  const changeGreeting = (e) => {
    setGreeting(e.target.value)
  }

  return (
    <>
      <h2>Enter your Name</h2>
      <input type='text' value={name} onChange={changeName} />
      <br />
      <h2>Choose Greeting:</h2>
      <br />
      <input type='text' value={greeting} onChange={changeGreeting} />
    </>
  )
}

export default App
