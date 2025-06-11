"use client"
import { Select, SelectContent, SelectGroup, SelectLabel, SelectTrigger } from "@/components/ui/select";
import { SelectItem, SelectValue } from "@radix-ui/react-select";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, [])

    if (!mounted) return null;

    return (
        <Select value={theme} onValueChange={(val) => setTheme(val)}>
            <SelectTrigger className="w-[180px">
                Theme
                <SelectValue placeholder="Theme" className="text-white" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Mode</SelectLabel>
                    <SelectItem value="system">System</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="light">Light</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default ThemeSwitch;