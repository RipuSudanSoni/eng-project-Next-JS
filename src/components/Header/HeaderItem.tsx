"use client";

import Link from "next/link";
import DropdownPortal from "./DropdownPortal";
import { HeaderMenuItem } from "@/data/headerMenu";
import { usePathname } from "next/navigation";
import { useRef } from "react";

interface Props {
  item: HeaderMenuItem;
  isMobile: boolean;
  activeDropdown: string | null;
  anchorRect: DOMRect | null;
  openDropdown: (key: string, rect: DOMRect) => void;
  closeDropdown: () => void;
  onNavigate: (topic?: string) => void;
}

export default function HeaderItem({
  item,
  isMobile,
  activeDropdown,
  anchorRect,
  openDropdown,
  closeDropdown,
  onNavigate,
}: Props) {
  const hasDropdown = !!item.children?.length;

  const pathname = usePathname();

  /* ✅ Active logic: parent OR child active */
  const isChildActive = item.children?.some((child) => pathname === child.href);

  const isActive = pathname === item.href || isChildActive;

  const itemRef = useRef<HTMLLIElement>(null);

  const scrollIntoView = () => {
    itemRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <li
      className={`nav-item ${hasDropdown ? "nav-item-with-dropdown" : ""} ${
        isActive ? "active-nav" : ""
      }`}
      onMouseLeave={!isMobile ? closeDropdown : undefined}
    >
      <Link
        href={item.href}
        className="nav-link"
        onClick={() => {
          onNavigate(item.sidebarTopic);
          scrollIntoView();
        }}
      >
        {item.label}
      </Link>

      {hasDropdown && (
        <>
          <button
            className="dropdown-toggle"
            onClick={(e) =>
              openDropdown(item.key, e.currentTarget.getBoundingClientRect())
            }
            onMouseEnter={
              !isMobile ? (e) => openDropdown(
                      item.key,
                      e.currentTarget.getBoundingClientRect(),
                    )
                : undefined
            }
          >
            ▾
          </button>

          {activeDropdown === item.key && (
            <DropdownPortal
              anchorRect={anchorRect}
              onClose={closeDropdown}
              isMobile={isMobile}
            >
              <ul className="dropdown-menu">
                {item.children!.map((child) => {
                  const isChildCurrent = pathname === child.href;

                  return (
                    <li ref={itemRef} key={child.key}>
                      <Link
                        href={child.href}
                        className={isChildCurrent ? "active-child" : ""}
                        onClick={() => {
                          onNavigate(item.sidebarTopic);
                          scrollIntoView();
                        }}
                      >
                        {child.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </DropdownPortal>
          )}
        </>
      )}
    </li>
  );
}
