// export type SidebarItem = {
//   id: string;
//   label: string;
// };

// export type SidebarConfig = {
//   grammar: {
//     leftsidebar_grammar: SidebarItem[];
//     leftsidebar_noun: SidebarItem[];
//     leftsidebar_verb: SidebarItem[];
//   };
//   startSpeaking: {
//     leftsidebar_startSpeaking: SidebarItem[];
//   };
// };

// export const sidebarConfig: SidebarConfig = {
//   grammar: {
//     /* =====================
//        GRAMMAR
//     ===================== */
//     leftsidebar_grammar: [
//       { id: "what-is-grammar", label: "What is Grammar?" },
//       { id: "importance-of-grammar", label: "Importance of Grammar" },
//       { id: "types-of-grammar", label: "Types of Grammar" },
//       { id: "grammar-in-spoken-english", label: "Grammar in Spoken English" },
//       { id: "basic-grammar-topics", label: "Basic Grammar Topics" },
//       { id: "common-grammar-mistakes", label: "Common Grammar Mistakes" },
//       { id: "practice-section", label: "Practice Section" },
//       { id: "faq", label: "FAQ" },
//       { id: "conclusion", label: "Conclusion" },
//     ],

//     /* =====================
//        NOUN
//     ===================== */
//     leftsidebar_noun: [
//       { id: "what-is-a-noun", label: "What is a Noun?" },
//       { id: "importance-of-noun-in-spoken-english", label: "Importance of Noun" },
//       { id: "use-of-noun-in-spoken-english", label: "Use of Noun in Speaking" },
//       { id: "types-of-noun", label: "Types of Noun" },
//       { id: "rules-of-using-noun", label: "Rules of Using Noun" },
//       { id: "common-mistakes", label: "Common Mistakes" },
//       { id: "practice-section", label: "Practice Section" },
//       { id: "faq", label: "FAQ" },
//       { id: "conclusion", label: "Conclusion" },
//     ],

//     /* =====================
//        VERB
//     ===================== */
//     leftsidebar_verb: [
//       { id: "what-is-a-verb", label: "What is a Verb?" },
//       { id: "importance-of-verb-in-spoken-english", label: "Importance of Verb" },
//       { id: "use-of-verb-in-spoken-english", label: "Use of Verb in Speaking" },
//       { id: "types-of-verb", label: "Types of Verb" },
//       { id: "verb-forms", label: "Verb Forms (V1, V2, V3)" },
//       { id: "helping-verbs", label: "Helping Verbs" },
//       { id: "common-verb-mistakes", label: "Common Mistakes" },
//       { id: "practice-section", label: "Practice Section" },
//       { id: "faq", label: "FAQ" },
//       { id: "conclusion", label: "Conclusion" },
//     ],
//   },

//   /* =====================
//      START SPEAKING
//   ===================== */
//   startSpeaking: {
//     leftsidebar_startSpeaking: [
//       { id: "introduction", label: "Introduction" },
//       { id: "daily-use-sentences", label: "Daily Use Sentences" },
//       { id: "how-to-start-speaking", label: "How to Start Speaking" },
//       { id: "common-mistakes", label: "Common Mistakes" },
//     ],
//   },
// } as const;









// export type SidebarItem = {
//   id: string;
//   label: string;
// };

// export type SidebarConfig = {
//   [section: string]: {
//     sidebar: SidebarItem[];
//   };
// };

// export const sidebarConfig: SidebarConfig = {
//   grammar: {
//     sidebar: [
//       /* GRAMMAR */
//       { id: "what-is-grammar", label: "What is Grammar?" },
//       { id: "importance-of-grammar", label: "Importance of Grammar" },
//       { id: "types-of-grammar", label: "Types of Grammar" },
//       { id: "grammar-in-spoken-english", label: "Grammar in Spoken English" },
//       { id: "basic-grammar-topics", label: "Basic Grammar Topics" },
//       { id: "common-grammar-mistakes", label: "Common Grammar Mistakes" },
//       { id: "practice-section", label: "Practice Section" },
//       { id: "faq", label: "FAQ" },
//       { id: "conclusion", label: "Conclusion" },

//       /* NOUN */
//       { id: "what-is-a-noun", label: "What is a Noun?" },
//       { id: "importance-of-noun-in-spoken-english", label: "Importance of Noun" },
//       { id: "use-of-noun-in-spoken-english", label: "Use of Noun in Speaking" },
//       { id: "types-of-noun", label: "Types of Noun" },
//       { id: "rules-of-using-noun", label: "Rules of Using Noun" },
//       { id: "common-mistakes", label: "Common Mistakes" },
//       { id: "practice-section", label: "Practice Section" },
//       { id: "faq", label: "FAQ" },
//       { id: "conclusion", label: "Conclusion" },

//       /* VERB */
//       { id: "what-is-a-verb", label: "What is a Verb?" },
//       { id: "importance-of-verb-in-spoken-english", label: "Importance of Verb" },
//       { id: "use-of-verb-in-spoken-english", label: "Use of Verb in Speaking" },
//       { id: "types-of-verb", label: "Types of Verb" },
//       { id: "verb-forms", label: "Verb Forms (V1, V2, V3)" },
//       { id: "helping-verbs", label: "Helping Verbs" },
//       { id: "common-verb-mistakes", label: "Common Mistakes" },
//       { id: "practice-section", label: "Practice Section" },
//       { id: "faq", label: "FAQ" },
//       { id: "conclusion", label: "Conclusion" },

//       /* TENSE */
//       { id: "what-is-tense", label: "What is Tense"},
//       { id: "present-tense", label: "Present Tense" },
//       { id: "present-simple-use", label: "Present Simple Tense" },
//       { id: "past-tense", label: "Past Tense" },
//       { id: "future-tense", label: "Future Tense" },
//       { id: "types", label: "Types of Verbs" },
//       { id: "examples", label: "Examples" },
//     ],
//   },

//   startSpeaking: {
//     sidebar: [
//       { id: "introduction", label: "Introduction" },
//       { id: "daily-use-sentences", label: "Daily Use Sentences" },
//       { id: "how-to-start-speaking", label: "How to Start Speaking" },
//     ],
//   },

//   // 🔥 future ready
//   vocabulary: {
//     sidebar: [
//       { id: "daily-words", label: "Daily Words" },
//       { id: "phrasal-verbs", label: "Phrasal Verbs" },
//     ],
//   },
// };
