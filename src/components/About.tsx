
const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 section-white">
      <div className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div>
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                <img 
                  alt="Nordic Landscape with Swedish Flag" 
                  className="w-full h-full object-cover" 
                  style={{ objectPosition: '100% 40%' }}
                  src="/lovable-uploads/b3a8994a-397e-4e57-9d26-ccb5876363b1.png" 
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              <h2 className="font-semibold text-foreground">
                Empowering Science for a Sustainable Future
              </h2>
              
              <div className="space-y-5 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  We are a Swedish company committed to driving excellence in science, innovation, and sustainability. We operate at the intersection of cutting-edge laboratory technology, global scientific collaboration, and climate-conscious consulting.
                </p>
                
                <p className="text-lg leading-relaxed">
                  From developing advanced instruments and designing future-ready labs, to organizing international research summits and supporting the transition to net-zero — our mission is to enable a smarter, cleaner, and more connected world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
