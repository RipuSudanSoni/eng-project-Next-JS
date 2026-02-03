import Layout3Column from "@/components/Layout3Column/Layout3Column";
import MobileSidebarDrawer from "@/components/Sidebar/MobileSidebarDrawer";
import Sidebar from "@/components/Sidebar/Sidebar";
// import "@/styles/globalStyle.css";

export default function GrammarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MobileSidebarDrawer />
      <Layout3Column
        sidebar={<Sidebar section="grammar" page="leftsidebar_grammar" />}
        content={children}
      />
    </>
  );
}
