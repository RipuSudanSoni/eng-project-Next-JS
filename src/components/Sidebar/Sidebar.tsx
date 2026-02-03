"use client";

import { sidebarConfig, SidebarItem } from "@/data/sidebar";
import { useMobileSidebar } from "@/context/MobileSidebarContext";
import { useEffect, useState } from "react";
import "./sidebar.css";

type Section = keyof typeof sidebarConfig;

export type Page =| "leftsidebar_grammar" | "leftsidebar_startSpeaking";

export default function Sidebar({
  section,
  page,
}: {
  section: Section;
  page: Page;
}) {
  const { setOpen } = useMobileSidebar();

  const [clickedId, setClickedId] = useState("");
  const [scrollId, setScrollId] = useState("");

  // ✅ SAFE assertion (TypeScript limitation workaround)
  const items = (sidebarConfig as Record<
    Section,
    Record<Page, SidebarItem[]>
  >)[section][page];

  // Scroll spy
  useEffect(() => {
    if (!items || !items.length) return;

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
      {items.map((item) => {
        const isActive =
          clickedId === item.id || scrollId === item.id;

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => {
              setClickedId(item.id);
              setOpen(false);
            }}
            className={`sidebar-item ${
              isActive ? "active-scroll" : ""
            }`}
          >
            <span className="indicator" />
            {item.label}
          </a>
        );
      })}
    </div>
  );
}

