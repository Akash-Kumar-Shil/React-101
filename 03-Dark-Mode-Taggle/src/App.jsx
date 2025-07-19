import React, { useState, useEffect, useCallback } from "react";

export default function App() {
  const [mode, setMode] = useState("light");

  // Helper function to read CSS variables
  function getCSSVariable(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name);
  }

  // CSS variables for light/dark themes
  const lightBg = getCSSVariable("--light-body-bg");
  const lightFg = getCSSVariable("--light-body-fg");
  const darkBg = getCSSVariable("--dark-body-bg");
  const darkFg = getCSSVariable("--dark-body-fg");

  // Toggle mode between light and dark
  const toggleMode = useCallback(() => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }, []);

  // Update body styles when mode changes
  useEffect(() => {
    document.body.style.backgroundColor = mode === "light" ? lightBg : darkBg;
    document.body.style.color = mode === "light" ? lightFg : darkFg;
  }, [mode, lightBg, lightFg, darkBg, darkFg]);

  // Keyboard accessibility (Ctrl + M)
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === "m" && event.ctrlKey) {
        toggleMode();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleMode]);

  return (
    <div>
      <button onClick={toggleMode}>
        {mode === "light" ? "DARK MODE" : "LIGHT MODE"}
      </button>
    </div>
  );
}
