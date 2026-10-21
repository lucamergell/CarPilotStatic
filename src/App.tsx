/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { Hero } from './pages/Hero';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';

function detectRoute(): string {
  if (typeof window === 'undefined') return '/';
  
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  const search = window.location.search.toLowerCase();
  const full = `${path} ${hash} ${search}`;

  if (full.includes('privacypolicy') || full.includes('privacy-policy') || full.includes('privacy')) {
    return '/privacypolicy';
  }
  if (full.includes('termsofservice') || full.includes('terms-of-service') || full.includes('terms') || full.includes('tos')) {
    return '/termsofservice';
  }
  return '/';
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(detectRoute);

  const updateRoute = useCallback(() => {
    setCurrentRoute(detectRoute());
  }, []);

  useEffect(() => {
    // Sync route on initial mount in case DOM loaded with specific path
    updateRoute();

    const handleLocationChange = () => {
      updateRoute();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, [updateRoute]);

  const navigate = (toPath: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', toPath);
      setCurrentRoute(toPath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (currentRoute === '/privacypolicy') {
    return <PrivacyPolicy onNavigate={navigate} />;
  }

  if (currentRoute === '/termsofservice') {
    return <TermsOfService onNavigate={navigate} />;
  }

  return <Hero onNavigate={navigate} />;
}
