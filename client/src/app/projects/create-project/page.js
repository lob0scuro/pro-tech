"use client";

import Button from "@/components/Button";
import styles from "./CreateProject.module.css";
import React, { useState } from "react";
import { useAppContext } from "@/context/AppContext";
import { ProjectTable } from "@/lib/db";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useDB } from "@/context/DBContext";

const CreateProject = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const { user } = useAppContext();
  const { setProjects, setAutoProjects, autoDB } = useDB();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      id: Math.floor(Math.random() * 1000) + 1,
      name: name,
      address: address,
      user_id: user.id,
      total_project_value: 0,
      total_billed_to_date_customer: 0,
      total_billed_to_date_subs: 0,
      is_active: true,
    };
    autoDB
      ? setAutoProjects((prev) => [...prev, formData])
      : setProjects((prev) => [...prev, formData]);
    toast.success("New project added!");
    router.push("/");
  };

  return (
    <>
      <h1 className={styles.newProjectHeader}>New Project</h1>
      <form className={styles.createProjectForm} onSubmit={handleSubmit}>
        <div>
          <label>Project Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <Button title={"Submit"} type="submit" />
      </form>
    </>
  );
};

export default CreateProject;
