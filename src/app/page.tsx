
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypewriterText } from '@/components/common/TypewriterText';
import { PhoneMockup } from '@/components/features/PhoneMockup';
import KeyFeaturesShowcase from '@/components/features/KeyFeaturesShowcase';
import IndustryUseCases from '@/components/features/IndustryUseCases';

export default function Home() {
  const scaleOnHover = {
    whileHover: { scale: 1.05, transition: { duration: 0.2 } },
    whileTap: { scale: 0.95 },
  };

  return (
    <div className="min-h-screen bg-white text-midnight-cosmos">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-white/98 backdrop-blur-sm z-50 border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Nyota Logo"
                width={140}
                height={45}
                className="w-auto h-10"
                priority
                unoptimized
              />
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-graphite-gray hover:text-royal-azure transition-colors font-medium">
                Features
              </Link>
              <Link href="#how-it-works" className="text-graphite-gray hover:text-royal-azure transition-colors font-medium">
                How It Works
              </Link>
              <Link href="#industries" className="text-graphite-gray hover:text-royal-azure transition-colors font-medium">
                Industries
              </Link>
              <a href="tel:+256749117690" className="text-graphite-gray hover:text-royal-azure transition-colors">+256 749 117 690</a>
              <Link href="#login" className="text-graphite-gray hover:text-royal-azure transition-colors font-medium">
                Log in
              </Link>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/256709490920"
                className="bg-sunlit-amber hover:bg-[#FFD166] text-midnight-cosmos px-6 py-3 rounded-full font-bold transition-all shadow-md hover:shadow-lg"
              >
                Book demo
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/256709490920"
                className="bg-sunlit-amber text-midnight-cosmos px-5 py-2.5 rounded-full font-bold text-sm"
              >
                Book demo
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 sm:pt-40 sm:pb-28 bg-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Circular gradient background - yellow/amber */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] lg:w-[900px] lg:h-[900px] bg-gradient-to-r from-sunlit-amber/5 to-sunlit-amber/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Centered Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl mb-8 leading-tight"
              style={{ 
                fontFamily: '"Ananda Black", "Arial Black", sans-serif',
                fontWeight: 900,
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'antialiased',
              }}
            >
              <span className="text-midnight-cosmos">Your CRM, </span>
              <span className="text-sunlit-amber">your way.</span>
              <br />
              <span className="text-midnight-cosmos">Built around how </span>
              <span className="text-royal-azure">you sell</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-graphite-gray mb-12 leading-relaxed max-w-2xl mx-auto"
            >
              From first inquiry to final conversion capture leads from WhatsApp, Email & SMS, track every interaction, and automate follow-ups with the CRM that adapts to how <strong>your business</strong> actually works.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/256709490920"
                className="bg-sunlit-amber hover:bg-[#FFD166] text-midnight-cosmos px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Book a Demo
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#how-it-works"
                className="bg-white hover:bg-gray-50 text-midnight-cosmos px-10 py-4 rounded-full font-bold text-lg transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center border-2 border-gray-200"
              >
                See How It Works
              </motion.a>
            </motion.div>

            {/* Contact Info */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-graphite-gray text-sm mb-8 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 text-royal-azure" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span>or call us at <a href="tel:+256749117690" className="font-bold hover:text-royal-azure transition-colors">+256 749 117 690</a></span>
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-graphite-gray"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-royal-azure" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Setup in under 1 hour</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-royal-azure" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>WhatsApp-First CRM</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-royal-azure" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Built for Africa</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image with Floating Chat Bubbles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mt-12 sm:mt-16"
          >
            <Image
              src="/hero.png"
              alt="ChatBot helping customers"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl shadow-2xl"
              unoptimized
            />

            {/* University Admission Notification - Top Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="hidden lg:block absolute top-6 -left-20 lg:-left-28 bg-white rounded-2xl shadow-xl px-5 py-3 w-[260px] lg:w-[300px] xl:w-[320px] border border-gray-100"
            >
              <div className="flex items-start gap-2.5">
                <div className="w-9 h-9 bg-gradient-to-br from-royal-azure to-royal-azure/80 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-base">🎓</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs font-semibold text-midnight-cosmos tracking-tight">International University</p>
                    <span className="text-[11px] text-gray-400">Just now</span>
                  </div>
                  <p className="text-sm text-graphite-gray leading-snug">
                    Congratulations! Your application has been <span className="font-semibold text-royal-azure">accepted</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Real Estate Lead Notification - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-16 lg:-right-20 bg-white rounded-2xl shadow-xl px-5 py-3 w-[260px] lg:w-[300px] xl:w-[320px] border border-gray-100"
            >
              <div className="flex items-start gap-2.5">
                <div className="w-9 h-9 bg-gradient-to-br from-sunlit-amber to-sunlit-amber/80 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-base">🏠</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs font-semibold text-midnight-cosmos tracking-tight">Prime Properties Ltd</p>
                    <span className="text-[11px] text-gray-400">2m ago</span>
                  </div>
                  <p className="text-sm text-graphite-gray leading-snug">
                    3 new properties match your search criteria
                  </p>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp Business Message - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="hidden lg:block absolute bottom-6 -left-20 lg:-left-28 bg-white rounded-2xl shadow-xl px-5 py-3 w-[260px] lg:w-[300px] xl:w-[320px] border border-gray-100"
            >
              <div className="flex items-start gap-2.5">
                <div className="w-9 h-9 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs font-semibold text-midnight-cosmos tracking-tight">Auto Dealership</p>
                    <span className="text-[11px] text-gray-400">5m ago</span>
                  </div>
                  <p className="text-sm text-graphite-gray leading-snug">
                    Your test drive is scheduled for tomorrow at 2 PM
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mobile stacked chat bubbles */}
            <div className="mt-10 flex flex-col gap-3 lg:hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg px-4 py-3 border border-gray-100 max-w-sm w-full mx-auto"
              >
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 bg-gradient-to-br from-royal-azure to-royal-azure/80 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">🎓</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <p className="text-xs font-semibold text-midnight-cosmos tracking-tight">International University</p>
                      <span className="text-[10px] text-gray-400">Just now</span>
                    </div>
                    <p className="text-xs text-graphite-gray leading-snug">
                      Congratulations! Your application has been <span className="font-semibold text-royal-azure">accepted</span>
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl shadow-lg px-4 py-3 border border-gray-100 max-w-sm w-full mx-auto"
              >
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 bg-gradient-to-br from-sunlit-amber to-sunlit-amber/80 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">🏠</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <p className="text-xs font-semibold text-midnight-cosmos tracking-tight">Prime Properties Ltd</p>
                      <span className="text-[10px] text-gray-400">2m ago</span>
                    </div>
                    <p className="text-xs text-graphite-gray leading-snug">
                      3 new properties match your search criteria
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-lg px-4 py-3 border border-gray-100 max-w-sm w-full mx-auto"
              >
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <p className="text-xs font-semibold text-midnight-cosmos tracking-tight">Auto Dealership</p>
                      <span className="text-[10px] text-gray-400">5m ago</span>
                    </div>
                    <p className="text-xs text-graphite-gray leading-snug">
                      Your test drive is scheduled for tomorrow at 2 PM
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-royal-azure/10 via-royal-azure/15 to-royal-azure/5 border-y border-royal-azure/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-midnight-cosmos font-semibold text-sm sm:text-base tracking-wide uppercase mb-10">Trusted by Leading African Businesses</p>
            
            {/* Client Logos */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12 mb-12">
              {/* International University of East Africa */}
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                <div className="bg-white px-6 py-4 rounded-xl shadow-md border-2 border-royal-azure/20 hover:shadow-lg hover:border-royal-azure/40 transition-all backdrop-blur-sm">
                  <p className="text-midnight-cosmos font-bold text-base sm:text-lg text-center leading-tight">
                    International University<br />of East Africa
                  </p>
                </div>
              </motion.div>

              {/* Bora Technology */}
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                <div className="bg-white px-6 py-4 rounded-xl shadow-md border-2 border-royal-azure/20 hover:shadow-lg hover:border-royal-azure/40 transition-all backdrop-blur-sm">
                  <p className="text-midnight-cosmos font-bold text-base sm:text-lg text-center">
                    Bora Technology
                  </p>
                </div>
              </motion.div>

              {/* Bokeseni SARL */}
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                <div className="bg-white px-6 py-4 rounded-xl shadow-md border-2 border-royal-azure/20 hover:shadow-lg hover:border-royal-azure/40 transition-all backdrop-blur-sm">
                  <p className="text-midnight-cosmos font-bold text-base sm:text-lg text-center">
                    Bokeseni SARL
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto"
          >
            {/* Stat 1 */}
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-royal-azure/20 shadow-md hover:shadow-lg hover:border-royal-azure/30 transition-all">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-royal-azure to-royal-azure/80 rounded-xl mb-4 shadow-md">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-midnight-cosmos mb-2">50K+</h3>
              <p className="text-graphite-gray text-sm font-medium">Leads Managed</p>
            </div>

            {/* Stat 2 */}
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-royal-azure/20 shadow-md hover:shadow-lg hover:border-royal-azure/30 transition-all">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-sunlit-amber to-sunlit-amber/90 rounded-xl mb-4 shadow-md">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-midnight-cosmos mb-2">10x</h3>
              <p className="text-graphite-gray text-sm font-medium">Faster Response Times</p>
            </div>

            {/* Stat 3 */}
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-royal-azure/20 shadow-md hover:shadow-lg hover:border-royal-azure/30 transition-all">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-4 shadow-md">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-midnight-cosmos mb-2">35%</h3>
              <p className="text-graphite-gray text-sm font-medium">Increase in Conversions</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section id="how-it-works" className="py-20 sm:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-midnight-cosmos mb-6">
              No more manual tasks.
              <br />
              <span className="text-sunlit-amber">Just automated business growth.</span>
            </h2>
            <p className="text-xl sm:text-2xl text-graphite-gray max-w-3xl mx-auto">
              If you can draw it out, you can automate it on Nyota and start closing more deals.
            </p>
          </motion.div>

          {/* Main Visual - Workflow Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-royal-azure/5 via-transparent to-sunlit-amber/5 rounded-3xl"></div>
            
            {/* Workflow Container */}
            <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 sm:p-12 lg:p-16">
              {/* Workflow Steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
                {/* Step 1: Lead Comes In */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border-2 border-green-200 relative group hover:shadow-lg transition-shadow">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      1
                    </div>
                    
                    {/* Icon */}
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 shadow-md">
                      <svg className="w-9 h-9 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      </svg>
                    </div>

                    <h3 className="text-lg font-bold text-midnight-cosmos mb-2">Lead Reaches Out</h3>
                    <p className="text-sm text-gray-600">Via WhatsApp, Email, SMS, or Web Form</p>

                    {/* Sample Messages */}
                    <div className="mt-4 space-y-2">
                      <div className="bg-white rounded-lg p-3 shadow-sm border border-green-100 text-xs">
                        <p className="text-green-700 font-semibold mb-1">WhatsApp</p>
                        <p className="text-gray-600">"Hi, I need info about..."</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm border border-blue-100 text-xs">
                        <p className="text-blue-700 font-semibold mb-1">Email</p>
                        <p className="text-gray-600">"Interested in your services"</p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow to Next Step (Desktop) */}
                  <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-10 transform -translate-y-1/2 z-10">
                    <svg className="w-8 h-8 lg:w-12 lg:h-12 text-royal-azure" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </motion.div>

                {/* Step 2: AI Processes */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-royal-azure/10 to-royal-azure/20 rounded-2xl p-6 border-2 border-royal-azure/30 relative group hover:shadow-lg transition-shadow">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-10 h-10 bg-royal-azure rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      2
                    </div>
                    
                    {/* Icon */}
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 shadow-md">
                      <svg className="w-9 h-9 text-royal-azure" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>

                    <h3 className="text-lg font-bold text-midnight-cosmos mb-2">Nyota AI Takes Over</h3>
                    <p className="text-sm text-gray-600">Instant capture, smart routing, auto-response</p>

                    {/* AI Processing Visual */}
                    <div className="mt-4 bg-white rounded-xl p-4 shadow-sm border border-royal-azure/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-semibold text-gray-700">Processing...</span>
                      </div>
                      
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600">Lead captured</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600">Profile created</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600">Agent assigned</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-royal-azure border-t-transparent rounded-full animate-spin"></div>
                          <span className="text-gray-600">Sending response...</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow to Next Step (Desktop) */}
                  <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-10 transform -translate-y-1/2 z-10">
                    <svg className="w-8 h-8 lg:w-12 lg:h-12 text-royal-azure" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </motion.div>

                {/* Step 3: Lead Converted */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-sunlit-amber/10 to-sunlit-amber/20 rounded-2xl p-6 border-2 border-sunlit-amber/30 relative group hover:shadow-lg transition-shadow">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-10 h-10 bg-sunlit-amber rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      3
                    </div>
                    
                    {/* Icon */}
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 shadow-md">
                      <svg className="w-9 h-9 text-sunlit-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>

                    <h3 className="text-lg font-bold text-midnight-cosmos mb-2">Lead Becomes Customer</h3>
                    <p className="text-sm text-gray-600">Automated follow-ups nurture until sale</p>

                    {/* Success Metrics */}
                    <div className="mt-4 space-y-3">
                      <div className="bg-white rounded-xl p-3 shadow-sm border border-sunlit-amber/20">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold text-gray-700">Response Time</span>
                          <span className="text-xs font-bold text-green-600">Instant</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-3 shadow-sm border border-sunlit-amber/20">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold text-gray-700">Engagement</span>
                          <span className="text-xs font-bold text-royal-azure">95%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-royal-azure h-2 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-3 shadow-sm border border-sunlit-amber/20">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold text-gray-700">Conversion</span>
                          <span className="text-xs font-bold text-sunlit-amber">3x Higher</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-sunlit-amber h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                    </div>

                    {/* Success Badge */}
                    <div className="mt-4 bg-green-50 rounded-lg p-3 border border-green-200 text-center">
                      <p className="text-2xl font-bold text-green-600">💰</p>
                      <p className="text-xs font-semibold text-green-700 mt-1">Deal Closed!</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <Link
              href="https://wa.me/256709490920?text=I%20want%20to%20see%20Nyota%20in%20action"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-royal-azure to-royal-azure/90 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all hover:scale-105"
            >
              See It In Action
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

  {/* Key Features Showcase Section */}
  <div id="features">
    <KeyFeaturesShowcase />
  </div>

      {/* Industry Use Cases Section */}
      <div id="industries">
        <IndustryUseCases />
      </div>

      {/* Footer */}
      <footer className="bg-midnight-cosmos text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-2">
              <Image
                src="/logo.png"
                alt="Nyota Logo"
                width={150}
                height={50}
                className="w-auto h-12 mb-4 brightness-0 invert"
              />
              <p className="text-gray-300 text-sm mb-4 max-w-md">
                Put your business growth on autopilot with intelligent marketing and sales automation.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: 'ri-linkedin-line', href: '#', label: 'LinkedIn' },
                  { icon: 'ri-twitter-line', href: '#', label: 'Twitter' },
                  { icon: 'ri-facebook-line', href: '#', label: 'Facebook' },
                  { icon: 'ri-instagram-line', href: '#', label: 'Instagram' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-graphite-gray hover:bg-royal-azure rounded-full flex items-center justify-center transition-colors"
                  >
                    <i className={`${social.icon} text-lg`}></i>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-white mb-4">Solutions</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="#" className="hover:text-sunlit-amber transition-colors">Marketing Automation</Link></li>
                <li><Link href="#" className="hover:text-sunlit-amber transition-colors">Sales Pipeline</Link></li>
                <li><Link href="#" className="hover:text-sunlit-amber transition-colors">Lead Scoring</Link></li>
                <li><Link href="#" className="hover:text-sunlit-amber transition-colors">Email Marketing</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-bold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="#" className="hover:text-sunlit-amber transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-sunlit-amber transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-sunlit-amber transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-sunlit-amber transition-colors">Support</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-graphite-gray pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {new Date().getFullYear()} Nyota. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-sunlit-amber transition-colors">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link href="/terms" className="hover:text-sunlit-amber transition-colors">
                  Terms of Service
                </Link>
                <span>•</span>
                <Link href="/cookies" className="hover:text-sunlit-amber transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
