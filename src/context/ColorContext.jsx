import { createContext, useState, useContext } from "react";

export const ColorContext = createContext();

export function ColorProvider({ children }) {
  const [defaultColor, setDefaultColor] = useState("#fef08a");

  return (
    <ColorContext.Provider value={{ defaultColor, setDefaultColor }}>
      {children}
    </ColorContext.Provider>
  );
}

export function useColor() {
  return useContext(ColorContext);
}
