/* eslint-disable react/prop-types */
import { createContext, useContext, useRef } from "react";
const scrollContext = createContext();

function ScrollProvider({ children }) {
  const ref = useRef(null);
  function handleScroll() {
    ref?.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <scrollContext.Provider value={{ ref, handleScroll }}>
      {children}
    </scrollContext.Provider>
  );
}

function useScroll() {
  const context = useContext(scrollContext);

  return context;
}

export { ScrollProvider, useScroll };
