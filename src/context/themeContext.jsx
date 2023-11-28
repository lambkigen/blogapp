"use client";

import { createContext, useEffect, useState } from "react";

//calling the context Func
export const ThemeContext = createContext();

//creating the key and value
const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

//providing the context to children
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

  const Toggle  = () => {
    setTheme(theme == "light" ? "dark" : "light")
  }

  useEffect(() => {
    localStorage.setItem("theme", theme)
  },[theme])

  return <ThemeContext.Provider value={{theme, Toggle}}>{children}</ThemeContext.Provider>;
};
