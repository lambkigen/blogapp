"use client";

import { ThemeContext } from "@/context/themeContext";
import { useContext, useEffect, useState } from "react";

const Themeprovider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMouted] = useState(false);

  useEffect(() => {
    setMouted(true);
  });

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};

export default Themeprovider;
