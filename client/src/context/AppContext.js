"use client";

import { createContext, useContext, useState } from "react";
import { ProjectTable, TaskTable } from "@/lib/db";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 1,
    first_name: "Cameron",
    last_name: "Lopez",
    full_name: `${this.first_name} ${this.last_name}`,
    email: "cameronlopez@email.com",
    company: "Cameron Lopez A/C",
  });
  const [appProjects, setAppProjects] = useState(ProjectTable);
  const [projectTasks, setProjectTasks] = useState(TaskTable);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        appProjects,
        setAppProjects,
        projectTasks,
        setProjectTasks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
