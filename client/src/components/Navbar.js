"use client";

import styles from "./styles/Navbar.module.css";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDB } from "@/context/DBContext";
const Navbar = () => {
  const router = useRouter();
  const { autoDB } = useDB();

  return (
    <header className={styles.header}>
      <h1 onClick={() => router.push("/")}>ProTech</h1>
      <small>({autoDB ? "Test Mode" : "Live Mode"})</small>
    </header>
  );
};

export default Navbar;
