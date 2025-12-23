"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const set = (checked: boolean) => {
    if (!mounted) return;
    setTheme(checked ? "dark" : "light");
  };

  return { mounted, theme, set };
};
