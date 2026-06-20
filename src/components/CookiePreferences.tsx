
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CookiePreferences as CookiePrefsType } from '@/hooks/useCookieConsent';

interface CookiePreferencesProps {
  isOpen: boolean;
  onClose: () => void;
  preferences: CookiePrefsType;
  onSave: (preferences: CookiePrefsType) => void;
}

const CookiePreferences = ({ isOpen, onClose, preferences, onSave }: CookiePreferencesProps) => {
  const [localPreferences, setLocalPreferences] = useState<CookiePrefsType>(preferences);

  const handleSave = () => {
    onSave(localPreferences);
    onClose();
  };

  const handleToggle = (type: keyof CookiePrefsType) => {
    if (type === 'necessary') return; // Can't disable necessary cookies
    
    setLocalPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-foreground">
            Cookie Preferences
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Manage your cookie preferences. You can change these settings at any time.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Necessary Cookies */}
          <div className="flex items-center justify-between space-x-4">
            <div className="flex-1">
              <h4 className="text-sm font-medium text-foreground">Necessary Cookies</h4>
              <p className="text-xs text-muted-foreground">
                Essential for the website to function properly. Cannot be disabled.
              </p>
            </div>
            <Switch 
              checked={true} 
              disabled 
              className="opacity-50"
            />
          </div>

          {/* Analytics Cookies */}
          <div className="flex items-center justify-between space-x-4">
            <div className="flex-1">
              <h4 className="text-sm font-medium text-foreground">Analytics Cookies</h4>
              <p className="text-xs text-muted-foreground">
                Help us understand how visitors interact with our website.
              </p>
            </div>
            <Switch 
              checked={localPreferences.analytics}
              onCheckedChange={() => handleToggle('analytics')}
            />
          </div>

          {/* Functional Cookies */}
          <div className="flex items-center justify-between space-x-4">
            <div className="flex-1">
              <h4 className="text-sm font-medium text-foreground">Functional Cookies</h4>
              <p className="text-xs text-muted-foreground">
                Remember your preferences and settings.
              </p>
            </div>
            <Switch 
              checked={localPreferences.functional}
              onCheckedChange={() => handleToggle('functional')}
            />
          </div>

          {/* Marketing Cookies */}
          <div className="flex items-center justify-between space-x-4">
            <div className="flex-1">
              <h4 className="text-sm font-medium text-foreground">Marketing Cookies</h4>
              <p className="text-xs text-muted-foreground">
                Used to deliver personalized advertisements.
              </p>
            </div>
            <Switch 
              checked={localPreferences.marketing}
              onCheckedChange={() => handleToggle('marketing')}
            />
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className="scandinavian-button flex-1"
          >
            Save Preferences
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CookiePreferences;
