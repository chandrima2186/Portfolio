import { useEffect, useState } from "react";
import "../styles/ColorThemePicker.css";

function ColorThemePicker() {
  const colors = [
    "#38bdf8",
    "#a855f7",
    "#ec4899",
    "#22c55e",
    "#f97316",
    "#eab308"
  ];

  const [selectedColor, setSelectedColor] = useState(
    localStorage.getItem("accentColor") || "#38bdf8"
  );

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--accent-color",
      selectedColor
    );

    localStorage.setItem("accentColor", selectedColor);
  }, [selectedColor]);

  return (
    <div className="theme-picker">
      <h3>Choose Your Color</h3>

      <div className="color-options">
        {colors.map((color) => (
          <button
            key={color}
            className="color-button"
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
            aria-label={`Choose ${color}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default ColorThemePicker;