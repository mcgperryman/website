import { ReactNode } from 'react';
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

  return (
    <>
      <SEO title={pageTitle} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
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
