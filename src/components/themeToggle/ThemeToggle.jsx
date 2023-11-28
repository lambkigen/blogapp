"use client";

import Image from "next/image";
import styles from "./themetoggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";

const ThemeToggle = () => {
  const { theme, Toggle } = useContext(ThemeContext);

  console.log(theme);

  return (
    <div
      className={styles.container}
      onClick={Toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <Image src="/moon.png" alt="moon" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, backgroundColor: "#0f172a" }
            : { right: 0, backgroundColor: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="sun" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
