
import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import QueryProvider from "@/components/QueryProvider";
import { Sidebar } from '../components/Sidebar';
import { Toaster } from "sonner";
import SidebarToggle from '../components/sidebar/SidebarToggle';



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



function toggleSideBar() {
}

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
              <nav className="navbar w-full bg-base-300">
               <SidebarToggle/>
                <div className="px-4 text-lg font-semibold">Headbar</div>
              </nav>
              {/* Page content */}
              <main className="flex-1 overflow-y-auto p-6">
                {children}
              </main>
            </div>

            <div className="drawer-side">
              <label htmlFor="sidebar-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <Sidebar />
            </div>
          </div>
        </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}