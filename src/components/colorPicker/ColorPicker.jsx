import { useState, useEffect, useRef } from "react";
import { HexColorPicker } from "react-colorful";
import { useColors } from "../../context/colorContext";
import { fallBackColor } from "../../const/const.jsx";

function ColorPicker({ target = "primary" }) {
  const { colors, setColors } = useColors();
  const [openPopup, setOpenPopup] = useState(false);
  const popupRef = useRef(null);

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

  return (
    <div className="relative">
      <div className="flex items-center bg-white rounded-lg justify-between pl-2 w-52 border-2 border-gray-100 mx-5">
        <div
          className="h-8 w-8 rounded-2xl"
          style={{ background: colors[target] }}
        ></div>
        <input
          className="w-[70px]"
          type="text"
          placeholder={fallBackColor}
          value={colors[target]}
          onChange={(newColor) => {
            setColors((prev) => ({ ...prev, [target]: newColor }));
          }}
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
