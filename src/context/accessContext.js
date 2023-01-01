import { useContext, createContext, useState } from "react";

const AcceseContext = createContext();

const AccessProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <AcceseContext.Provider value={{ token, setToken }}>
      {children}
    </AcceseContext.Provider>
  );
};

export const useAccessContext = () => {
  return useContext(AcceseContext);
};

export { AccessProvider };
