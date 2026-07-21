import { useState, useEffect } from 'react'


function App() {
  const [time, setTime] = useState(30);
  const [countDown, setCountDown] = useState(30);
  const [isRunning, setIsRunning] = useState(false);

  document.title = 'Exercise 8';
  let timerId;

  console.log('at top: ' + countDown);

  useEffect(() => {

    const handleCountDown = (e) => {

      if (countDown == 0) {
        setIsRunning(false);
      }

      if (isRunning && countDown > 0) {
        setCountDown((prev) => prev - 1)
        console.log(countDown);
      }
    }

    if (isRunning) {
      timerId = setInterval(handleCountDown, 1000);
    }

    return () => {
      clearInterval(timerId)
    }
  }, [isRunning, countDown])

  const handleStart = (e) => {
    setIsRunning(true);
    if (countDown == 0) {
      setCountDown(time);
    }
  }


  const handleStop = (e) => {
    setIsRunning(false);
    clearInterval(timerId);
  }

  const handleReset = (e) => {
    setIsRunning(false);
    setTime(30);
    setCountDown(30);
  }

  const handleTimeLeftChange = (e) => {
    setTime(e.target.value)
    setCountDown(e.target.value)
  }

  console.log("re-rendering");
  return (
    <>
      <h2>Countdown Timer</h2>
      <br />
      Set Time(seconds): <input type='text' value={time} onChange={handleTimeLeftChange} />
      <br />
      <h4>Time left: {countDown}</h4>

      <button onClick={handleStart} disabled={(isRunning && time > 0) || time == 0}>Start</button>
      <button onClick={handleStop} disabled={!isRunning}>Stop</button>
      <button onClick={handleReset} >Reset</button>

    </>
  )

}

export default App
