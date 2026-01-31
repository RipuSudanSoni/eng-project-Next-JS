import Header from "@/components/Header/Header";
import BrandingBar from "@/components/BrandingBar/BrandingBar";
import { MobileSidebarProvider } from "@/context/MobileSidebarContext";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MobileSidebarProvider>
          <div className="main-wrapper">
            <BrandingBar />
            <Header />
            <div className="scrollable-container">
               {children}
            </div>
          </div>
        </MobileSidebarProvider>
      </body>
    </html>
  );
}