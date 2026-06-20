import { useState } from 'react';
import CookiePreferences from './CookiePreferences';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import { Facebook, Linkedin } from 'lucide-react';
const Footer = () => {
  const [showCookiePreferences, setShowCookiePreferences] = useState(false);
  const {
    preferences,
    savePreferences
  } = useCookieConsent();
  const quickLinks = [{
    name: 'About',
    href: '#about'
  }, {
    name: 'Laboratory Instrument',
    href: '#instruments'
  }, {
    name: 'Conference & Events',
    href: '#events'
  }, {
    name: 'Sustainability Consultancy',
    href: '#sustainability'
  }];
  const legalLinks = [{
    name: 'Privacy Policy',
    href: '/privacy-policy'
  }, {
    name: 'Cookie Policy',
    href: '/cookie-policy'
  }];
  const socialLinks = [{
    name: 'Facebook',
    href: 'https://www.facebook.com/vbrigroup/',
    icon: Facebook
  }, {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/vbri/posts/?feedView=all',
    icon: Linkedin
  }];
  return <>
      <footer className="bg-primary text-white py-12 lg:py-16">
        <div className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
              {/* Company Info */}
              <div className="sm:col-span-2 lg:col-span-1">
                <div className="mb-5">
                  <img src="/lovable-uploads/fc0ab8fc-8347-4eff-980d-eaded49c9e3a.png" alt="Vbri Group Logo" className="h-8 w-auto brightness-0 invert" />
                </div>
                <p className="text-white/80 leading-relaxed text-sm">
                  We specialize in the development and distribution of advanced laboratory instruments, host high-impact conferences and events in science and technology, and provide expert consulting services in sustainability—focusing on climate adaptation, net-zero strategies, and the circular economy.
                </p>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
                  Contact
                </h4>
                <div className="space-y-4 text-white/80 text-sm">
                  <div>
                    <p className="font-semibold text-white">Vbri Group AB</p>
                    <p className="text-white/60">Org.nr. 556988-3787</p>
                  </div>
                  <div>
                    <p>Gammalkilsvägen 18</p>
                    <p>590 53, Ulrika, Sweden</p>
                  </div>
                  <div>
                    <p>Tel. +46 13 103 000</p>
                    <p>contact@vbrigroup.com</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
                  Quick Links
                </h4>
                <div className="space-y-3">
                  {quickLinks.map(link => <a key={link.name} href={link.href} className="text-white/80 hover:text-white transition-colors block text-sm">
                      {link.name}
                    </a>)}
                </div>
              </div>

              {/* Policies & Social */}
              <div>
                <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
                  Policies
                </h4>
                <div className="space-y-3 mb-8">
                  {legalLinks.map(link => <a key={link.name} href={link.href} className="text-white/80 hover:text-white transition-colors block text-sm">
                      {link.name}
                    </a>)}
                  <button onClick={() => setShowCookiePreferences(true)} className="text-white/80 hover:text-white transition-colors text-left text-sm">
                    Cookie Preferences
                  </button>
                </div>
                
                {/* Social Media Links */}
                <div className="flex space-x-4">
                  {socialLinks.map(social => {
                  const IconComponent = social.icon;
                  return <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label={social.name}>
                        <IconComponent size={20} />
                      </a>;
                })}
                </div>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="border-t border-white/20 mt-12 pt-8 text-center">
              <p className="text-white/60 text-sm">
                © 2014 - 2026 Vbri Group AB. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <CookiePreferences isOpen={showCookiePreferences} onClose={() => setShowCookiePreferences(false)} preferences={preferences} onSave={savePreferences} />
    </>;
};
export default Footer;