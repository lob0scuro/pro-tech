"use client";

import styles from "./Home.module.css";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { appContext } from "@/context/AppContext";
import clsx from "clsx";

const Home = () => {
  const router = useRouter();
  const { appProjects } = appContext();
  const [viewActive, setViewActive] = useState(false);
  const activeJobs = appProjects.filter((p) => p.is_active === true);
  const completedJobs = appProjects.filter((p) => p.is_active === false);
  const jobView = viewActive ? activeJobs : completedJobs;
  return (
    <>
      <Button
        title={"+ Create New Project"}
        size={"80%"}
        onClick={() => router.push("/projects/create-project")}
      />
      <br />
      <div className={styles.checkBoxBlock}>
        <span>Active Jobs</span>
        <label
          className={clsx(
            styles.chiggetyCheck,
            viewActive ? styles.viewBox : styles.viewBoxInactive
          )}
        >
          <input
            type="checkbox"
            checked={viewActive}
            onChange={() => setViewActive(!viewActive)}
            className={styles.checkView}
          />
          <div className={styles.ball}></div>
        </label>
        <span>Inactive Jobs</span>
      </div>
      <div className="btn-block-verticle">
        {jobView.map(({ id, name, is_active }) => (
          <Button
            key={id}
            title={name}
            size="80%"
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

export default Home;
