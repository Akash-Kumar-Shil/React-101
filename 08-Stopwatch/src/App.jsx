import { useState, useEffect, useRef } from 'react';
import './App.css';

export default function App() {
  const [time, setTime] = useState(0); // time in ms
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 100); // increase by 100 ms
      }, 100);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  // Convert time (ms) to hh:mm:ss:ms format
  const formatTime = (ms) => {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 100);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${milliseconds}`;
  };

  return (
    <div className='container'>
      <div>
        <label className='mili-sec'>{formatTime(time)}</label>
      </div>
      <div className='buttons'>
        <button onClick={handleStart} disabled={isRunning}>START</button>
        <button onClick={handlePause} disabled={!isRunning}>PAUSE</button>
        <button onClick={handleReset} >RESET</button>
      </div>
    </div>
  );
}
