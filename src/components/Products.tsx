
import { Button } from "@/components/ui/button";
import { Microscope, Zap, Shield } from "lucide-react";

const Products = () => {
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

  const services = [
    {
      icon: <Zap className="h-7 w-7 text-primary" />,
      title: "ECONORD SERIES",
      description: "Energy-efficient ultrasonic cleaners, gene transduction devices, and freeze dryers for modern research environments."
    },
    {
      icon: <Microscope className="h-7 w-7 text-primary" />,
      title: "OPTICS DIVISION",
      description: "High-resolution imaging systems including confocal and fluorescence microscopes for life science research."
    },
    {
      icon: <Shield className="h-7 w-7 text-primary" />,
      title: "CONSULTING SERVICES",
      description: "Expert consulting and turnkey lab development tailored to institutional and industrial research needs."
    }
  ];

  return (
    <section id="instruments" className="py-20 lg:py-28 section-white">
      <div className="section-padding">
        <div className="container-max">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-28">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-primary/5"></div>
                <img 
                  src="/lovable-uploads/86bb034f-1c80-47f7-b72c-25053e44ccb9.png" 
                  alt="Laboratory Team Working with Precision Instruments" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="font-semibold text-foreground">
                PRECISION IN EVERY INSTRUMENT
              </h2>
              <div className="space-y-5 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  <strong className="text-foreground">Scandinavian Scientific Instruments® (SSI)</strong>, a division of Vbri Group, delivers advanced laboratory technology rooted in Scandinavian precision, sustainability, and performance.
                </p>
                <p className="text-lg leading-relaxed">
                  Our <strong className="text-foreground">EcoNord Series</strong> offers intelligent, energy-efficient instruments—including ultrasonic cleaners, gene transduction devices, and freeze dryers—designed to support modern, low-carbon research environments.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button 
                  className="scientific-button"
                  onClick={() => window.open('https://soptics.se/', '_blank')}
                >
                  Visit Website
                </Button>
                <Button 
                  variant="outline"
                  className="scientific-button-outline"
                  onClick={scrollToContact}
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                OUR ADVANCED SOLUTIONS
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Cutting-edge laboratory instruments designed for precision, sustainability, and superior performance
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="scientific-card">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-4 text-foreground">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
