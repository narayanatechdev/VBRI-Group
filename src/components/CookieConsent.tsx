
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import CookiePreferences from './CookiePreferences';

const CookieConsent = () => {
  const { 
    hasConsented, 
    preferences, 
    acceptAll, 
    acceptNecessaryOnly, 
    savePreferences 
  } = useCookieConsent();
  
  const [showPreferences, setShowPreferences] = useState(false);
  const [hasRejected, setHasRejected] = useState(false);

  // Don't render if user has already consented
  if (hasConsented) return null;

  const handleReject = () => {
    setHasRejected(true);
  };

  // If user has rejected cookies, show blocking message
  if (hasRejected) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Access Restricted
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            To access this website, you must accept our cookie policy. Please accept cookies to continue browsing.
          </p>
          <div className="space-y-3">
            <Button
              onClick={acceptAll}
              className="w-full bg-blue-400 hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              ACCEPT COOKIES
            </Button>
            <Button
              variant="outline"
              onClick={() => setShowPreferences(true)}
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 px-6 rounded-lg transition-colors"
            >
              MANAGE PREFERENCES
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 relative">
          {/* Close button */}
          <button
            onClick={handleReject}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Cookie Consent
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              To provide you with the best experience, we use technologies like cookies to store and/or access device information. Consenting to these technologies will allow us to process data such as browsing behavior or unique IDs on this site. Not consenting or withdrawing consent may adversely affect certain features and functions.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <div className="flex gap-3">
              <Button
                onClick={acceptAll}
                className="flex-1 bg-blue-400 hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                ACCEPT
              </Button>
              <Button
                variant="outline"
                onClick={handleReject}
                className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 px-6 rounded-lg transition-colors"
              >
                REJECT
              </Button>
            </div>
            
            <Button
              variant="outline"
              onClick={() => setShowPreferences(true)}
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 px-6 rounded-lg transition-colors"
            >
              MANAGE PREFERENCES
            </Button>
          </div>

          {/* Cookie Policy Link */}
          <div className="text-center mt-6">
            <Link 
              to="/cookie-policy" 
              className="text-blue-400 hover:text-blue-500 text-sm underline transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      <CookiePreferences
        isOpen={showPreferences}
        onClose={() => setShowPreferences(false)}
        preferences={preferences}
        onSave={savePreferences}
      />
    </>
  );
};

export default CookieConsent;
