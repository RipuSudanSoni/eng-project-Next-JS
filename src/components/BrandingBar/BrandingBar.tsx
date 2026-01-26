import "./BrandingBar.css"

export default function BrandingBar() {
  return (
    <div className="branding-bar">
      <div className="branding-left">
        <img src="/image/logo/englishbhoot.jpg" alt="EnglishBhoot Logo" className="branding-logo" />
        <span className="branding-text">
          EnglishBhoot – अब English बोलने का डर ख़त्म!
        </span>
      </div>

      <div className="branding-right">
        {/* Future: search / social icons */}
        {/* <span>🔍</span> */}
      </div>
    </div>
  );
}
