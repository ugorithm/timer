import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'

const Home: NextPage = () => {
  //all the hooks
  let [minutes, setMinutes] = useState(0);
  let [seconds, setSeconds] = useState(0);
  let [breakTime, setBreak] = useState(false);
  let [start, setStart] = useState(false)

  //converting it to a 2 digit number
  let fSeconds = ("0" + seconds).slice(-2);
  let fminutes = ("0" + minutes).slice(-2);

  let time = "Focus Time";

  //the update loop that runs every second
  useEffect(() => {
    if (start) {
      let interval = setInterval(() => {
        clearInterval(interval);
        setSeconds(seconds - 1);

        if (seconds == 0) {
          setMinutes(minutes - 1);
          setSeconds(0);
        }

        if (!breakTime && seconds == 0 && minutes == 0) {
          setBreak(breakTime = true);
          time = "break Time"
          setMinutes(4);
          setSeconds(60);
        }
        else if (breakTime && seconds == 0 && minutes == 0) {
          setBreak(breakTime = false);
          time = "Focus Time"
          setMinutes(24);
          setSeconds(60);
        }

      }, 1000);
    }
  }, [minutes, seconds]);

  //button functions has a bug here
  const startfunc = () => {
    setMinutes(24);
    setSeconds(60);
    setStart(true);
  }

  const stopfunc = () => {
    setMinutes(0);
    setSeconds(0);
    setStart(false);
  }

  return (
    <>
      <h1>Timer</h1>
      <p>{time}</p>
      <p>{fminutes}:{fSeconds}</p>
      <button onClick={startfunc} className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">start</button>

      <button onClick={stopfunc} className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80">stop</button>

    </>
  )
}

export default Home;