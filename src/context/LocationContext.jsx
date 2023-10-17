import { createContext, useContext, useState } from "react";

const LocationContext = createContext();

export const useLocation = () => {
  return useContext(LocationContext);
};

export const LocationContextProvider = ({ children }) => {
  const [locData, setLocData] = useState("");
  const [lockerLocationName, setLockerLocationName] = useState("");

  return (
    <LocationContext.Provider
      value={{ locData, setLocData, lockerLocationName, setLockerLocationName }}
    >
      {children}
    </LocationContext.Provider>
  );
};
