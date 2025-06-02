import { useState, useEffect } from "react";

function Theme() {
  
  const [currentTheme, setCurrentTheme] = useState("light");

  // Toggle between light and dark
  const updateTheme = () => {
    setCurrentTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className = ""; 
    document.body.classList.add(currentTheme);
  }, [currentTheme]); 

  return (
    <div className="btnBox">
      <button onClick={updateTheme} className="btn">
        Change Theme
      </button>
    </div>
  );
}

export default Theme;