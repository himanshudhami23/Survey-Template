"use client";
import React, {useEffect, useState} from "react";
import {useTheme} from "next-themes";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { SunIcon,MoonIcon, DesktopIcon } from "@radix-ui/react-icons";
function ThemeSwitcher() {
    const {theme, setTheme}=useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect( ()=>{
        setMounted(true);
    }, []);


    if(!mounted) return null;
  return (
    <Tabs defaultValue={theme}>
        <TabsList className="border">
            <TabsTrigger className="mr-3 mt-2 ml-2" value="light" onClick={()=> setTheme("light")}>
                <SunIcon className="h-[1.2rem] w-[1.6 rem]" />
            </TabsTrigger>
            <TabsTrigger className="mr-3 " value="dark" onClick={()=> setTheme("dark")}>
                <MoonIcon className="h-[1.2rem] w-[1.2 rem] rotate-90 transition-all dark:rotate-0" />
            </TabsTrigger>
            <TabsTrigger className="mr-3" value="system" onClick={()=> setTheme("system")}>
                <DesktopIcon className="h-[1.2rem] w-[1.2 rem]" />
            </TabsTrigger>
        </TabsList>
    </Tabs>
  );
}

export default ThemeSwitcher;