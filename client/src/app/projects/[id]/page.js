"use client";

import styles from "./Project.module.css";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Table from "@/components/Table";
import Button from "@/components/Button";
import { useAppContext } from "@/context/AppContext";
import AddTaskForm from "@/components/AddTaskForm";
import { useDB } from "@/context/DBContext";

const Project = () => {
  const { id } = useParams();
  const { autoDB, projects, autoProjects, tasks, autoTasks } = useDB();
  const project = autoDB
    ? autoProjects.find((p) => p.id === Number(id))
    : projects.find((p) => p.id === Number(id));

  const taskList = autoDB
    ? autoTasks.filter((t) => t.project_id === Number(id))
    : tasks.filter((t) => t.project_id === Number(id));

  return (
    <>
      <h1 className={styles.projectHeader}>{project.name}</h1>

      <AddTaskForm project_id={id} />
      <Table data={taskList} />

      <div className={styles.manageJobButtons}>
        {project.is_active && <Button title={"Mark Complete"} size="90%" />}
        <Button title={"Generate PDF"} secondary size="90%" />
      </div>
    </>
  );
};

export default Project;
