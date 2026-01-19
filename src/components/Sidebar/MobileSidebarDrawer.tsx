"use client";
import { useMobileSidebar } from "@/context/MobileSidebarContext";
import Sidebar from "./Sidebar";
import "./mobileSidebar.css";

export default function MobileSidebarDrawer() {
  const { open, setOpen } = useMobileSidebar();

  return (
    <>
      {open && (
        <div className="mobile-backdrop" onClick={() => setOpen(false)} />
      )}

      <div className={`mobile-sidebar ${open ? "open" : ""}`}>
        <Sidebar section="grammar" page="leftsidebar_grammar" />
      </div>
    </>
  );
}
