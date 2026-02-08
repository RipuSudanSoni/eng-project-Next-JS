import "./BrandingBar.css";
import Image from "next/image";

export default function BrandingBar() {
  return (
    <div className="branding-bar">
      <div className="branding-left">
        <Image
          src="/image/logo/englishbhoot.jpg"
          alt="EnglishBhoot Logo"
          width={42}
          height={42}
          className="branding-logo"
          priority={true}
          loading="eager"
        />
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
