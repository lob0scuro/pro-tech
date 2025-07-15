"use client";

import styles from "./styles/Navbar.module.css";
import React from "react";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <h1 onClick={() => router.push("/")}>ProTech</h1>
    </header>
  );
};

export default Navbar;
