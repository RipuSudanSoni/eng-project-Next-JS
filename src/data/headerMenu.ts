export interface HeaderMenuItem {
  key: string;
  label: string;
  href: string;
  sidebarTopic?: string;
  children?: {
    key: string;
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
      { key: "noun", label: "Noun", href: "/grammar/noun" },
      { key: "verb", label: "Verb", href: "/grammar/verb" },
      { key: "tense", label: "Tense", href: "/grammar/tense" },
    ],
  },
  {
    key: "start-speaking",
    label: "Start Speaking",
    href: "/start-speaking",
    sidebarTopic: "startSpeaking",
  },
  {
    key: "optionA",
    label: "Option A",
    href: "/options-A",
    sidebarTopic: "optionA",
    children: [
      { key: "option-A1", label: "Option A1", href: "/options-A/options-A1" },
      { key: "option-A2", label: "Option A2", href: "/options-A/options-A2" },
      { key: "option-A3", label: "Option A3", href: "/options-A/options-A3" },
    ],
  },
  {
    key: "option4",
    label: "Option 4",
    href: "/option-4",
    sidebarTopic: "option4",
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
    href: "/option-7",
    sidebarTopic: "option7",
    children: [
      { key: "option-7A", label: "Option 7A", href: "/options7/options-7A" },
      { key: "option-7B", label: "Option 7B", href: "/options-7/options-7B" },
      { key: "option-7C", label: "Option 7C", href: "/options-7/options-7C" },
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
