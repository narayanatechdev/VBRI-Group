import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Contact = () => {
  return <section id="contact" className="py-20 lg:py-28 section-light">
      <div className="section-padding">
        <div className="container-max">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-semibold mb-6 text-foreground">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to innovate together? Connect with us for inquiries, partnerships, and collaboration opportunities that drive scientific advancement.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="scientific-card h-full flex flex-col">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">Contact Information</h3>
                <p className="text-muted-foreground">We're here to help and answer any questions</p>
              </div>
              
              <div className="space-y-6 flex-1">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <a href="tel:+4613103000" className="text-lg text-foreground hover:text-primary transition-colors">
                      +46 13 103 000
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a href="mailto:contact@vbrigroup.com" className="text-lg text-foreground hover:text-primary transition-colors">
                      contact@vbrigroup.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Address</p>
                    <p className="text-lg text-foreground">
                      Gammalkilsvägen 18<br />
                      590 53 Ulrika, Sweden
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-border">
                <Button className="scientific-button w-full" onClick={() => window.location.href = 'mailto:contact@vbrigroup.com'}>
                  Send us an Email
                </Button>
              </div>
            </div>

            {/* Map */}
            <div className="scientific-card h-full flex flex-col min-h-[500px]">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Find Us</h3>
                <p className="text-muted-foreground">Located in the heart of Sweden's innovation landscape</p>
              </div>
              <div className="w-full flex-1 rounded-lg overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2036.0!2d15.5!3d58.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGammalkilsv%C3%A4gen%2018%2C%20590%2053%20Ulrika%2C%20Sweden!5e0!3m2!1sen!2sse!4v1234567890123" width="100%" height="100%" style={{
                border: 0,
                minHeight: '350px'
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Vbri Group Location - Ulrika, Sweden"></iframe>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mt-16 text-center">
            <div className="bg-primary rounded-lg p-8 lg:p-10 max-w-3xl mx-auto">
              <h4 className="text-xl font-semibold text-white mb-6">Business Hours</h4>
              <div className="grid md:grid-cols-2 gap-6 text-white/90">
                <div>
                  <p className="font-medium text-white">Monday - Friday</p>
                  <p>9:00 AM - 5:00 PM (CET)</p>
                </div>
                <div>
                  <p className="font-medium text-white">Response Time</p>
                  <p>Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;