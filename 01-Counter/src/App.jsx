import React, { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(prev => prev + 1)
  const decrement = () => setCount(prev => prev - 1)
  const reset = () => setCount(0)

  const formatCount = (num) => num.toString().padStart(3, '0')

  return (
    <main>
      <h1>COUNTER PROGRAM</h1>
      <div className='counter'>
        <span className='output'>{formatCount(count)}</span>
        <div className='buttons'>
          <button onClick={increment}>+</button>
          <button className='reset' onClick={reset}>RS</button>
          <button onClick={decrement}>-</button>
        </div>
      </div>
    </main>
  )
}
