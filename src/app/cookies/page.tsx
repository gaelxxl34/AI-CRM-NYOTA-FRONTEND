'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-gray-100 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <motion.div
                className="flex items-center space-x-2 sm:space-x-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/logo.png"
                  alt="Nyota Logo"
                  width={120}
                  height={40}
                  className="w-auto h-8 sm:h-10"
                  priority
                />
              </motion.div>
            </Link>
            <Link
              href="/"
              className="text-gray-600 hover:text-burgundy-700 transition-colors cursor-pointer font-medium"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Content */}
      <main className="pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-burgundy-800 to-gray-900 bg-clip-text text-transparent">
              Cookie Policy
            </h1>
            <p className="text-gray-500 mb-8">Last updated: October 19, 2025</p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our Services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nyota Fusion AI uses cookies and similar technologies for the following purposes:
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Essential Cookies</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  These cookies are necessary for our website to function properly. They enable core functionality such as:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Authentication and account access</li>
                  <li>Security and fraud prevention</li>
                  <li>Load balancing and performance</li>
                  <li>Session management</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Performance Cookies</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  These cookies help us understand how visitors interact with our website by collecting anonymous information:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Pages visited and time spent on pages</li>
                  <li>Navigation paths and user flows</li>
                  <li>Error messages and technical issues</li>
                  <li>Website performance metrics</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Functional Cookies</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  These cookies allow us to remember your preferences and provide enhanced features:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Language preferences</li>
                  <li>User interface customizations</li>
                  <li>Recent searches and filters</li>
                  <li>Display preferences</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Analytics Cookies</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use analytics services to improve our website and Services:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Google Analytics to understand user behavior</li>
                  <li>Conversion tracking for marketing campaigns</li>
                  <li>A/B testing to optimize user experience</li>
                  <li>Feature usage statistics</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Marketing Cookies</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  With your consent, we use marketing cookies to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Show relevant advertisements</li>
                  <li>Track advertising campaign effectiveness</li>
                  <li>Personalize content based on interests</li>
                  <li>Retarget visitors with relevant offers</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Session Cookies</h4>
                  <p className="text-gray-600 text-sm">
                    Temporary cookies that expire when you close your browser. Used for essential functionality and security.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Persistent Cookies</h4>
                  <p className="text-gray-600 text-sm">
                    Cookies that remain on your device for a set period. Used to remember your preferences and improve user experience.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Third-Party Cookies</h4>
                  <p className="text-gray-600 text-sm">
                    Cookies set by external services like analytics providers and advertising networks.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use the following third-party services that may set cookies:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li><strong>Google Analytics:</strong> Website analytics and performance monitoring</li>
                  <li><strong>Facebook Pixel:</strong> Advertising and conversion tracking</li>
                  <li><strong>LinkedIn Insights:</strong> Professional audience analytics</li>
                  <li><strong>Intercom:</strong> Customer support and messaging</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Browser Settings</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You can control cookies through your browser settings:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Block all cookies</li>
                  <li>Accept only first-party cookies</li>
                  <li>Delete existing cookies</li>
                  <li>Set preferences for specific websites</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Opt-Out Options</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To opt out of specific tracking:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li><strong>Google Analytics:</strong> Use the Google Analytics Opt-out Browser Add-on</li>
                  <li><strong>Advertising:</strong> Visit Network Advertising Initiative opt-out page</li>
                  <li><strong>Do Not Track:</strong> Enable "Do Not Track" in your browser settings</li>
                </ul>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-4">
                  <p className="text-amber-800 text-sm">
                    <strong>Note:</strong> Blocking or deleting cookies may affect your ability to use certain features of our website and Services.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Retention</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Different cookies have different retention periods:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Preference cookies:</strong> Retained for up to 1 year</li>
                  <li><strong>Analytics cookies:</strong> Retained for up to 2 years</li>
                  <li><strong>Marketing cookies:</strong> Retained for up to 90 days</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Consent</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  By continuing to use our website, you consent to our use of cookies as described in this policy. You can withdraw your consent at any time by adjusting your browser settings or contacting us.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have questions about our use of cookies, please contact us:
                </p>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> contact@nyotainnovation.com</p>
                  <p className="text-gray-700 mb-2"><strong>Phone:</strong> <a href="tel:+256749117690" className="hover:text-burgundy-700 transition-colors">+256 749 117 690</a></p>
                  <p className="text-gray-700"><strong>Address:</strong> Kampala, Uganda</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
