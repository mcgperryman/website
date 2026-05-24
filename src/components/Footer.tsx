export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <p style={{ margin: 0, color: 'var(--muted)', fontSize: '0.95rem' }}>
          © 2026 Matt Perryman
        </p>
        <ul className="footer-list">
          <li>
            <a href="mailto:contact@mperryman.com">contact@mperryman.com</a>
          </li>
          <li>
            <a href="https://github.com/mcgperryman" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/matthew-perryman" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
