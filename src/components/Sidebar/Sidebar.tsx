"use client";

import { sidebarConfig } from "@/data/sidebar";
import { useMobileSidebar } from "@/context/MobileSidebarContext";
import "./sidebar.css";

type Section = "grammar";
type Page = "leftsidebar_grammar" | "option_A";

export default function Sidebar({
  section,
  page,
}: {
  section: Section;
  page: Page;
}) {
  const { setOpen, activeTopic } = useMobileSidebar();

  let currentSection: Section = section;
  let currentPage: Page = page;

  if (activeTopic === "grammar") {
    currentSection = "grammar";
    currentPage = "leftsidebar_grammar";
  }

  if (activeTopic === "optionA") {
    currentSection = "grammar"; // change if needed
    currentPage = "option_A";
  }

  // if (activeTopic === "options7") {
  //   currentSection = "grammar"; // change if needed
  //   currentPage = "options7";
  // }

  const items = sidebarConfig[currentSection][currentPage];

  return (
    <div className="sidebar">
      {items.map((item) => (
        <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
          {item.label}
        </a>
      ))}
    </div>
  );
}
