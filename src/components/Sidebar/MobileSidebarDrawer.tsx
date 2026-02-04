"use client";

import { usePathname } from "next/navigation";
import { useMobileSidebar } from "@/context/MobileSidebarContext";
import Sidebar from "./Sidebar";
import { sidebarRouteMap } from "@/data/sidebarRouteMapMobile";
import "./mobileSidebar.css";

export default function MobileSidebarDrawer() {
  const { open, setOpen } = useMobileSidebar();
  const pathname = usePathname();

  // 🔍 Find matching sidebar config
  const activeSidebar = sidebarRouteMap.find((item) =>
    pathname.startsWith(item.routePrefix)
  );

  return (
    <>
      {open && (
        <div
          className="mobile-backdrop"
          onClick={() => setOpen(false)}
        />
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

        {/* ✅ One line – infinite scalability */}
        {activeSidebar && (
          <Sidebar
            section={activeSidebar.section}
          />
        )}
      </div>
    </>
  );
}
