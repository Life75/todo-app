"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Workspace from "./workspace/Workspace";
import { useSidebarStore } from "@/stores/useSidebarStore";

export function Sidebar() {
  const { isCollapsed, toggle } = useSidebarStore();

  return (
    <div
      className={`flex min-h-full flex-col bg-base-200 p-4 transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex items-center pb-2 mb-4">
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
          {isCollapsed ? (
            <ChevronRight className="size-5" />
          ) : (
            <ChevronLeft className="size-5" />
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-opacity duration-300 ${
          isCollapsed ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <ul className="flex flex-col gap-y-3 w-full">
            <li>
              <button className="flex items-center gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  className="rotate-180"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
                  />
                </svg>
                <span>Templates</span>
              </button>
            </li>
            <li>
              <button className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                </svg>
                <span>Import</span>
              </button>
            </li>
            <li>
              <button className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                </svg>
                <span>Trash</span>
              </button>
            </li>
          </ul>

          <div className="mt-6">
          <Workspace />
        </div>
      </div>
    </div>
  );
}
