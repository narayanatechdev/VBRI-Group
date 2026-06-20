
import { useState, useEffect } from 'react';

export type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
};

export const useCookieConsent = () => {
  const [hasConsented, setHasConsented] = useState<boolean | null>(null);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Check if user has already given consent
    const consentData = localStorage.getItem('vbri-cookie-consent');
    if (consentData) {
      const parsed = JSON.parse(consentData);
      setHasConsented(true);
      setPreferences(parsed.preferences);
    } else {
      setHasConsented(false);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    
    localStorage.setItem('vbri-cookie-consent', JSON.stringify({
      timestamp: new Date().toISOString(),
      preferences: allAccepted,
    }));
    
    setPreferences(allAccepted);
    setHasConsented(true);
  };

  const acceptNecessaryOnly = () => {
    const necessaryOnly: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    
    localStorage.setItem('vbri-cookie-consent', JSON.stringify({
      timestamp: new Date().toISOString(),
      preferences: necessaryOnly,
    }));
    
    setPreferences(necessaryOnly);
    setHasConsented(true);
  };

  const savePreferences = (newPreferences: CookiePreferences) => {
    const finalPreferences = { ...newPreferences, necessary: true };
    
    localStorage.setItem('vbri-cookie-consent', JSON.stringify({
      timestamp: new Date().toISOString(),
      preferences: finalPreferences,
    }));
    
    setPreferences(finalPreferences);
    setHasConsented(true);
  };

  const resetConsent = () => {
    localStorage.removeItem('vbri-cookie-consent');
    setHasConsented(false);
    setPreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    });
  };

  return {
    hasConsented,
    preferences,
    acceptAll,
    acceptNecessaryOnly,
    savePreferences,
    resetConsent,
  };
};
