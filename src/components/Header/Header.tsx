// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import DropdownPortal from "./DropdownPortal";
// import { useMobileSidebar } from "@/context/MobileSidebarContext";
// import "./Header.css";

// export default function Header() {
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);
//   const [isMobile, setIsMobile] = useState(false);

//  const { setOpen, setActiveTopic } = useMobileSidebar();

//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth <= 1024);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);

//   const openDropdown = (key: string, rect: DOMRect) => {

//   setActiveDropdown(key);      // ✅ dropdown open
//   setAnchorRect(rect);
// };

// const handleHeaderNavigation = (topic: string) => {
//   closeDropdown();
//   openSidebarFor(topic);
// };

// const openSidebarFor = (topic: string) => {
//   if (isMobile) {
//     setActiveTopic(topic);
//     setOpen(true);
//   }
// };

//   const closeDropdown = () => {
//     setActiveDropdown(null);
//     setAnchorRect(null);
//   };

//   return (
//     <>
//       <header className="header">
//         <nav className="nav">
//           <div className="nav-scroll">
//             <ul className="nav-list">
//               <li className="nav-item">
//                 <Link href="/">Home</Link>
//               </li>

//               {/* Op2 */}
//               <li
//                 className="nav-item nav-item-with-dropdown"
//                 onMouseLeave={!isMobile ? closeDropdown : undefined}
//               >
//                 {/* Parent link – ALWAYS navigates */}

//                 <Link
//                   href="/grammar"
//                   className="nav-link"
//                   onClick={() => openSidebarFor("grammar")}
//                 >
//                   Grammar
//                 </Link>

//                 {/* Dropdown toggle */}
//                 <button
//                   className="dropdown-toggle"
//                   aria-label="Open grammar menu"
//                   onClick={(e) =>
//                     openDropdown(
//                       "grammar",
//                       e.currentTarget.getBoundingClientRect()
//                     )
//                   }
//                   onMouseEnter={
//                     !isMobile
//                       ? (e) =>
//                           openDropdown(
//                             "grammar",
//                             e.currentTarget.getBoundingClientRect()
//                           )
//                       : undefined
//                   }
//                 >
//                   ▾
//                 </button>

//                 {activeDropdown === "grammar" && (
//                   <DropdownPortal
//                     anchorRect={anchorRect}
//                     onClose={closeDropdown}
//                     isMobile={isMobile}
//                   >
//                     <ul className="dropdown-menu">
//                       <li>
//                         <Link href="/grammar/noun" onClick={() => handleHeaderNavigation("grammar")}>
//                           Noun
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/grammar/verb" onClick={() => handleHeaderNavigation("grammar")}>
//                           Verb
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/grammar/tense" onClick={() => handleHeaderNavigation("grammar")}>
//                           Tense
//                         </Link>
//                       </li>
//                     </ul>
//                   </DropdownPortal>
//                 )}
//               </li>

//               {/* Op3 – same pattern */}
//               <li
//                 className="nav-item nav-item-with-dropdown"
//                 onMouseLeave={!isMobile ? closeDropdown : undefined}
//               >
//                 <Link
//                   href="/options-A"
//                   className="nav-link"
//                   onClick={() => handleHeaderNavigation("optionA")}
//                 >
//                   Option A
//                 </Link>

//                 <button
//                   className="dropdown-toggle"
//                   aria-label="Open Option A menu"
//                   onClick={(e) =>
//                     openDropdown(
//                       "Option A",
//                       e.currentTarget.getBoundingClientRect()
//                     )
//                   }
//                   onMouseEnter={
//                     !isMobile
//                       ? (e) =>
//                           openDropdown(
//                             "Option A",
//                             e.currentTarget.getBoundingClientRect()
//                           )
//                       : undefined
//                   }
//                 >
//                   ▾
//                 </button>

