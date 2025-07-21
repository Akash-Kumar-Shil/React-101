import React from 'react'
import { useState, useEffect } from 'react'

export default function App() {
  const [color, setColor] = useState('')

  function handleChange(e) {
    setColor(e.target.value)
  }

  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])

  return (
    <div className='container'>
      <p>Type Color Name Or Color Code To Change Background Color</p>
      <input type="text" placeholder='Type Color Name Or Color Code' value={color} onChange={handleChange} />
    </div>
  )
}
