// export default function Layout3Column({ sidebar, content }: any) {
//   return (
//     <div style={{ display: "flex", gap: "20px" }}>
//       <div style={{ width: "20%" }}>{sidebar}</div>
//       <div style={{ width: "60%" }}>{content}</div>
//       <div style={{ width: "20%" }}>Ads Area</div>
//     </div>
//   );
// }


export default function Layout3Column({ sidebar, content }: any) {
  return (
    <div className="layout">
      <div className="sidebar-col">{sidebar}</div>
      <div className="content-col">{content}</div>
      <div className="ads-col">Ads Area</div>
    </div>
  );
}
