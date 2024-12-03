import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  // Define your state variables here

  // const [dumyValue, setdumyValue] = useState(second)

  return (
    <StateContext.Provider
    // Pass your state variables here
    //   value={{
    //     dumyValue,
    //     setdumyValue,
    //   }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
