
import { Button } from "@/components/ui/button";
import { Leaf, Target, Recycle } from "lucide-react";

const Sustainability = () => {
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
      icon: <Target className="h-7 w-7 text-primary" />,
      title: "NET-ZERO STRATEGIES",
      description: "Comprehensive roadmaps to achieve carbon neutrality through innovative solutions and strategic planning."
    },
    {
      icon: <Leaf className="h-7 w-7 text-primary" />,
      title: "CLIMATE ADAPTATION",
      description: "Building resilience against climate change through adaptive strategies and risk management solutions."
    },
    {
      icon: <Recycle className="h-7 w-7 text-primary" />,
      title: "CIRCULAR ECONOMY",
      description: "Transforming linear business models into circular systems that minimize waste and maximize value."
    }
  ];

  return (
    <section id="sustainability" className="py-20 lg:py-28 section-white">
      <div className="section-padding">
        <div className="container-max">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-28">
            {/* Content */}
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="font-semibold text-foreground">
                WE KNOW THE MOST ABOUT SUSTAINABILITY
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Expert consulting in climate adaptation, net-zero strategies, and circular economy planning. We support industries and communities in building a sustainable future.
              </p>
              <div className="pt-2">
                <Button 
                  className="scientific-button"
                  onClick={scrollToContact}
                >
                  Get in Touch
                </Button>
              </div>
            </div>
            
            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/dc951212-c3ab-4458-9819-f641d8570c60.png"
                  alt="Moss-covered forest landscape representing sustainability and environmental conservation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                HOW WE HELP COMPANIES
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our comprehensive approach covers every aspect of sustainable business transformation
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

export default Sustainability;
