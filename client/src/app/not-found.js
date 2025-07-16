"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>404 - Page Not Found</h1>
      <p>Redirecting you back home...</p>
    </div>
  );
};
