import { useState, useEffect, useRef } from "react";
import { HexColorPicker } from "react-colorful";
import { useColors } from "../../context/colorContext";
import { fallBackColor } from "../../const/const.jsx";

function ColorPicker({ target = "primary" }) {
  // Using useColors context to manage color state
  const { colors, setColors } = useColors();
  // State to manage the visibility of the color picker popup
  const [openPopup, setOpenPopup] = useState(false);
  const popupRef = useRef(null);
  // State to manage the color input value
  const [inputValue, setInputValue] = useState(colors[target]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setOpenPopup(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  const handleButtonClick = (e) => {
    e.stopPropagation();
    setOpenPopup(!openPopup);
  };

  const handleInputChange = (e) => {
    let newColor = e.target.value;

    newColor = newColor.replace(/[^#0-9A-Fa-f]/g, ""); // Remove non-hex characters

    if(!newColor.startsWith("#")) {
      newColor = `#${newColor}`;
    }

    if (newColor.length > 7) {
      newColor = newColor.slice(0, 7); // Limit to 7 characters (# followed by 6 hex digits)
    }
    // Update the input value state
    setInputValue(newColor);

    // Check if the new color is a valid hex color
    if (/^#[0-9A-F]{6}$/i.test(newColor)) {
      setColors((prev) => ({ ...prev, [target]: newColor }));
    }
  }
  return (
    <div className="relative">
      <div className="flex items-center bg-white rounded-lg justify-between pl-2 w-52 border-2 border-gray-100 mx-5">
        <div
          className="h-8 w-8 rounded-2xl"
          style={{ background: colors[target] }}
        ></div>
        <input
          className="w-[80px]"
          type="text"
          placeholder={fallBackColor}
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="px-4 py-2 border-gray-200 border-l-2 "
          onClick={handleButtonClick}
        >
          <img
            className="w-6 min-w-6"
            src="/img/SVGs/dropper.svg"
            alt="Color picker icon"
          />
        </button>
      </div>
      {openPopup && (
        <div
          ref={popupRef}
          className="z-[1050] fixed md:absolute left-1/2 md:left-auto mt-2 p-4 rounded-lg shadow-w-xl bg-white border-1 border-gray-200"
        >
          <p className="text-gray-950">Select a color</p>
          <HexColorPicker
            color={colors[target]}
            onChange={(newColor) => {
              setColors((prev) => ({ ...prev, [target]: newColor }));
              setOpenPopup(true);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default ColorPicker;
