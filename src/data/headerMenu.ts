export interface HeaderMenuItem {
  key: string;
  label: string;
  href: string;
  sidebarTopic?: string;
  children?: {
    label: string;
    href: string;
  }[];
}

export const headerMenu: HeaderMenuItem[] = [
  {
    key: "home",
    label: "Home",
    href: "/",
  },
  {
    key: "grammar",
    label: "Grammar",
    href: "/grammar",
    sidebarTopic: "grammar",
    children: [
      { label: "Noun", href: "/grammar/noun" },
      { label: "Verb", href: "/grammar/verb" },
      { label: "Tense", href: "/grammar/tense" },
    ],
  },
  {
    key: "optionA",
    label: "Option A",
    href: "/options-A",
    sidebarTopic: "optionA",
    children: [
      { label: "Option A1", href: "/options-A/options-A1" },
      { label: "Option A2", href: "/options-A/options-A2" },
      { label: "Option A3", href: "/options-A/options-A3" },
    ],
  },
  {
    key: "option4",
    label: "Option 4",
    href: "/options4",
  },
  {
    key: "option5",
    label: "Option 5",
    href: "/options5",
  },
  {
    key: "option6",
    label: "Option 6",
    href: "/options6",
  },
  {
    key: "option7",
    label: "Option 7",
    href: "/options7",
    children: [
      { label: "Option 7A", href: "/options7/options-7A" },
      { label: "Option 7B", href: "/options-7/options-7B" },
      { label: "Option 7C", href: "/options-7/options-7C" },
    ],
  },
  {
    key: "option8",
    label: "Option 8",
    href: "/options8",
  },
  {
    key: "option9",
    label: "Option 9",
    href: "/options9",
  },
  {
    key: "option10",
    label: "Option 10",
    href: "/options10",
  },
  {
    key: "option11",
    label: "Option 11",
    href: "/options11",
  },
  
];
