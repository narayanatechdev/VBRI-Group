import Header from '@/components/Header';
import Footer from '@/components/Footer';
const CookiePolicy = () => {
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
                  Cookie Policy
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Policy Content */}
        <section className="pb-16 lg:pb-20">
          <div className="section-padding">
            <div className="container-max">
              <div className="max-w-4xl mx-auto">
                <div className="scandinavian-card">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-sm text-muted-foreground mb-6">Last updated: 09 January 2026</p>
                    
                    <p className="text-base leading-relaxed mb-6">
                      This Cookie Policy explains how Vbri Group AB ("we", "our", or "Vbri Group") uses cookies and similar technologies on our website [www.vbrigroup.com], and your rights in relation to these in accordance with the Swedish Electronic Communications Act (LEK) and the EU General Data Protection Regulation (GDPR).
                    </p>

                    <p className="text-base leading-relaxed mb-6">
                      By continuing to use our website, you consent to the use of cookies in accordance with this policy unless you have disabled them.
                    </p>

                    <hr className="my-6 border-border" />

                    <h2 className="text-xl md:text-2xl font-semibold mb-4">1. What Are Cookies?</h2>
                    <p className="mb-3 text-base">
                      Cookies are small text files that are stored on your device (computer, tablet, smartphone) when you visit a website. They help the site function correctly, remember your preferences, and collect statistical data to improve the user experience.
                    </p>
                    <p className="mb-3 text-base">Cookies may be:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-1">
                      <li className="text-base"><strong>Session cookies</strong> – which are deleted when you close your browser</li>
                      <li className="text-base"><strong>Persistent cookies</strong> – which remain on your device until they expire or are deleted</li>
                      <li className="text-base"><strong>First-party cookies</strong> – set by our domain</li>
                      <li className="text-base"><strong>Third-party cookies</strong> – set by external services we use (e.g., analytics, embedded video)</li>
                    </ul>

                    <hr className="my-6 border-border" />

                    <h2 className="text-xl md:text-2xl font-semibold mb-4">2. Why We Use Cookies</h2>
                    <p className="mb-3 text-base">We use cookies to:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-1">
                      <li className="text-base">Ensure technical functionality and site performance</li>
                      <li className="text-base">Analyze traffic and visitor behavior to improve usability</li>
                      <li className="text-base">Remember your preferences and settings</li>
                      <li className="text-base">Personalize content where applicable</li>
                      <li className="text-base">Enable certain features such as embedded video or secure login</li>
                    </ul>

                    <hr className="my-6 border-border" />

                    <h2 className="text-xl md:text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
                    <div className="overflow-x-auto mb-6">
                      <table className="min-w-full border-collapse border border-border">
                        <thead>
                          <tr className="bg-muted/50">
                            <th className="border border-border px-4 py-2 text-left font-semibold">Type</th>
                            <th className="border border-border px-4 py-2 text-left font-semibold">Purpose</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-border px-4 py-2">Essential</td>
                            <td className="border border-border px-4 py-2">Necessary for the website to function properly</td>
                          </tr>
                          <tr className="bg-muted/25">
                            <td className="border border-border px-4 py-2">Functional</td>
                            <td className="border border-border px-4 py-2">Remember choices you make (e.g., language, preferences)</td>
                          </tr>
                          <tr>
                            <td className="border border-border px-4 py-2">Analytical</td>
                            <td className="border border-border px-4 py-2">Measure and analyze visitor behavior (e.g., Google Analytics)</td>
                          </tr>
                          <tr className="bg-muted/25">
                            <td className="border border-border px-4 py-2">Marketing</td>
                            <td className="border border-border px-4 py-2">Used for marketing purposes (only if you consent)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <hr className="my-6 border-border" />

                    <h2 className="text-xl md:text-2xl font-semibold mb-4">4. Legal Basis for Cookies</h2>
                    <p className="mb-3 text-base">
                      Under the Swedish LEK and GDPR, we must obtain your consent before using cookies that are not strictly necessary. When you visit our website, a cookie banner will ask you to allow or reject non-essential cookies.
                    </p>
                    <p className="mb-6 text-base">You may change or withdraw your consent at any time.</p>

                    <hr className="my-6 border-border" />

                    <h2 className="text-xl md:text-2xl font-semibold mb-4">5. Third-Party Cookies</h2>
                    <p className="mb-3 text-base">Some cookies on our site are provided by trusted third parties, such as:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                      <li className="text-base"><strong>Google Analytics</strong> – for traffic and usage analysis</li>
                      <li className="text-base"><strong>YouTube/Vimeo</strong> – for embedded videos</li>
                      <li className="text-base"><strong>LinkedIn or Meta (Facebook)</strong> – for social integrations or advertising</li>
                    </ul>
                    <p className="mb-6 text-base">These providers may process data according to their own privacy and cookie policies.</p>

                    <hr className="my-6 border-border" />

                    <h2 className="text-xl md:text-2xl font-semibold mb-4">6. Managing and Disabling Cookies</h2>
                    <p className="mb-3 text-base">
                      You can manage or disable cookies by adjusting the settings in your web browser. Most browsers allow you to:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                      <li className="text-base">View all stored cookies</li>
                      <li className="text-base">Block third-party cookies</li>
                      <li className="text-base">Clear all cookies upon closing the browser</li>
                      <li className="text-base">Set site-specific cookie permissions</li>
                    </ul>
                    <p className="mb-3 text-base">
                      Instructions for managing cookies are available in the support sections of most browsers, such as Google Chrome, Mozilla Firefox, Apple Safari, and Microsoft Edge.
                    </p>
                    <p className="mb-6 text-base">
                      Note that disabling some cookies may impact the functionality of our website.
                    </p>

                    <hr className="my-6 border-border" />

                    <h2 className="text-xl md:text-2xl font-semibold mb-4">7. Updates to This Policy</h2>
                    <p className="mb-6 text-base">
                      We may update this Cookie Policy to reflect changes in legislation or how we use cookies. All updates will be posted on this page with the latest revision date.
                    </p>

                    <hr className="my-6 border-border" />

                    <h2 className="text-xl md:text-2xl font-semibold mb-4">8. Contact Us</h2>
                    <p className="mb-3 text-base">If you have any questions or concerns about how we use cookies, please contact:</p>
                    <div className="mb-6">
                      <p className="mb-1 text-base"><strong>Vbri Group AB</strong></p>
                      <p className="mb-1 text-base">Org.nr: 556988-3787</p>
                      <p className="mb-1 text-base">Gammalkilsvägen 18</p>
                      <p className="mb-1 text-base">590 53 Ulrika, Sweden</p>
                      <p className="mb-1 text-base">Email: contact@vbrigroup.com</p>
                    </div>
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
export default CookiePolicy;