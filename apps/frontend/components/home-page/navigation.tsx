"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, MenuIcon } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

const Navigation = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const isResizing = useRef(false);
  const sidebarRef = useRef<HTMLElement | null>(null);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hasClientMounted, setHasClientMounted] = useState(false);


  useEffect(() => {
    setHasClientMounted(true);
  }, []);

  useEffect(() => {
    if (!hasClientMounted) return;

    if (isMobile) collapse();
    else resetWidth();

    setIsCollapsed(isMobile);
  }, [isMobile, hasClientMounted]);

  const handleOnMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();
    isResizing.current = true;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isResizing.current) return;

    let newWidth = event.clientX;
    newWidth = Math.max(240, Math.min(480, newWidth));

    if (sidebarRef.current && navbarRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`;
      navbarRef.current.style.setProperty("left", `${newWidth}px`);
      navbarRef.current.style.setProperty(
        "width",
        `calc(100% - ${newWidth}px)`
      );
    }
  };

  const handleMouseUp = () => {
    isResizing.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const resetWidth = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? "100%" : "240px";
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0" : "calc(100% - 240px)"
      );
      navbarRef.current.style.setProperty("left", isMobile ? "100%" : "240px");

      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const collapse = () => {
    if (navbarRef.current && sidebarRef.current) {
      setIsResetting(true);
      setIsCollapsed(true);

      sidebarRef.current.style.width = "0px";
      navbarRef.current.style.setProperty("width", "100%");
      navbarRef.current.style.setProperty("left", "0%");

      setTimeout(() => setIsResetting(false), 300);
    }
  };

  if (!hasClientMounted) return null;

  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "group flex flex-col h-screen bg-muted/40 dark:bg-muted/15 z-[10000] overflow-y-auto relative w-64 text-muted-foreground shrink-0",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "w-0"
        )}
      >
        <div
          className={cn(
            "opacity-0 group-hover:opacity-100 absolute top-3 right-2 hover:bg-muted w-6 h-6 rounded-sm",
            isMobile && "opacity-100"
          )}
          onClick={collapse}
          role="button"
        >
          <ChevronLeft className="h-6 w-6" />
        </div>
        <h1 className="font-bold">Action Items</h1>
        <h2 className="mt-4">Documents</h2>

        <div
          onMouseDown={handleOnMouseDown}
          onClick={resetWidth}
          className="opacity-0 group-hover:opacity-100 transition cursor-ew-resize absolute h-full w-1 right-0 top-0 bg-muted-foreground/15 "
        />
      </aside>

      <div
        ref={navbarRef}
        className={cn(
          "absolute z-[10000] top-0",
          isResetting && "transition-all ease-in-out duration-300",
          isCollapsed && "left-60 w-[calc(100% - 240px)]",
          isMobile && "left-0 w-full"
        )}
      >
        <nav className="bg-transparent px-3 py-2 w-full">
          {isCollapsed && (
            <MenuIcon
              onClick={resetWidth}
              role="button"
              className="h-6 w-6 text-muted-foreground"
            />
          )}
        </nav>
      </div>
    </>
  );
};

export default Navigation;
