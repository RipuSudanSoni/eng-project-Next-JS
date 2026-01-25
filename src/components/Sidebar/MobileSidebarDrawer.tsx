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
        <div className="sidebar-header">
          <span>Menu</span>
          <button
            onClick={() => setOpen(false)}
            className="close-btn"
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>

        <Sidebar section="grammar" page="leftsidebar_grammar" />
      </div>
    </>
  );
}
