import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import { MobileSidebarProvider } from '@/context/MobileSidebarContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MobileSidebarProvider>
          <Header />
          {children}
        </MobileSidebarProvider>
      </body>
    </html>
  );
}
