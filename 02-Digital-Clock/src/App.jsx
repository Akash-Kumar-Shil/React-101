import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setInterval(() => {setNow(new Date());}, 1000);
  }, []);

  let hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours === 0 ? 12 : hours;
  const formattedHours = hours.toString().padStart(2, "0");

  return (
    <span className="digital-clock">
      {formattedHours}:{minutes}:{seconds} {ampm}
    </span>
  );
}
