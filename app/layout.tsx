import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import QueryProvider from "@/components/QueryProvider";
import { Sidebar } from '../components/Sidebar';
import { Toaster } from "sonner";

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
              <nav className="navbar w-full bg-base-300">
                <label htmlFor="sidebar-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="size-5">
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M9 4v16"></path>
                    <path d="M14 10l2 2l-2 2"></path>
                  </svg>
                </label>
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