"use client";

import Workspace from "../features/workspace/Workspace";
import { useSidebarStore } from "@/stores/useSidebarStore";

export function Sidebar() {
  const { isCollapsed, toggle } = useSidebarStore();

  return (
    <div
      className={`flex min-h-full flex-col bg-base-100 dark:bg-[#181818] border-r  transition-all duration-300 ${isCollapsed ? "w-13" : "w-64"
        }`}
    >
      <div className="flex items-center justify-center h-13 px-3 ">
        <h2
          className={`text-2xl font-bold tracking-tight transition-opacity duration-300 whitespace-nowrap overflow-hidden ${isCollapsed ? "opacity-0 w-0" : "opacity-100 flex-1"
            }`}
        >
          Notes
        </h2>
        <button
          onClick={toggle}
          className="btn btn-ghost btn-sm btn-square shrink-0 hidden lg:flex"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-layout-sidebar" viewBox="0 0 16 16">
            <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5-1v12h9a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM4 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2z" />
          </svg>
        </button>
      </div>

      <div
        className={`overflow-hidden transition-opacity duration-300 ${isCollapsed ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
      >
        <div className=" flex items-center  h-28">
          <ul className="flex flex-col w-full text-md px-1">
            <li className="hover:dark:bg-[#242424] py-2 px-1 h-11 flex items-center rounded-lg cursor-pointer">
              <button className="flex items-center gap-x-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>

                <span>Home</span>
              </button>
            </li>
            <li className="hover:dark:bg-[#242424] py-2 px-1 h-11 flex items-center rounded-lg cursor-pointer">
              <button className="flex items-center gap-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

                <span>Settings</span>
              </button>
            </li>

          </ul>
        </div>
        <div className="mt-6">
          <Workspace />
        </div>
      </div>
    </div>
  );
}
