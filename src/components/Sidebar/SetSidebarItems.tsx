"use client";

import { useEffect } from "react";
import { useMobileSidebar } from "@/context/MobileSidebarContext";

interface Props {
  items: { id: string; label: string }[];
}

export default function SetSidebarItems({ items }: Props) {
  const { setSidebarItems } = useMobileSidebar();

  useEffect(() => {
    setSidebarItems(items);
  }, [items, setSidebarItems]);

  return null;
}