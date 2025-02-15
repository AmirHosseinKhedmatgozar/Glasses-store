/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const repeatrContext = createContext();

function RepeaterProvider({ children }) {
  const [repeater, setRepeater] = useState(false);

  return (
    <repeatrContext.Provider
      value={{
        repeater,
        setRepeater,
      }}
    >
      {children}
    </repeatrContext.Provider>
  );
}

function useRepeater() {
  const context = useContext(repeatrContext);
  return context;
}

export { RepeaterProvider, useRepeater };
