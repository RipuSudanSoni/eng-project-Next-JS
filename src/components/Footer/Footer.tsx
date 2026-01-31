import "./FooterStyle.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">
          © {new Date().getFullYear()} EnglishBhoot. सभी अधिकार सुरक्षित।
        </p>

        <p className="footer-subtext">
          अब English बोलने का डर ख़त्म!
        </p>
      </div>
    </footer>
  );
}
