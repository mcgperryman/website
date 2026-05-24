import { Link } from 'react-router-dom';
import nav from '../data/nav';

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        <Link to="/" className="site-brand">
          Matt Perryman
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <Link key={item.href} to={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
