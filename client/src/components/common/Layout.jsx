import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, hideNavbar = false, hideFooter = false }) => {
  const location = useLocation();

  // Auto-hide global navbar/footer on admin and provider routes
  const isAdminOrProviderRoute = location.pathname.startsWith('/admin') || location.pathname.startsWith('/provider');

  const showNavbar = !hideNavbar && !isAdminOrProviderRoute;
  const showFooter = !hideFooter && !isAdminOrProviderRoute;

  return (
    <div className="flex flex-col min-h-screen">
      {showNavbar && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;