"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ProjectTable, TaskTable } from "@/lib/db";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 1,
    first_name: "Cameron",
    last_name: "Lopez",
    full_name: "Cameron Lopez",
    email: "cameronlopez@email.com",
    company: "Cameron Lopez A/C",
  });
  const [testMode, setTestMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (testMode) {
      root.classList.add("test-mode");
    } else {
      root.classList.remove("test-mode");
    }
  }, [testMode]);

  const toggleMode = () => setTestMode((prev) => !prev);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        testMode,
        toggleMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
