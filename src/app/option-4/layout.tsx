
import Layout3Column from "@/components/Layout3Column/Layout3Column";
import MobileSidebarDrawer from "@/components/Sidebar/MobileSidebarDrawer";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MobileSidebarDrawer />
      <Layout3Column
        sidebar={<Sidebar section="grammar" page="option4" />}
        content={children}
      />
    </>
  );
}
