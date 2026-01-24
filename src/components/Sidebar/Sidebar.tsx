"use client";

import { sidebarConfig } from "@/data/sidebar";
import { useMobileSidebar } from "@/context/MobileSidebarContext";
import { useEffect, useState } from "react";
import "./sidebar.css";

type Section = "grammar";
type Page = "leftsidebar_grammar" | "option_A" | "option7" | "option4";

export default function Sidebar({ section, page }: { section: Section; page: Page }) {
  const { setOpen, activeTopic } = useMobileSidebar();

  const [clickedId, setClickedId] = useState<string>("");
  const [scrollId, setScrollId] = useState<string>("");

  let currentSection = section;
  let currentPage = page;

  if (activeTopic === "grammar") currentPage = "leftsidebar_grammar";
  if (activeTopic === "optionA") currentPage = "option_A";
  if (activeTopic === "option7") currentPage = "option7";
  if (activeTopic === "option4") currentPage = "option4";

  const items = sidebarConfig[currentSection][currentPage];

  // Scroll spy logic
  useEffect(() => {
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
        const isClicked = clickedId === item.id;
        const isScroll = scrollId === item.id && !isClicked;

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => {
              setClickedId(item.id);
              setOpen(false);
            }}
            className={`sidebar-item 
              ${isClicked ? "active-clicked" : ""}
              ${isScroll ? "active-scroll" : ""}
            `}
          >
            <span className="indicator" />
            {item.label}
          </a>
        );
      })}
    </div>
  );
}