//                 {activeDropdown === "Option A" && (
//                   <DropdownPortal
//                     anchorRect={anchorRect}
//                     onClose={closeDropdown}
//                     isMobile={isMobile}
//                   >
//                     <ul className="dropdown-menu">
//                       <li>
//                         <Link
//                           href="/options-A/options-A1"
//                          onClick={() => handleHeaderNavigation("optionA")}
//                         >
//                           Option A1
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           href="/options-A/options-A2"
//                           onClick={() => handleHeaderNavigation("optionA")}
//                         >
//                           Option A2
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           href="/options-A/options-A3"
//                           onClick={() => handleHeaderNavigation("optionA")}
//                         >
//                           Option A3
//                         </Link>
//                       </li>
//                     </ul>
//                   </DropdownPortal>
//                 )}
//               </li>

//               <li className="nav-item">
//                 <Link href="/options4">Option 4</Link>
//               </li>
//               <li className="nav-item">
//                 <Link href="/options5">Option 5</Link>
//               </li>
//               <li className="nav-item">
//                 <Link href="/options6">Option 6</Link>
//               </li>
//               <li className="nav-item">
//                 <Link href="/options7">Option 7</Link>
//               </li>
//               <li className="nav-item">
//                 <Link href="/options8">Option 8</Link>
//               </li>

//               <li className="nav-item">
//                 <Link href="/options9">Option 9</Link>
//               </li>
//               <li className="nav-item">
//                 <Link href="/options10">Option 10</Link>
//               </li>
//               <li className="nav-item">
//                 <Link href="/options11">Option 11</Link>
//               </li>
//               <li className="nav-item">
//                 <Link href="/options12">Option 12</Link>
//               </li>
//               <li className="nav-item">
//                 <Link href="/options13">Option 13</Link>
//               </li>

//               <li className="nav-item">
//                 <Link href="/options14">Option 14</Link>
//               </li>
//               <li className="nav-item">
//                 <Link href="/options15">Option 15</Link>
//               </li>
//               <li className="nav-item">
//                 <Link href="/options16">Option 16</Link>
//               </li>
//               <li className="nav-item">
//                 <Link href="/options17">Option 17</Link>
//               </li>
//               <li className="nav-item">
//                 <Link href="/options18">Option 18</Link>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </header>

//       {/* {isMobile && (
//         <div className="mobile-toggle-bar">
//           <button onClick={() => setOpen(true)}>☰ Open Menu</button>
//         </div>
//       )}*/}

//       {isMobile && (
//         <div className="mobile-toggle-container">
//           <button
//             className="mobile-menu-btn"
//             onClick={() => setOpen(true)}
//             aria-label="Open Sidebar"
//           >
//             ☰
//           </button>
//         </div>
//       )}
//     </>
//   );
// }

















"use client";

import { useEffect, useState } from "react";
import { headerMenu } from "@/data/headerMenu";
import HeaderItem from "./HeaderItem";
import { useMobileSidebar } from "@/context/MobileSidebarContext";
import "./Header.css";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const { setOpen, setActiveTopic } = useMobileSidebar();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const openDropdown = (key: string, rect: DOMRect) => {
    setActiveDropdown(key);
    setAnchorRect(rect);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
    setAnchorRect(null);
  };

  const handleNavigate = (topic?: string) => {
    closeDropdown();
    if (topic && isMobile) {
      setActiveTopic(topic);
      setOpen(true);
    }
  };

  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="nav-scroll">
            <ul className="nav-list">
              {headerMenu.map((item) => (
                <HeaderItem
                  key={item.key}
                  item={item}
                  isMobile={isMobile}
                  activeDropdown={activeDropdown}
                  anchorRect={anchorRect}
                  openDropdown={openDropdown}
                  closeDropdown={closeDropdown}
                  onNavigate={handleNavigate}
                />
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* ===== MOBILE SIDEBAR TOGGLE ===== */}
      {isMobile && (
        <div className="mobile-toggle-container">
          <button
            className="mobile-menu-btn"
            onClick={() => setOpen(true)}
            aria-label="Open Sidebar"
          >
            ☰
          </button>
        </div>
      )}
    </>
  );
}
