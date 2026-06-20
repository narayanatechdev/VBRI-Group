
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToEcosystem = () => {
    const ecosystemSection = document.getElementById('ecosystem');
    if (ecosystemSection) {
      ecosystemSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 lg:pt-24 overflow-hidden">
      {/* Scientific background design */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary to-white"></div>
      
      {/* Abstract geometric shapes */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] opacity-[0.12]">
        <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="300" cy="300" r="280" stroke="hsl(var(--primary))" strokeWidth="1.5" />
          <circle cx="300" cy="300" r="220" stroke="hsl(var(--primary))" strokeWidth="1.5" />
          <circle cx="300" cy="300" r="160" stroke="hsl(var(--primary))" strokeWidth="1.5" />
          <circle cx="300" cy="300" r="100" stroke="hsl(var(--primary))" strokeWidth="1.5" />
          <line x1="20" y1="300" x2="580" y2="300" stroke="hsl(var(--primary))" strokeWidth="1" />
          <line x1="300" y1="20" x2="300" y2="580" stroke="hsl(var(--primary))" strokeWidth="1" />
        </svg>
      </div>
      
      {/* Molecular-style dots */}
      <div className="absolute top-32 left-[10%] w-4 h-4 rounded-full bg-primary/20"></div>
      <div className="absolute top-48 left-[15%] w-3 h-3 rounded-full bg-primary/15"></div>
      <div className="absolute top-64 left-[8%] w-5 h-5 rounded-full bg-primary/12"></div>
      <div className="absolute bottom-32 right-[20%] w-4 h-4 rounded-full bg-primary/20"></div>
      <div className="absolute bottom-48 right-[25%] w-3 h-3 rounded-full bg-primary/15"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }}></div>
      
      {/* Content */}
      <div className="relative z-10 section-padding w-full">
        <div className="container-max">
          <div className="max-w-3xl">
            <h1 className="font-semibold mb-8 text-foreground leading-tight">
              Committed to Excellence<br />
              in Science, Innovation,<br />
              and Sustainability
            </h1>
            
            <Button 
              className="scientific-button mt-4"
              onClick={scrollToEcosystem}
            >
              Explore Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
