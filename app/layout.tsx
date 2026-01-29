import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider"; // Import your new wrapper
import { Sidebar } from '../components/Sidebar';
import { HeaderBar } from '../components/Headerbar';

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Main Container: Flex row to put Sidebar next to Content Stack */}
          <div className="flex h-screen w-full bg-background text-foreground overflow-hidden">
            
            {/* 1. Sidebar: Fixed width, full height of the viewport */}
            <Sidebar  />

            {/* 2. Content Stack: Flex column for Header + Main Page */}
            <div className="flex flex-col flex-1 min-w-0">
              
              <HeaderBar />

              {/* 3. Main Content: Takes remaining height and handles scrolling */}
              <main className="flex-1 overflow-y-auto p-6">
                {children}
              </main>
              
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}