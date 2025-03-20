import { createContext, useState, useContext } from "react";

const shuffleContext = createContext();

export function ShuffleProvider({ children }) {
  const [shuffle, setShuffle] = useState(false);

  return (
    <shuffleContext.Provider value={{ shuffle, setShuffle }}>
      {children}
    </shuffleContext.Provider>
  );
}

export const useShuffle = () => useContext(shuffleContext);
