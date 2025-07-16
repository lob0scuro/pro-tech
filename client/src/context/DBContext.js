"use client";

import { createContext, useContext, useState } from "react";
import { ProjectTable, TaskTable } from "@/lib/db";

const DBContext = createContext();

export const DBProvider = ({ children }) => {
  const [autoDB, setAutoDB] = useState(true);
  const [contractors, setContractors] = useState([]);
  const [subContractors, setSubContractors] = useState([]);
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [billingWeeks, setBillingWeeks] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [approvals, setApprovals] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [autoProjects, setAutoProjects] = useState(ProjectTable);
  const [autoTasks, setAutoTasks] = useState(TaskTable);

  return (
    <DBContext.Provider
      value={{
        autoDB,
        setAutoDB,
        contractors,
        setContractors,
        subContractors,
        setSubContractors,
        projects,
        setProjects,
        tasks,
        setTasks,
        expenses,
        setExpenses,
        billingWeeks,
        setBillingWeeks,
        invoices,
        setInvoices,
        approvals,
        setApprovals,
        photos,
        setPhotos,
        autoProjects,
        setAutoProjects,
        autoTasks,
        setAutoTasks,
      }}
    >
      {children}
    </DBContext.Provider>
  );
};

export const useDB = () => useContext(DBContext);
