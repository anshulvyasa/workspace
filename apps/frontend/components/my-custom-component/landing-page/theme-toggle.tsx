"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

function ThemeToggle(): React.ReactNode {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9"
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
    >
      <Sun className="h-4 w-4 scale-100 transition-all  dark:scale-0" />
      <Moon className="absolute h-4 w-4 scale-0 transition-all dark:scale-100" />
      <span className="sr-only">toggle</span>
    </Button>
  );
}

export default ThemeToggle;
