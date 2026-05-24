import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();
  const pageTitle = getPageTitle(pathname);

  usePhoneViewportClass();

  return (
    <>
      <SEO title={pageTitle} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function usePhoneViewportClass() {
  useEffect(() => {
    const updateMode = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const shortestSide = Math.min(width, height);
      const isPhone = shortestSide <= 480 || (width <= 760 && height <= 960);

      document.body.classList.toggle('phone-mode', isPhone);
      document.body.dataset.viewportMode = isPhone ? 'phone' : 'desktop';
    };

    updateMode();
    window.addEventListener('resize', updateMode);
    window.addEventListener('orientationchange', updateMode);

    return () => {
      window.removeEventListener('resize', updateMode);
      window.removeEventListener('orientationchange', updateMode);
      document.body.classList.remove('phone-mode');
      delete document.body.dataset.viewportMode;
    };
  }, []);
}

function getPageTitle(pathname: string) {
  if (pathname === '/') {
    return undefined;
  }

  if (pathname.startsWith('/writing/')) {
    return 'Writing';
  }

  if (pathname.startsWith('/projects/')) {
    return 'Projects';
  }

  const page = pathname.split('/').filter(Boolean)[0];
  return page ? page.charAt(0).toUpperCase() + page.slice(1) : undefined;
}
