
'use client';

import { createContext, useContext, useState } from 'react';

type SidebarContextType = {
  open: boolean;
  setOpen: (v: boolean) => void;
  activeTopic: string | null;
  setActiveTopic: (v: string) => void;
};

const MobileSidebarContext = createContext<SidebarContextType | null>(null);

export function MobileSidebarProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  return (
    <MobileSidebarContext.Provider
      value={{ open, setOpen, activeTopic, setActiveTopic }}
    >
      {children}
    </MobileSidebarContext.Provider>
  );
}

export function useMobileSidebar() {
  const ctx = useContext(MobileSidebarContext);
  if (!ctx) {
    throw new Error('useMobileSidebar must be used inside MobileSidebarProvider');
  }
  return ctx;
}
