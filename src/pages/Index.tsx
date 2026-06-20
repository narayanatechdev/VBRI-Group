
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Ecosystem from '@/components/Ecosystem';
import Products from '@/components/Products';
import Events from '@/components/Events';
import Sustainability from '@/components/Sustainability';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Ecosystem />
      <Products />
      <Events />
      <Sustainability />
      <Contact />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
