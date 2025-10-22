'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-gray-500 mb-8">Last updated: October 19, 2025</p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At Nyota Fusion AI ("Nyota," "we," "us," or "our"), we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our CRM platform and services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Name, email address, and contact information</li>
                  <li>Company name and business details</li>
                  <li>Login credentials and account information</li>
                  <li>Payment and billing information</li>
                  <li>Communications and messages sent through our platform</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Usage Data</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We automatically collect certain information about your device and how you interact with our services:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>IP address, browser type, and device information</li>
                  <li>Pages visited, features used, and time spent on our platform</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Log data and analytics information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Provide, maintain, and improve our CRM services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Analyze usage patterns and optimize user experience</li>
                  <li>Detect, prevent, and address technical issues and fraud</li>
                  <li>Comply with legal obligations and enforce our terms</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing and Disclosure</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We do not sell your personal information. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We implement industry-standard security measures to protect your data:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>SOC-aligned security controls</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>99.9% uptime guarantee with secure hosting</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You have the following rights regarding your personal data:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
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
