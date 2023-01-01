import { createContext, useContext } from "react";

const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const colors = {
    white: "#fff",
    light: "rgba(255, 255, 255, 0.1)",
    light2: "rgba(255, 255, 255, 0.5)",
    black: "#00000",
    bg: "#F2F5F9",
    blue: "#5569FF",
    blueTwo: "#191970",
    blueThree: "#5048e5",

    lightBlue: "#ADD8E6",
    green: "#10b981",
    greenTwo: "#4bc0c0",
    red: "#ff6384",
  };
  return (
    <ColorContext.Provider value={{ colors }}>{children}</ColorContext.Provider>
  );
};

export const useColorContext = () => {
  return useContext(ColorContext);
};

export { ColorProvider };
