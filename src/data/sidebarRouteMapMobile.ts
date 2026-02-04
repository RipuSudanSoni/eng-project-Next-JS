// import { SidebarConfig } from "./sidebar";

// type Section = keyof SidebarConfig;

// type SidebarRouteMapItem<S extends Section> = {
//   routePrefix: string;
//   section: S;
// //   page: keyof SidebarConfig[S];
// };

// export const sidebarRouteMap: SidebarRouteMapItem<any>[] = [
//   {
//     routePrefix: "/grammar",
//     section: "grammar",
//   },
//   {
//     routePrefix: "/grammar/noun",
//     section: "grammar",
//   },
//   {
//     routePrefix: "/grammar/verb",
//     section: "grammar"
//   },
//   {
//     routePrefix: "/start-speaking",
//     section: "startSpeaking",
//   },

// // 👇 future options add here only
//   // {
//   //   routePrefix: "/vocabulary",
//   //   section: "vocabulary",
//   // },

// ];




import { SidebarConfig } from "./sidebar";

type Section = keyof SidebarConfig;

export const sidebarRouteMap = [
  {
    routePrefix: "/grammar",
    section: "grammar" as Section,
  },
  {
    routePrefix: "/start-speaking",
    section: "startSpeaking" as Section,
  },

  // future
  // {
  //   routePrefix: "/vocabulary",
  //   section: "vocabulary",
  // },
];
