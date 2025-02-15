/* eslint-disable react/prop-types */
import { createContext, useContext, useRef } from "react";
const ScrollContext = createContext();
function ScrollProvider({ children }) {
  const ref = useRef(null);
  function handleScroll() {
    ref?.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <ScrollContext.Provider value={{ ref, handleScroll }}>
      {children}
    </ScrollContext.Provider>
  );
}

function useScroll() {
  const context = useContext(ScrollContext);

  return context;
}

export { ScrollProvider, useScroll };
