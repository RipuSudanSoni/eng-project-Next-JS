// "use client";

// import { sidebarConfig } from "@/data/sidebar";
// import { useMobileSidebar } from "@/context/MobileSidebarContext";
// import { useEffect, useState } from "react";
// import "./sidebar.css";

// type Section = keyof typeof sidebarConfig;

// export default function Sidebar({ section }: { section: Section }) {
//   const { setOpen } = useMobileSidebar();

//   const items = sidebarConfig[section].sidebar;

//   const [clickedId, setClickedId] = useState("");
//   const [scrollId, setScrollId] = useState("");

//   useEffect(() => {
//     if (!items.length) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setScrollId(entry.target.id);
//           }
//         });
//       },
//       { rootMargin: "-40% 0px -50% 0px" }
//     );

//     items.forEach((item) => {
//       const el = document.getElementById(item.id);
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, [items]);

//   return (
//     <div className="sidebar">
//       {items.map((item) => (
//         <a
//           key={item.id}
//           href={`#${item.id}`}
//           onClick={() => setOpen(false)}
//           className={`sidebar-item ${
//             scrollId === item.id ? "active-scroll" : ""
//           }`}
//         >
//           <span className="indicator" />
//           {item.label}
//         </a>
//       ))}
//     </div>
//   );
// }




// "use client";

// import { useMobileSidebar } from "@/context/MobileSidebarContext";
// import { useEffect, useState } from "react";
// import "./sidebar.css";

// // नया prop type
// interface SidebarProps {
//   items?: { id: string; label: string }[]; // ✅ Dynamic items
//   section?: string; // ❌ अब जरूरी नहीं
// }

// export default function Sidebar({ items: propItems }: SidebarProps) {
//   const { setOpen } = useMobileSidebar();
  
//   // अगर prop से items मिले तो उन्हें इस्तेमाल करें
//   // नहीं तो empty array
//   const items = propItems || [];

//   const [clickedId, setClickedId] = useState("");
//   const [scrollId, setScrollId] = useState("");

//   useEffect(() => {
//     if (!items.length) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setScrollId(entry.target.id);
//           }
//         });
//       },
//       { rootMargin: "-40% 0px -50% 0px" }
//     );

//     items.forEach((item) => {
//       const el = document.getElementById(item.id);
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, [items]);

//   return (
//     <div className="sidebar">
//       {items.map((item) => (
//         <a
//           key={item.id}
//           href={`#${item.id}`}
//           onClick={() => setOpen(false)}
//           className={`sidebar-item ${
//             scrollId === item.id ? "active-scroll" : ""
//           }`}
//         >
//           <span className="indicator" />
//           {item.label}
//         </a>
//       ))}
//     </div>
//   );
// }







"use client";

import { useMobileSidebar } from "@/context/MobileSidebarContext";
import { useEffect, useState } from "react";
import "./sidebar.css";

interface SidebarProps {
  items?: { id: string; label: string }[];
  section?: string; // ❌ Optional, अब जरूरी नहीं
}

export default function Sidebar({ items: propItems }: SidebarProps) {
  const { setOpen } = useMobileSidebar();
  
  const items = propItems || [];

  const [clickedId, setClickedId] = useState("");
  const [scrollId, setScrollId] = useState("");

  useEffect(() => {
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setScrollId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="sidebar">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={() => setOpen(false)}
          className={`sidebar-item ${
            scrollId === item.id ? "active-scroll" : ""
          }`}
        >
          <span className="indicator" />
          {item.label}
        </a>
      ))}
    </div>
  );
}