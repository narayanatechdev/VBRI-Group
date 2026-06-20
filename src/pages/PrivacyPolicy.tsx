import Header from '@/components/Header';
import Footer from '@/components/Footer';
const PrivacyPolicy = () => {
  return <div className="min-h-screen relative">
      {/* Global Background */}
      <div className="fixed inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-blue-50 via-white to-blue-100">
          {/* Flowing shapes */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 -left-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-10 w-80 h-80 bg-blue-300/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 right-40 w-64 h-64 bg-white/60 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-20 lg:pt-24 pb-6 lg:pb-8">
          <div className="section-padding">
            <div className="container-max">
              <div className="text-center mb-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-4 xl:text-5xl">
                  Privacy Policy
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="pb-16 lg:pb-20">
          <div className="section-padding">
            <div className="container-max">
              <div className="max-w-4xl mx-auto">
                <div className="scandinavian-card">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-sm text-muted-foreground mb-6">Last updated: 09 January 2026</p>
                    
                    <p className="text-base leading-relaxed mb-6">
                      Vbri Group AB is committed to protecting your privacy and handling your personal data in accordance with the EU General Data Protection Regulation (GDPR, Regulation (EU) 2016/679), the Swedish Data Protection Act (Dataskyddslagen 2018:218), and other applicable data protection laws. This policy outlines how we collect, process, store, and protect your personal information.
                    </p>

                    <hr className="my-6 border-border" />

                    <h2 className="text-xl md:text-2xl font-semibold mb-4">1. Data Controller</h2>
                    <div className="mb-6">
                      <p className="mb-1 text-base"><strong>Vbri Group AB</strong></p>
                      <p className="mb-1 text-base">Org.nr: 556988-3787</p>
                      <p className="mb-1 text-base">Gammalkilsvägen 18</p>
                      <p className="mb-1 text-base">590 53 Ulrika, Sweden</p>
                      <p className="mb-1 text-base">Email: contact@vbrigroup.com</p>
                      <p className="mb-3 text-base">Phone: +46 13 103 000</p>
                      <p className="text-base">Vbri Group AB is the data controller for the processing of your personal data described in this policy.</p>
                    </div>

                    <hr className="my-6 border-border" />

                    <h2 className="text-xl md:text-2xl font-semibold mb-4">2. Personal Data We Process</h2>
                    <p className="mb-3 text-base">We may collect and process the following categories of personal data:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-1">
                      <li className="text-base">Name, title, and position</li>
                      <li className="text-base">Email address and phone number</li>
                      <li className="text-base">Address and country of residence</li>
                      <li className="text-base">IP address and browser/device identifiers</li>
                      <li className="text-base">Company name and employment details</li>
                      <li className="text-base">Communication history and event participation</li>
                      <li className="text-base">Other information you voluntarily submit to us</li>
                    </ul>

                    <hr className="my-6 border-border" />

                    <h2 className="text-xl md:text-2xl font-semibold mb-4">3. Legal Basis for Processing</h2>
                    <p className="mb-3 text-base">We process your personal data based on the following legal grounds:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-1">
                      <li className="text-base"><strong>Consent</strong> – when you opt in to receive communications or register for events</li>
                      <li className="text-base"><strong>Contractual necessity</strong> – when data is required to fulfill agreements (e.g., product delivery, consultancy)</li>
                      <li className="text-base"><strong>Legal obligation</strong> – when required by law (e.g., bookkeeping)</li>
                      <li className="text-base"><strong>Legitimate interest</strong> – to provide services, improve offerings, or follow up on business communications</li>
                    </ul>

                    <hr className="my-6 border-border" />

                    <h2 className="text-xl md:text-2xl font-semibold mb-4">4. Purpose of Processing</h2>
                    <p className="mb-3 text-base">Your data may be processed for the following purposes:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-1">
                      <li className="text-base">Communicating with you about our products and services</li>
                      <li className="text-base">Fulfilling service agreements and customer support</li>
                      <li className="text-base">Managing event registrations and participation</li>
                      <li className="text-base">Marketing and sending relevant updates (with opt-out option)</li>
                      <li className="text-base">Fulfilling legal, accounting, and regulatory requirements</li>
                      <li className="text-base">Ensuring website security and functionality</li>
                    </ul>

                    <hr className="my-6 border-border" />

                    <h2 className="text-xl md:text-2xl font-semibold mb-4">5. How We Share Personal Data</h2>
                    <p className="mb-3 text-base">We may share your personal data with:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                      <li className="text-base">Trusted service providers (e.g., IT support, hosting, CRM systems, financial institutions)</li>
                      <li className="text-base">Affiliated entities within Vbri Group AB for legitimate internal purposes</li>
                      <li className="text-base">Authorities or legal entities if required by law or judicial request</li>
                    </ul>
                    <p className="mb-6 text-base">All third parties are subject to strict data processing agreements and may not use the data for their own purposes.</p>

                    <hr className="my-6 border-border" />

                    <h2 className="text-xl md:text-2xl font-semibold mb-4">6. Data Transfers Outside the EU/EEA</h2>
                    <p className="mb-3 text-base">If your data is transferred outside the EU/EEA, such transfer will only occur:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-1">
                      <li className="text-base">To countries with an adequacy decision by the European Commission</li>
                      <li className="text-base">Under standard contractual clauses approved by the European Commission</li>
                      <li className="text-base">With appropriate safeguards and legal mechanisms in place</li>
                    </ul>

                    <hr className="my-6 border-border" />

                    <h2 className="text-xl md:text-2xl font-semibold mb-4">7. Data Retention</h2>
                    <p className="mb-6 text-base">We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected or as required by law (e.g., up to 7 years for accounting records in Sweden).</p>

                    <hr className="my-6 border-border" />

                    <h2 className="text-xl md:text-2xl font-semibold mb-4">8. Your Rights Under GDPR</h2>
                    <p className="mb-3 text-base">You have the following rights:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                      <li className="text-base"><strong>Right of access</strong> – to obtain a copy of your personal data</li>
                      <li className="text-base"><strong>Right to rectification</strong> – to correct inaccurate data</li>
                      <li className="text-base"><strong>Right to erasure</strong> – to request deletion of your data ("right to be forgotten")</li>
                      <li className="text-base"><strong>Right to restrict processing</strong> – to limit data usage in certain circumstances</li>
                      <li className="text-base"><strong>Right to data portability</strong> – to receive your data in a structured, commonly used format</li>
                      <li className="text-base"><strong>Right to object</strong> – to processing based on legitimate interest or for direct marketing</li>
                      <li className="text-base"><strong>Right to withdraw consent</strong> – at any time, where processing is based on consent</li>
                    </ul>
                    <p className="mb-6 text-base">To exercise your rights, contact us at contact@vbrigroup.com. We will respond within one month in accordance with Article 12 of the GDPR.</p>

                    <hr className="my-6 border-border" />

                    <h2 className="text-xl md:text-2xl font-semibold mb-4">9. Security Measures</h2>
                    <p className="mb-3 text-base">We implement appropriate technical and organizational measures to protect your data, including:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-1">
                      <li className="text-base">Encrypted storage and transmission</li>
                      <li className="text-base">Access control and authentication procedures</li>
                      <li className="text-base">Regular audits and data minimization practices</li>
                      <li className="text-base">Staff training and confidentiality agreements</li>
                    </ul>

                    <hr className="my-6 border-border" />

                    <h2 className="text-xl md:text-2xl font-semibold mb-4">10. Cookies</h2>
                    <p className="mb-6 text-base">Our website uses cookies to ensure functionality, improve user experience, and analyze traffic. Please refer to our separate Cookie Policy for more information and your rights to accept or reject cookies.</p>

                    <hr className="my-6 border-border" />

                    <h2 className="text-xl md:text-2xl font-semibold mb-4">11. Supervisory Authority</h2>
                    <p className="mb-3 text-base">If you believe your data is being processed in violation of GDPR, you have the right to lodge a complaint with the Swedish Authority for Privacy Protection (Integritetsskyddsmyndigheten, IMY):</p>
                    <p className="mb-6 text-base">Website: <a href="https://www.imy.se" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.imy.se</a></p>

                    <hr className="my-6 border-border" />

                    <h2 className="text-xl md:text-2xl font-semibold mb-4">12. Changes to the Policy</h2>
                    <p className="mb-6 text-base">We may update this policy periodically. The latest version will always be available on our website with a timestamp indicating the last revision date.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>;
};
export default PrivacyPolicy;