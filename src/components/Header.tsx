
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
      setShowScrollTop(scrollPosition > 400);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerHeight = 80;
      const elementPosition = contactSection.offsetTop;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-sm border-b border-border' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="section-padding">
          <div className="container-max">
            <nav className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo */}
              <div className="flex items-center flex-shrink-0">
                <Link to="/" onClick={scrollToTop}>
                  <img 
                    src="/lovable-uploads/fc0ab8fc-8347-4eff-980d-eaded49c9e3a.png" 
                    alt="Vbri Group Logo" 
                    className="h-10 lg:h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </Link>
              </div>

              {/* CTA Button */}
              <div className="flex-shrink-0">
                <Button 
                  className="scientific-button"
                  onClick={scrollToContact}
                >
                  Get in Touch
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Scroll to Top */}
      {showScrollTop && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-white" />
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
