import { useState, useEffect } from "react";

function ThemeDropdown() {
  const themes = ["emo-kid", "default", "terminal"];

  const [selectedTheme, setSelectedTheme] = useState("default");
  const [isOpen, setIsOpen] = useState(false);

  // Apply selected theme to body
  useEffect(() => {
    document.body.className = ""; // Clear previous
    document.body.classList.add(selectedTheme); // Apply new
  }, [selectedTheme]);

  return (
    <div className="dropBox">
      <button onClick={() => setIsOpen(!isOpen)} className="btn">
        Theme: {selectedTheme} ⌄
      </button>

      {isOpen && (
        <ul className="thPicker">
          {themes.map((theme) => (
            <li
              key={theme}
              onClick={() => {
                setSelectedTheme(theme);
                setIsOpen(false); // Close dropdown after selection
              }}
              style={{
                cursor: "pointer",
                fontWeight: theme === selectedTheme ? "bold" : "normal",
              }}
            >
              {theme}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ThemeDropdown;
