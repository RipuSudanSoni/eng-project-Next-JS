import { SidebarConfig } from "./sidebar";
import type { Page } from "@/components/Sidebar/Sidebar";

export type SidebarRouteItem = {
  routePrefix: string;
  section: keyof SidebarConfig;
  page: Page;
};

export const sidebarRouteMap: SidebarRouteItem[] = [
  {
    routePrefix: "/grammar",
    section: "grammar",
    page: "leftsidebar_grammar",
  },
  {
    routePrefix: "/start-speaking",
    section: "startSpeaking",
    page: "leftsidebar_startSpeaking",
  },

  // 👇 future options add here only
  // {
  //   routePrefix: "/vocabulary",
  //   section: "vocabulary",
  //   page: "leftsidebar_vocabulary",
  // },
];
