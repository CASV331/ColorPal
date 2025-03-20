import { createContext, useState, useContext } from "react";

const colorContext = createContext();

export function ColorProvider({ children }) {
  const [colors, setColors] = useState({
    primary: "#ffffff",
    secondary: "#920b0b",
  });

  return (
    <colorContext.Provider value={{ colors, setColors }}>
      {children}
    </colorContext.Provider>
  );
}

export const useColors = () => useContext(colorContext);
