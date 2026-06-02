export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="logo">
          <img className="logo-mark" src="/beTool.png" alt="beTool" />
          <span>beTool</span>
          <span className="ia-chip">IA</span>
        </div>
        <div className="footer-links">
          <a href="/cgu">CGU / CGV</a>
          <a href="/confidentialite">Confidentialité</a>
        </div>
        <div>© 2026 beTool · Agents IA autonomes pour entreprises</div>
      </div>
    </footer>
  );
}
