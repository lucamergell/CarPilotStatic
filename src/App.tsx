/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Hero } from './pages/Hero';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';

function normalizePath(pathname: string): string {
  const clean = pathname.toLowerCase().replace(/\/+$/, '') || '/';
  if (clean.includes('privacypolicy')) return '/privacypolicy';
  if (clean.includes('termsofservice')) return '/termsofservice';
  return '/';
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return normalizePath(window.location.pathname);
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      setCurrentPath(normalizePath(path));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (currentPath === '/privacypolicy') {
    return <PrivacyPolicy onNavigate={navigate} />;
  }

  if (currentPath === '/termsofservice') {
    return <TermsOfService onNavigate={navigate} />;
  }

  return <Hero onNavigate={navigate} />;
}
