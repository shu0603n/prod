"use client";

import { Button, Grid } from "@mui/material";
import Link from "next/link";
import styles from "./style.module.css";
import PersistentDrawerLeft from "@/components/PersistentDrawerLeft";
import HeaderComponent from "@/components/header/HeaderComponent";

export default function Home() {
  const theme = {
    colors: {
      color: "red",
    },
  };

  return (
    <main className={styles.main}>
      <HeaderComponent />
    </main>
  );
}
