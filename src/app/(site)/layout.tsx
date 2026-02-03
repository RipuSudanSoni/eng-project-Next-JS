import Header from "@/components/Header/Header";
import BrandingBar from "@/components/BrandingBar/BrandingBar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="main-wrapper">
      <BrandingBar />
      <Header />
      <div className="scrollable-container">
        {children}
      </div>
    </div>
  );
}
