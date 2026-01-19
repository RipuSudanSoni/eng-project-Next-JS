"use client";

import Link from "next/link";
import DropdownPortal from "./DropdownPortal";
import { HeaderMenuItem } from "@/data/headerMenu";

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

  return (
    <li
      className={`nav-item ${hasDropdown ? "nav-item-with-dropdown" : ""}`}
      onMouseLeave={!isMobile ? closeDropdown : undefined}
    >
      <Link
        href={item.href}
        className="nav-link"
        onClick={() => onNavigate(item.sidebarTopic)}
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
              !isMobile
                ? (e) =>
                    openDropdown(
                      item.key,
                      e.currentTarget.getBoundingClientRect()
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
                {item.children!.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      onClick={() => onNavigate(item.sidebarTopic)}
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </DropdownPortal>
          )}
        </>
      )}
    </li>
  );
}
