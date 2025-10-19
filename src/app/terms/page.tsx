'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TermsOfService() {
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
              Terms of Service
            </h1>
            <p className="text-gray-500 mb-8">Last updated: October 19, 2025</p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  By accessing or using Nyota Fusion AI's CRM platform and services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Services</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Eligibility</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You must be at least 18 years old and have the authority to enter into these Terms on behalf of your organization.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Account Registration</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To use our Services, you must:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Provide accurate and complete registration information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Acceptable Use</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Violate any laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Upload malicious code or viruses</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use our Services for spam or unsolicited communications</li>
                  <li>Resell or redistribute our Services without permission</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscription and Payment</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Pricing</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our pricing is available on our website. We reserve the right to modify pricing with 30 days' notice.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Billing</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Subscriptions are billed in advance on a monthly or annual basis</li>
                  <li>Payments are non-refundable except as required by law</li>
                  <li>Failed payments may result in service suspension</li>
                  <li>You authorize us to charge your payment method on file</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Free Trial</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We offer a 30-day free trial. No credit card is required during the trial period. After the trial, you must subscribe to continue using our Services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data and Privacy</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Your use of our Services is also governed by our Privacy Policy. You retain all rights to your data ("Customer Data"). We will:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Not access Customer Data except as necessary to provide Services</li>
                  <li>Implement security measures to protect Customer Data</li>
                  <li>Return or delete Customer Data upon termination</li>
                  <li>Comply with applicable data protection laws</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nyota retains all rights, title, and interest in our Services, including all intellectual property rights. You receive a limited, non-exclusive license to use our Services during your subscription period.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Level Agreement</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We strive to maintain 99.9% uptime for our Services. Scheduled maintenance will be announced in advance. We are not liable for:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Interruptions caused by factors beyond our control</li>
                  <li>Third-party service failures (WhatsApp, email providers, etc.)</li>
                  <li>Scheduled maintenance periods</li>
                  <li>Suspensions due to Terms violations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">By You</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You may cancel your subscription at any time. Cancellation takes effect at the end of your current billing period.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">By Us</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may suspend or terminate your account if you:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Violate these Terms</li>
                  <li>Fail to pay amounts due</li>
                  <li>Engage in fraudulent or illegal activities</li>
                  <li>Pose a security risk to our Services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To the maximum extent permitted by law, Nyota shall not be liable for:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Damages exceeding amounts paid to us in the past 12 months</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Warranty Disclaimer</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our Services are provided "as is" without warranties of any kind, express or implied. We do not guarantee that our Services will be uninterrupted, error-free, or meet your specific requirements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You agree to indemnify and hold Nyota harmless from any claims arising from your use of our Services, violation of these Terms, or infringement of any rights.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may modify these Terms at any time. We will notify you of material changes via email or through our Services. Continued use after changes constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  These Terms shall be governed by the laws of Uganda, without regard to conflict of law provisions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions about these Terms, please contact us:
                </p>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> contact@nyotainnovation.com</p>
                  <p className="text-gray-700 mb-2"><strong>Phone:</strong> +256 709 490 920</p>
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
