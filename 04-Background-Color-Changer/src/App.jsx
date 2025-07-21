import React from "react";
import { useState, useEffect } from "react";

export default function App() {
  const [color, setColor] = useState("black");

  function changeColor(e) {
    setColor(e.target.value);
  }

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div className="container">
      <p className="text">Click To Change Color</p>
      <input
        type="color"
        name="color box"
        value={color}
        onChange={changeColor}
      />
      <h2 className="text">{color}</h2>
    </div>
  );
}
