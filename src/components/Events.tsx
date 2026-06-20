
import { Button } from "@/components/ui/button";
import { Users, Lightbulb, Globe, Trophy } from "lucide-react";

const Events = () => {
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

  const highlights = [
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Global Reach",
      description: "International conferences spanning multiple continents"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Expert Network",
      description: "Leading researchers and industry pioneers"
    },
    {
      icon: <Trophy className="h-6 w-6 text-primary" />,
      title: "Scientific Innovation",
      description: "Pioneering breakthroughs in scientific research and development"
    }
  ];

  const eventTypes = [
    {
      icon: <Lightbulb className="h-7 w-7 text-primary" />,
      title: "INNOVATION SUMMITS",
      description: "Strategic summits focusing on emerging technologies and collaborative solutions for the future."
    },
    {
      icon: <Globe className="h-7 w-7 text-primary" />,
      title: "SCIENTIFIC EXPOS",
      description: "Comprehensive exhibitions featuring the latest scientific instruments and research findings."
    },
    {
      icon: <Users className="h-7 w-7 text-primary" />,
      title: "INDUSTRY COLLABORATIONS",
      description: "Multi-day conferences bringing together researchers, industry experts, and policymakers."
    }
  ];

  return (
    <section id="events" className="py-20 lg:py-28 section-light">
      <div className="section-padding">
        <div className="container-max">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-semibold mb-6 text-foreground">
              CONNECTING SCIENCE & INDUSTRY
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We organize world-class conferences, exhibitions, and innovation summits that unite scientists, industries, and policymakers to advance global scientific progress.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-28">
            {/* Content Side */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="scientific-card space-y-6">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button 
                className="scientific-button"
                onClick={scrollToContact}
              >
                Become a Partner
              </Button>
            </div>

            {/* Image Side */}
            <div className="relative order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                <img 
                  alt="Scientific Conference with Researchers and Industry Experts" 
                  className="w-full h-full object-cover" 
                  src="/lovable-uploads/11c8f1eb-91c0-4181-a83f-a371edf614ca.jpg" 
                />
              </div>
            </div>
          </div>

          {/* Event Types */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                OUR EVENT PORTFOLIO
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From intimate workshops to large-scale international conferences
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {eventTypes.map((event, index) => (
                <div key={index} className="scientific-card">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    {event.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-4 text-foreground">
                    {event.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {event.description}
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

export default Events;
