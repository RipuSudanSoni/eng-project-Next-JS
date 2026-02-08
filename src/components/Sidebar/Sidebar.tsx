"use client";

import { useMobileSidebar } from "@/context/MobileSidebarContext";
import { useEffect, useState } from "react";
import "./sidebar.css";

interface SidebarProps {
  items?: { id: string; label: string }[];
  section?: string; // ❌ Optional, अब जरूरी नहीं
}

export default function Sidebar({ items: propItems }: SidebarProps) {
  const { setOpen, sidebarItems } = useMobileSidebar();
  
  const items = propItems || sidebarItems || [];

  const [clickedId, setClickedId] = useState("");
  const [scrollId, setScrollId] = useState("");

  useEffect(() => {
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setScrollId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="sidebar">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={() => setOpen(false)}
          className={`sidebar-item ${
            scrollId === item.id ? "active-scroll" : ""
          }`}
        >
          <span className="indicator" />
          {item.label}
        </a>
      ))}
    </div>
  );
}