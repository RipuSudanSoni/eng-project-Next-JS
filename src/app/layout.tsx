import "./globals.css";
import "../styles/markdown.css";
import { MobileSidebarProvider } from "@/context/MobileSidebarContext";
import ErrorBoundary from "@/components/ErrorHandling/ErrorBoundary";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary>
          <MobileSidebarProvider>
            {children}
          </MobileSidebarProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
