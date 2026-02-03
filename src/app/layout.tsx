import "./globals.css";
import "../styles/markdown.css";
import { MobileSidebarProvider } from "@/context/MobileSidebarContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MobileSidebarProvider>
          {children}
        </MobileSidebarProvider>
      </body>
    </html>
  );
}
