"use client";

import styles from "./styles/ProjectList.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDB } from "@/context/DBContext";
import Button from "./Button";
import clsx from "clsx";

const ProjectList = () => {
  const router = useRouter();
  const { projects, autoProjects, autoDB } = useDB();
  const [activeView, setActiveView] = useState(true);
  const projectList = autoDB ? autoProjects : projects;
  const filteredList = activeView
    ? projectList.filter((p) => p.is_active === true)
    : projectList.filter((p) => p.is_active === false);

  return (
    <>
      <div className={styles.switchBlock}>
        <span>Active Jobs</span>
        <label
          className={clsx(
            styles.switchLabel,
            activeView ? styles.activeSwitch : styles.inactiveSwitch
          )}
        >
          <input
            type="checkbox"
            className={styles.switch}
            onChange={() => setActiveView(!activeView)}
          />
          <div className={styles.ball} />
        </label>
        <span>Finished Jobs</span>
      </div>
      <div className={styles.projectBlock}>
        {filteredList?.map(({ id, name, is_active }) => (
          <Button
            key={id}
            title={name}
            style={{
              color: !is_active && "red",
              textDecoration: !is_active && "line-through",
            }}
            secondary
            onClick={() => router.push(`/projects/${id}`)}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectList;
