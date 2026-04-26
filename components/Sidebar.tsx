"use client";

import React from "react";
import { useSidebarStore } from "@/stores/useSidebarStore";

type SidebarProps = {
  children: React.ReactNode;
};

export function Sidebar({ children }: SidebarProps) {
  const { isCollapsed, toggle } = useSidebarStore();

  return (
    <div
      className={`relative flex h-screen flex-col bg-base-100/30 dark:bg-[#181818]/30  backdrop-blur-sm border-r transition-all duration-300 ${
        isCollapsed ? "w-13" : "w-64"
      }`}
    >
      {/* TOP EDGE FADE */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-black/10 dark:from-black/30 to-transparent z-20" />

      {/* BOTTOM EDGE FADE */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-black/10 dark:from-black/30 to-transparent z-20" />

      {/* MAIN CONTENT LAYER */}
      <div className="relative z-10 flex h-full flex-col">
        
        {/* HEADER */}
        <div className="flex items-center justify-center h-13 px-3 shrink-0">
          <h2
            className={`text-2xl font-bold tracking-tight transition-opacity duration-300 whitespace-nowrap overflow-hidden ${
              isCollapsed ? "opacity-0 w-0" : "opacity-100 flex-1"
            }`}
          >
            Notes
          </h2>

          <button
            onClick={toggle}
            className="btn btn-ghost btn-sm btn-square shrink-0 hidden lg:flex"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-layout-sidebar"
              viewBox="0 0 16 16"
            >
              <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5-1v12h9a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM4 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2z" />
            </svg>
          </button>
        </div>

        {/* BODY */}
        <div
          className={`flex-1 min-h-0 transition-opacity duration-300 ${
            isCollapsed ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          {children}
        </div>

      </div>
    </div>
  );
}

