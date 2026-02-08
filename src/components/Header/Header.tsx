"use client";

import { useEffect, useState } from "react";
import { headerMenu } from "@/data/headerMenu";
import HeaderItem from "./HeaderItem";
import { useMobileSidebar } from "@/context/MobileSidebarContext";
import "./Header.css";

// ✅ Step 1: dynamic import ऐड करें
import dynamic from 'next/dynamic';

// ✅ Step 2: MobileSidebarDrawer को dynamically import करें
const MobileSidebarDrawer = dynamic(
  () => import('@/components/Sidebar/MobileSidebarDrawer'),
  { 
    ssr: false, 
    loading: () => (
      <div style={{ display: 'none' }}>Loading sidebar...</div>
    )
  }
);

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const { open, setOpen, setActiveTopic } = useMobileSidebar();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const openDropdown = (key: string, rect: DOMRect) => {
    setActiveDropdown(key);
    setAnchorRect(rect);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
    setAnchorRect(null);
  };

  const handleNavigate = (topic?: string) => {
    closeDropdown();
    if (topic && isMobile) {
      setActiveTopic(topic);
      setOpen(true);
    }
  };

  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="nav-scroll">
            <ul className="nav-list">
              {headerMenu.map((item) => (
                <HeaderItem
                  key={item.key}
                  item={item}
                  isMobile={isMobile}
                  activeDropdown={activeDropdown}
                  anchorRect={anchorRect}
                  openDropdown={openDropdown}
                  closeDropdown={closeDropdown}
                  onNavigate={handleNavigate}
                />
              ))}
            </ul>
          </div>
        </nav>
      </header>


      <MobileSidebarDrawer />

      {/* ===== MOBILE SIDEBAR TOGGLE ===== */}
      {isMobile && (
        <div className="mobile-toggle-container">
          <button
            className={`mobile-menu-btn ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle Sidebar"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      )}
    </>
  );
}