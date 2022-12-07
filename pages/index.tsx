import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const mins = 24;
  const secs = 60;
  const breakT = false;

  let [minutes, setMinutes] = useState(mins);
  let [seconds, setSeconds] = useState(secs);
  let [breakTime, setBreak] = useState(breakT);

  let fSeconds = ("0" + seconds).slice(-2);
  let fminutes = ("0" + minutes).slice(-2);

  let time = "Focus Time";


  useEffect(() => {
    let interval = setInterval(() => {
        clearInterval(interval);
        setSeconds(seconds - 1);
        
        if (seconds == 0)
        {
            setMinutes(minutes-1);
            setSeconds(secs);
        }
        
        if (!breakTime && seconds == 0 && minutes == 0)
        {
            setBreak(breakTime = true);
            time = "break Time"
            setMinutes(4);
            setSeconds(60);
        }
        else if (breakTime && seconds == 0 && minutes == 0)
        {
            setBreak(breakTime = false);
            time = "Focus Time"
            setMinutes(24);
            setSeconds(60);
        }

    }, 1000);
  }, [minutes, seconds]);
    
  

  return (
    <>
      <h1>Timer</h1>
      <p>{time}</p>
      <p>{fminutes}:{fSeconds}</p>
    </>
  )
}

export default Home;