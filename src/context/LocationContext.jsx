import { createContext, useContext, useState } from "react";

const LocationContext = createContext();

export const useLocation = () => {
  return useContext(LocationContext);
};

export const LocationContextProvider = ({ children }) => {
  const [locData, setLocData] = useState("");

  return (
    <LocationContext.Provider value={{ locData, setLocData }}>
      {children}
    </LocationContext.Provider>
  );
};
