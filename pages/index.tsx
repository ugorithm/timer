import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const mins = 24;
  const secs = 60;
  const breakT = false;

  let [minutes, setMinutes] = useState(mins);
  let [seconds, setSeconds] = useState(secs);
  let [breakTime, setBreak] = useState(breakT);

  useEffect(() => {
    let interval = setInterval(() => {
        clearInterval(interval);
        setSeconds(seconds - 1);
        
        if (seconds == 0)
        {
            setMinutes(minutes-1);
            setSeconds(secs);
        }
        
        



    }, 1000);
  }, [minutes, seconds]);


  return (
    <>
      <h1>Timer</h1>
      <p>{minutes}:{seconds}</p>
    </>
  )
}

export default Home;