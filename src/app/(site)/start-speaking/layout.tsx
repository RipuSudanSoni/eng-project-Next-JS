import type { ReactNode } from "react";
import Layout3Column from "@/components/Layout3Column/Layout3Column";
import MobileSidebarDrawer from "@/components/Sidebar/MobileSidebarDrawer";
import Sidebar from "@/components/Sidebar/Sidebar";
// import SidebarLayout from "@/components/SidebarLayout";

export default function StartSpeakingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
     <MobileSidebarDrawer />
      <Layout3Column
        sidebar={<Sidebar section="startSpeaking" page="leftsidebar_startSpeaking" />}
        content={children}
      />
    </>
  );
}