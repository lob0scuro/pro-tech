"use client";

import styles from "./Project.module.css";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Table from "@/components/Table";
import Button from "@/components/Button";
import { useAppContext } from "@/context/AppContext";
import AddTaskForm from "@/components/AddTaskForm";

const Project = () => {
  const { id } = useParams();
  const { user, appProjects, projectTasks } = useAppContext();
  const project = appProjects.find((p) => p.id === Number(id));
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    if (project) {
      const getTasks = projectTasks.filter((t) => t.project_id === project.id);
      setTasks(getTasks);
    }
  }, [project]);

  return (
    <>
      <h1 className={styles.projectHeader}>{project.name}</h1>

      <AddTaskForm project_id={project.id} />
      <Table data={tasks} />

      <div className={styles.manageJobButtons}>
        {project.is_active && <Button title={"Mark Complete"} size="90%" />}
        <Button title={"Generate PDF"} secondary size="90%" />
      </div>
    </>
  );
};

export default Project;
