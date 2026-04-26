
import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import QueryProvider from "@/components/QueryProvider";
import { Sidebar } from '../components/Sidebar';
import { Toaster } from "sonner";
import SidebarToggle from '../components/sidebar/SidebarToggle';
import Workspace from "@/features/workspace/Workspace";
import Link from "next/link";



const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Notes",
  description: "Note taking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} ${inter.className} antialiased`}>
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
          <div className="drawer lg:drawer-open"> 
            <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
              {/* Navbar */}
              <nav className="navbar w-full border-b-[0.5px]">
               <SidebarToggle/>
                <div className="px-4 text-lg font-semibold">All Notes (template) </div>
              </nav>
              {/* Page content */}
              <main className="flex-1 overflow-y-auto p-6">
                {children}
              </main>
            </div>

            <div className="drawer-side">
              <label htmlFor="sidebar-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <Sidebar >
                <div className="h-full overflow-y-auto px-1">
                  <div className="flex items-center h-28">
                    <ul className="flex flex-col w-full text-md px-1">
                      <li className="hover:dark:bg-[#242424] py-2 px-1 h-11 flex items-center rounded-lg cursor-pointer">
                        <Link href="/home" className="flex items-center gap-x-2 cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                          </svg>
                          <span>Home</span>
                        </Link>
                      </li>

                      <li className="hover:dark:bg-[#242424] py-2 px-1 h-11 flex items-center rounded-lg cursor-pointer">
                        <button className="flex items-center gap-2 cursor-pointer" type="button">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.430.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.430.991l1.004.827c.424.35.534.955.260 1.430l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.750-.072-1.076.124a6.47 6.47 0 0 1-.220.128c-.331.183-.581.495-.644.869l-.213 1.281c-.090.543-.560.940-1.110.940h-2.594c-.550 0-1.019-.398-1.110-.940l-.213-1.281c-.062-.374-.312-.686-.644-.870a6.52 6.52 0 0 1-.220-.127c-.325-.196-.720-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.490l-1.297-2.247a1.125 1.125 0 0 1 .260-1.431l1.004-.827c.292-.240.437-.613.430-.991a6.932 6.932 0 0 1 0-.255c.007-.380-.138-.751-.430-.992l-1.004-.827a1.125 1.125 0 0 1-.260-1.430l1.297-2.247a1.125 1.125 0 0 1 1.370-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.220-.128.332-.183.582-.495.644-.869l.214-1.280Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
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
              </Sidebar>
            </div>
          </div>
        </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
