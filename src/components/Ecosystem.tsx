
import { Beaker, Building, Leaf } from "lucide-react";

const Ecosystem = () => {
  const pillars = [
    {
      icon: <Beaker className="w-7 h-7 text-primary" />,
      title: "Sustainable Instruments & Custom Laboratory Architecture",
      description: "We provide precision lab instruments and offer expert consulting to design, build, and scale laboratories tailored to scientific, educational, or industrial needs—built on low-carbon, future-ready principles."
    },
    {
      icon: <Building className="w-7 h-7 text-primary" />,
      title: "Global Scientific Engagement", 
      description: "Our international conferences, exhibitions, and innovation summits bring together researchers, institutions, and policymakers to advance knowledge, build networks, and foster scientific impact."
    },
    {
      icon: <Leaf className="w-7 h-7 text-primary" />,
      title: "Strategic Sustainability Advisory",
      description: "We support organizations in developing net-zero strategies, climate adaptation plans, and circular economy models—bridging science and policy for measurable environmental transformation."
    }
  ];

  return (
    <section id="ecosystem" className="py-20 lg:py-28 section-light">
      <div className="section-padding">
        <div className="container-max">
          {/* Header */}
          <div className="mb-16 max-w-3xl">
            <h2 className="font-semibold mb-6 text-foreground">
              An Integrated Ecosystem of Science & Sustainability
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We deliver a unified platform that combines advanced instrumentation, scientific collaboration, and sustainability expertise—designed to support the full innovation cycle from laboratory development to climate-smart transformation.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="scientific-card">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-semibold mb-4 text-foreground leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
