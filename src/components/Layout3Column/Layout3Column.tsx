import Footer from "@/components/Footer/Footer";

export default function Layout3Column({ sidebar, content }: any) {
  return (
    <div className="main-layout-container">
      
      {/* बायां हिस्सा: फिक्स रहेगा */}
      <aside className="sidebar-col-fixed">
        {sidebar}
      </aside>

      {/* बीच का हिस्सा: केवल यही स्क्रॉल होगा */}
      <main className="content-scroll-area">
        
        {/* कंटेंट यहाँ है */}
        <div className="content-inner-wrapper">
          {content}
        </div>

        {/* <div className="full-width-footer">
           <Footer />
        </div> */}


         <div className="full-width-footer">
           <Footer />
        </div>
      </main>
             

      {/* दायां हिस्सा: विज्ञापन (फिक्स) */}
      <aside className="ads-col-fixed">
        <div style={{ padding: "20px", textAlign: "center", color: "#64748b" }}>
          Ads Area
        </div>
      </aside>
    </div>
    
  );
}