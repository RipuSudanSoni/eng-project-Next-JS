import type { ReactNode } from "react";
import Layout3Column from "@/components/Layout3Column/Layout3Column";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function StartSpeakingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Layout3Column
        sidebar={<Sidebar section="startSpeaking" />}
        content={children}
      />
    </>
  );
}