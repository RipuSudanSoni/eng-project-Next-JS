import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import { MobileSidebarProvider } from "@/context/MobileSidebarContext";
import BrandingBar from "@/components/BrandingBar/BrandingBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MobileSidebarProvider>
            <BrandingBar />
            <Header />
            {children}
        </MobileSidebarProvider>
      </body>
    </html>
  );
}
