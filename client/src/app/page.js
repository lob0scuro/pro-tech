"use client";

import styles from "./Home.module.css";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import clsx from "clsx";
import { useDB } from "@/context/DBContext";
import { useAppContext } from "@/context/AppContext";
import ProjectList from "@/components/ProjectList";

const Home = () => {
  const router = useRouter();
  const { autoDB, setAutoDB } = useDB();
  const { testMode, toggleMode } = useAppContext();

  const toggleIt = () => {
    setAutoDB(!autoDB);
    toggleMode();
  };
  return (
    <>
      <div className={styles.modeSwitch}>
        <label
          className={clsx(
            styles.switchLabel,
            autoDB ? styles.testMode : styles.liveMode
          )}
        >
          <span>{autoDB ? "Test Mode" : "Live Mode"}</span>
          <input type="checkbox" onChange={toggleIt} />
        </label>
      </div>
      <Button
        title={"+ Create New Project"}
        size={"80%"}
        onClick={() => router.push("/projects/create-project")}
      />
      <br />
      <ProjectList />
    </>
  );
};

export default Home;
