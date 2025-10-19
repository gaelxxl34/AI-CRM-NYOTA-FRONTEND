
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { TypewriterText } from '@/components/common/TypewriterText';
import { PhoneMockup } from '@/components/features/PhoneMockup';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState([0, 1, 2]);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const scaleOnHover = {
    whileHover: { scale: 1.05, transition: { duration: 0.2 } },
    whileTap: { scale: 0.95 },
  };

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
                <motion.div
                  whileHover={{ rotate: 5 }}
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
              </motion.div>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#features"
                className="text-gray-600 hover:text-burgundy-700 transition-colors cursor-pointer font-medium"
              >
                Features
              </Link>
              <Link
                href="#industries"
                className="text-gray-600 hover:text-burgundy-700 transition-colors cursor-pointer font-medium"
              >
                Built for Your Team
              </Link>
              <Link
                href="#case-studies"
                className="text-gray-600 hover:text-burgundy-700 transition-colors cursor-pointer font-medium"
              >
                Case Studies
              </Link>
              <Link
                href="#about"
                className="text-gray-600 hover:text-burgundy-700 transition-colors cursor-pointer font-medium"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-burgundy-700 transition-colors cursor-pointer font-medium"
              >
                Contact
              </Link>
              <motion.a
                {...scaleOnHover}
                href="https://wa.me/256709490920?text=Hi%20Nyota!%20I'd%20like%20to%20book%20a%2015-minute%20demo%20to%20learn%20how%20you%20can%20help%20my%20business.%20Looking%20forward%20to%20connecting!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-burgundy-800 to-burgundy-700 hover:from-burgundy-700 hover:to-burgundy-800 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
              >
                Book a Demo
              </motion.a>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.a
                {...scaleOnHover}
                href="https://wa.me/256709490920?text=Hi%20Nyota!%20I'd%20like%20to%20book%20a%2015-minute%20demo%20to%20learn%20how%20you%20can%20help%20my%20business.%20Looking%20forward%20to%20connecting!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-burgundy-800 to-burgundy-700 text-white px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap cursor-pointer"
              >
                Book Demo
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-16 sm:pt-20">
        {/* Clean Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          ></div>

          {/* Subtle Gradient Orbs - Hidden on mobile */}
          <motion.div
            className="hidden sm:block absolute top-10 sm:top-20 left-10 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-burgundy-800/10 to-orange-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="hidden sm:block absolute top-20 sm:top-40 right-10 sm:right-20 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 0.8, 1.2],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* Trust Badge - Hidden on mobile */}
              <motion.div
                className="hidden sm:inline-flex items-center px-3 sm:px-4 py-2 bg-burgundy-50 border border-burgundy-200 rounded-full mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="w-2 h-2 bg-burgundy-500 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                <span className="text-burgundy-800 text-xs sm:text-sm font-medium">
                  Trusted by 180+ universities, banks & growth teams globally
                </span>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="text-gray-900">Turn Inquiries Into</span>
                <br />
                <motion.span
                  className="bg-gradient-to-r from-burgundy-800 via-burgundy-800 to-orange-500 bg-clip-text text-transparent inline-block"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    backgroundSize: '200% auto',
                  }}
                >
                  <TypewriterText 
                    text="Income—Automatically"
                    delay={800}
                    speed={80}
                  />
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Unify <strong>WhatsApp, Email, and SMS</strong>, score intent with AI, and automate timely follow-ups so admissions, banking, and marketing teams convert more leads—fast.
              </motion.p>

              <motion.div
                className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <motion.a
                  {...scaleOnHover}
                  href="https://wa.me/256709490920?text=Hi%20Nyota!%20I'd%20like%20to%20book%20a%2015-minute%20demo%20to%20learn%20how%20you%20can%20help%20my%20business.%20Looking%20forward%20to%20connecting!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-gradient-to-r from-burgundy-800 to-burgundy-700 hover:from-burgundy-700 hover:to-burgundy-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl whitespace-nowrap cursor-pointer flex items-center justify-center min-h-[48px]"
                >
                  <span>Book a 15-Minute Demo</span>
                  <i className="ri-arrow-right-line ml-2 text-lg sm:text-xl"></i>
                </motion.a>
                <motion.a
                  {...scaleOnHover}
                  href="https://wa.me/256709490920?text=Hi%20Nyota%2C%20I'd%20like%20a%20demo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto border-2 border-success-200 hover:border-success-400 bg-success-50 hover:bg-success-100 text-success-700 hover:text-success-800 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-lg whitespace-nowrap cursor-pointer flex items-center justify-center min-h-[48px]"
                >
                  <i className="ri-whatsapp-line mr-2 text-lg sm:text-xl"></i>
                  <span>Chat on WhatsApp</span>
                </motion.a>
              </motion.div>

              {/* Optional SMS link */}
              <motion.div
                className="text-center lg:text-left mb-6 sm:mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <a
                  href="sms:+1XXXXXXXXXX"
                  className="text-gray-500 text-sm hover:text-gray-700 transition-colors cursor-pointer"
                >
                  Or text us
                </a>
              </motion.div>

              {/* Trust Indicators - Hidden on mobile */}
              <motion.div
                className="hidden sm:flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-trust-400 to-trust-500 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-success-400 to-success-500 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-coral-400 to-coral-500 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-xs sm:text-sm">99.9% uptime</span>
                </div>
                <div className="flex items-center">
                  <div className="flex text-amber-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-xs sm:text-sm"></i>
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm">SOC-Aligned Security</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Visual - Product Dashboard */}
            <motion.div
              className="relative order-1 lg:order-2 mt-4 sm:mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {/* Phone Mockup Component */}
              <PhoneMockup />

              {/* Floating Stats - Adjusted positions for phone */}
              <motion.div
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white rounded-xl shadow-xl p-2 sm:p-4 border border-gray-100 z-30"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-success-400 to-success-500 rounded-full flex items-center justify-center">
                    <i className="ri-line-chart-line text-white text-xs sm:text-sm"></i>
                  </div>
                  <div className="hidden sm:block">
                    <div className="text-sm font-semibold text-amber-600">+35%</div>
                    <div className="text-xs text-gray-500">Conversions</div>
                  </div>
                  <div className="sm:hidden">
                    <div className="text-xs font-semibold text-amber-600">+35%</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-3 sm:-right-4 bg-white rounded-xl shadow-xl p-2 sm:p-4 border border-gray-100 z-30"
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="text-center">
                  <div className="text-sm sm:text-lg font-bold text-burgundy-700">180+</div>
                  <div className="text-xs text-gray-500">Clients</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <motion.div
          className="hidden sm:block absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 sm:h-3 bg-gray-400 rounded-full mt-1 sm:mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Early Credibility Strip - Mobile Only */}
      <section className="sm:hidden py-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 gap-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="text-lg font-bold text-burgundy-700">180+</div>
              <div className="text-xs text-gray-500">Clients</div>
            </div>
            <div>
              <div className="text-lg font-bold text-blue-600">25</div>
              <div className="text-xs text-gray-500">Countries</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logo Strip */}
      <section className="py-8 sm:py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-500 text-sm font-medium">Trusted by leading global institutions</p>
          </motion.div>
          
          <motion.div
            className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 opacity-60"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-gray-400 font-semibold text-sm sm:text-lg" title="International University of East Africa">International University of East Africa</div>
            <div className="text-gray-400 font-semibold text-sm sm:text-lg" title="Bora Technology">Bora Technology</div>
            <div className="text-gray-400 font-semibold text-sm sm:text-lg" title="Université de la Paix de la RDC">Université de la Paix de la RDC</div>
          </motion.div>
        </div>
      </section>

      {/* Channels & Integrations Strip */}
      <section className="py-6 sm:py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-sm font-semibold text-gray-600 mb-3">CHANNELS</h3>
              <div className="flex justify-center items-center space-x-4 sm:space-x-6">
                <span className="text-gray-700 font-medium text-sm sm:text-base">WhatsApp</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-700 font-medium text-sm sm:text-base">Email</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-700 font-medium text-sm sm:text-base">SMS</span>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 mb-3">INTEGRATIONS</h3>
              <div className="flex justify-center items-center space-x-3 sm:space-x-6 text-sm sm:text-base">
                <span className="text-gray-700 font-medium">Meta Ads</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-700 font-medium">Google Ads</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-700 font-medium">Web Forms</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-700 font-medium">CSV/API</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Built for Your Team */}
      <section id="industries" className="py-16 sm:py-24 bg-gradient-to-r from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12 sm:mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8 bg-gradient-to-r from-gray-900 via-burgundy-800 to-gray-900 bg-clip-text text-transparent"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.8 }}
            >
              Built for Your Team
            </motion.h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Purpose-built solutions for universities, banks, and growth teams to convert more leads faster.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            {[
              {
                title: 'Universities & Colleges',
                badge: 'ADMISSIONS',
                description: 'Boost inquiry-to-application and admit-to-enroll with AI-timed nudges.',
                outcomes: ['+24% app starts', '+15% show-up'],
                channels: 'Email/SMS (U.S.), WhatsApp/Email (Global)',
                image: 'https://readdy.ai/api/search-image?query=Modern%20university%20campus%20with%20diverse%20students%20walking%20and%20studying%2C%20contemporary%20higher%20education%20environment%20with%20vibrant%20architecture%20and%20natural%20lighting%2C%20global%20university%20setting%20showcasing%20academic%20excellence%20and%20student%20life%2C%20high-quality%20photography&width=600&height=300&seq=global-university-campus-001&orientation=landscape',
                gradient: 'from-blue-500 to-purple-600',
                link: '#case-study-education'
              },
              {
                title: 'Banking & Financial Services',
                badge: 'ONBOARDING',
                description: 'Accelerate onboarding and cross-sell with compliant journeys.',
                outcomes: ['Faster account opens', 'Higher deposits'],
                channels: 'Email/SMS/WhatsApp',
                image: 'https://readdy.ai/api/search-image?query=Modern%20banking%20institution%20interior%20with%20professional%20staff%20serving%20diverse%20customers%2C%20contemporary%20financial%20services%20environment%20with%20clean%20design%20and%20natural%20lighting%2C%20global%20banking%20setting%20showing%20customer%20service%20excellence%2C%20high-quality%20photography&width=600&height=300&seq=global-bank-interior-001&orientation=landscape',
                gradient: 'from-green-500 to-teal-600',
                link: '#case-study-banking'
              },
              {
                title: 'Performance Marketing Teams',
                badge: 'GROWTH',
                description: 'Turn paid leads into pipeline with instant scoring + auto follow-ups.',
                outcomes: ['Lower CPL waste', 'Faster speed-to-lead', 'Better ROAS'],
                channels: 'Meta Ads • Google Ads • CSV/API',
                image: 'https://readdy.ai/api/search-image?query=Modern%20marketing%20team%20office%20with%20professionals%20analyzing%20performance%20data%20on%20multiple%20screens%2C%20contemporary%20digital%20marketing%20workspace%20with%20analytics%20dashboards%20and%20natural%20lighting%2C%20global%20marketing%20agency%20environment%20showing%20data-driven%20growth%20strategies%2C%20high-quality%20photography&width=600&height=300&seq=global-marketing-office-001&orientation=landscape',
                gradient: 'from-burgundy-800 to-orange-600',
                link: '#case-study-marketing'
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                className="group bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-burgundy-300 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer h-auto"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-xl mb-4 sm:mb-6">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${story.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  />
                  <img
                    src={story.image}
                    alt={`${story.title} - ${story.description}`}
                    className="w-full h-32 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className={`inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full bg-gradient-to-r ${story.gradient} text-white text-xs font-bold uppercase tracking-wide`}>
                      {story.badge}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-burgundy-700 transition-colors duration-300 line-clamp-2">
                  {story.title}
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base line-clamp-2">
                  {story.description}
                </p>
                
                {/* Outcomes - Compact bullets */}
                <div className="mb-3 sm:mb-4">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">OUTCOMES:</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {story.outcomes.map((outcome, idx) => (
                      <span key={idx} className="inline-flex items-center px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                        {outcome}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Channels - Single chip row */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">CHANNELS:</h4>
                  <div className="bg-gray-50 rounded-full px-3 py-1 inline-block">
                    <p className="text-gray-600 text-xs sm:text-sm whitespace-nowrap">{story.channels}</p>
                  </div>
                </div>

                <Link
                  href={story.link}
                  className="inline-flex items-center text-coral-600 hover:text-coral-700 font-semibold transition-colors duration-300 text-sm group"
                >
                  Learn More
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12 sm:mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8 bg-gradient-to-r from-gray-900 via-burgundy-800 to-gray-900 bg-clip-text text-transparent"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.8 }}
            >
              Why Choose Nyota Over Traditional Tools?
            </motion.h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Break free from expensive, complicated systems that slow you down.
            </p>
          </motion.div>

          {/* Desktop Table */}
          <motion.div
            className="hidden sm:block bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-semibold text-gray-900">Feature</th>
                    <th className="px-6 py-4 text-center text-lg font-semibold text-gray-600">Traditional Tools</th>
                    <th className="px-6 py-4 text-center text-lg font-semibold text-burgundy-700">Nyota</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      feature: 'Channels',
                      traditional: 'Siloed',
                      nyota: 'WhatsApp • Email • SMS in one inbox',
                      traditionalIcon: 'ri-close-line',
                      nyotaIcon: 'ri-check-line'
                    },
                    {
                      feature: 'Speed-to-Lead',
                      traditional: 'Manual',
                      nyota: 'Instant AI-timed outreach',
                      traditionalIcon: 'ri-close-line',
                      nyotaIcon: 'ri-check-line'
                    },
                    {
                      feature: 'Lead Scoring',
                      traditional: 'Rules only',
                      nyota: 'ML intent scoring',
                      traditionalIcon: 'ri-close-line',
                      nyotaIcon: 'ri-check-line'
                    },
                    {
                      feature: 'Compliance',
                      traditional: 'Generic',
                      nyota: 'FERPA-aware (admissions), SOC-aligned',
                      traditionalIcon: 'ri-close-line',
                      nyotaIcon: 'ri-check-line'
                    },
                    {
                      feature: 'Currencies',
                      traditional: 'USD only',
                      nyota: 'USD + KES/UGX/RWF/ZAR',
                      traditionalIcon: 'ri-close-line',
                      nyotaIcon: 'ri-check-line'
                    },
                    {
                      feature: 'Onboarding',
                      traditional: 'Weeks',
                      nyota: '15-min setup • 48h migration',
                      traditionalIcon: 'ri-close-line',
                      nyotaIcon: 'ri-check-line'
                    }
                  ].map((row, index) => (
                    <motion.tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors duration-200"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 bg-burgundy-500 rounded-full flex items-center justify-center">
                            <i className={`${row.traditionalIcon} text-white text-xs`}></i>
                          </div>
                          <span className="text-gray-600">{row.traditional}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                            <i className={`${row.nyotaIcon} text-white text-xs`}></i>
                          </div>
                          <span className="text-gray-900 font-medium">{row.nyota}</span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Mobile Stacked Feature List */}
          <motion.div
            className="sm:hidden space-y-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[
              {
                feature: 'Channels',
                traditional: 'Siloed',
                nyota: 'WhatsApp • Email • SMS in one inbox'
              },
              {
                feature: 'Speed-to-Lead',
                traditional: 'Manual',
                nyota: 'Instant AI-timed outreach'
              },
              {
                feature: 'Lead Scoring',
                traditional: 'Rules only',
                nyota: 'ML intent scoring'
              },
              {
                feature: 'Compliance',
                traditional: 'Generic',
                nyota: 'FERPA-aware, SOC-aligned'
              },
              {
                feature: 'Currencies',
                traditional: 'USD only',
                nyota: 'USD + KES/UGX/RWF/ZAR'
              },
              {
                feature: 'Onboarding',
                traditional: 'Weeks',
                nyota: '15-min setup • 48h migration'
              }
            ].map((row, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="font-semibold text-gray-900 mb-3">{row.feature}</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-burgundy-500 rounded-full flex items-center justify-center">
                      <i className="ri-close-line text-white text-xs"></i>
                    </div>
                    <span className="text-gray-600 text-sm">Traditional: {row.traditional}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-white text-xs"></i>
                    </div>
                    <span className="text-gray-900 font-medium text-sm">Nyota: {row.nyota}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Global by default. Local where it matters. */}
          <motion.div
            className="bg-gradient-to-r from-burgundy-50 to-orange-50 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 border border-burgundy-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Global by default. Local where it matters.</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-3">
                  <i className="ri-money-dollar-circle-line text-white text-lg sm:text-xl"></i>
                </div>
                <p className="font-semibold text-gray-900 text-sm sm:text-base">USD + KES/UGX/RWF/ZAR</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-3">
                  <i className="ri-message-3-line text-white text-lg sm:text-xl"></i>
                </div>
                <p className="font-semibold text-gray-900 text-sm sm:text-base">WhatsApp + Email + SMS in one inbox</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-3">
                  <i className="ri-time-line text-white text-lg sm:text-xl"></i>
                </div>
                <p className="font-semibold text-gray-900 text-sm sm:text-base">Data migration in 48h</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-gray-600 mb-4 text-sm sm:text-base px-4">Set up in <strong>15 minutes</strong>. We migrate your data in <strong>48 hours</strong>.</p>
            <motion.a
              {...scaleOnHover}
              href="https://wa.me/256709490920?text=Hi%20Nyota!%20I'd%20like%20to%20switch%20to%20Nyota%20CRM%20and%20migrate%20my%20data.%20Can%20you%20help%20me%20get%20started%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-burgundy-800 to-burgundy-700 hover:from-burgundy-700 hover:to-burgundy-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer text-sm sm:text-base inline-block"
            >
              Switch to Nyota — Migrate in 48h
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12 sm:mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8 bg-gradient-to-r from-gray-900 via-burgundy-800 to-gray-900 bg-clip-text text-transparent"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.8 }}
            >
              Success Stories
            </motion.h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Real results from institutions that transformed their lead conversion with Nyota.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            {/* Education Case Study */}
            <motion.div
              className="bg-white p-6 sm:p-8 lg:p-12 rounded-2xl border border-gray-200 shadow-xl"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <motion.h3
                className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-gray-900"
                whileInView={{ scale: [0.95, 1] }}
                transition={{ duration: 0.6 }}
              >
                Education: +35% Faster Follow-ups at International University of East Africa
              </motion.h3>
              
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-burgundy-800 to-burgundy-700 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <i className="ri-alarm-warning-line text-white text-sm sm:text-lg"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-sm">Problem</h4>
                  <p className="text-gray-600 text-xs">Manual follow-ups led to delayed responses</p>
                </div>
                
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <i className="ri-settings-3-line text-white text-sm sm:text-lg"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-sm">Solution</h4>
                  <p className="text-gray-600 text-xs">Unified inbox + automated workflows</p>
                </div>
                
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <i className="ri-trophy-line text-white text-sm sm:text-lg"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-sm">Results</h4>
                  <p className="text-amber-600 font-semibold text-xs">+35% response speed</p>
                </div>
              </div>

              {/* Compact Outcome Bullets */}
              <div className="mb-4 sm:mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Key Outcomes:</h4>
                <ul className="space-y-1 sm:space-y-2">
                  <li className="flex items-center text-gray-700 text-xs sm:text-sm">
                    <div className="w-2 h-2 bg-success-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span><strong className="text-amber-600">+35% faster follow-ups</strong> with automated responses</span>
                  </li>
                  <li className="flex items-center text-gray-700 text-xs sm:text-sm">
                    <div className="w-2 h-2 bg-success-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span><strong className="text-amber-600">+18% booked meetings</strong> through unified inbox</span>
                  </li>
                  <li className="flex items-center text-gray-700 text-xs sm:text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                    <strong>Setup in 15 min</strong> with zero disruption
                  </li>
                </ul>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-xs sm:text-sm">
                International University of East Africa achieved 35% faster response times and 18% more booked meetings after implementing Nyota's unified inbox and automated workflows.
              </p>
            </motion.div>

            {/* DRC University Case Study */}
            <motion.div
              className="bg-white p-6 sm:p-8 lg:p-12 rounded-2xl border border-gray-200 shadow-xl"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <motion.h3
                className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-gray-900"
                whileInView={{ scale: [0.95, 1] }}
                transition={{ duration: 0.6 }}
              >
                Admissions: +19% Application Starts at Université de la Paix de la RDC
              </motion.h3>
              
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <i className="ri-user-search-line text-white text-sm sm:text-lg"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-sm">Challenge</h4>
                  <p className="text-gray-600 text-xs">Low inquiry-to-application conversion</p>
                </div>
                
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <i className="ri-robot-line text-white text-sm sm:text-lg"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-sm">AI Solution</h4>
                  <p className="text-gray-600 text-xs">Intent scoring + timed nudges</p>
                </div>
                
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <i className="ri-graduation-cap-line text-white text-sm sm:text-lg"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-sm">Impact</h4>
                  <p className="text-gray-600 text-xs">+19% application starts</p>
                </div>
              </div>

              {/* Compact Outcome Bullets */}
              <div className="mb-4 sm:mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Key Outcomes:</h4>
                <ul className="space-y-1 sm:space-y-2">
                  <li className="flex items-center text-gray-700 text-xs sm:text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                    <strong>+19% application starts</strong> in one semester
                  </li>
                  <li className="flex items-center text-gray-700 text-xs sm:text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                    <strong>WhatsApp-first approach</strong> for African market
                  </li>
                  <li className="flex items-center text-gray-700 text-xs sm:text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                    <strong>Email + WhatsApp</strong> unified workflow
                  </li>
                </ul>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-xs sm:text-sm">
                Université de la Paix de la RDC used AI-timed nurturing to increase inquiry-to-application conversion by 19% with WhatsApp-first communication strategy.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12 sm:mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 via-burgundy-800 to-gray-900 bg-clip-text text-transparent"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.8 }}
            >
              What Our Customers Say
            </motion.h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Real results from businesses that transformed their lead conversion with Nyota.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            {[
              {
                quote: "Nyota transformed our technology infrastructure and lead management system completely.",
                name: "Dr. Adam",
                role: "CEO",
                company: "Bora Technology",
                gradient: "from-blue-500 to-purple-600",
                rating: 5
              },
              {
                quote: "Outstanding results in student enrollment and engagement. A game-changer for our institution.",
                name: "Prof. Emeka",
                role: "Vice Chancellor",
                company: "International University of East Africa",
                gradient: "from-green-500 to-teal-600",
                rating: 5
              },
              {
                quote: "The unified communication platform has significantly improved our admissions process and student satisfaction.",
                name: "Mr. Joseph",
                role: "Director of Admissions",
                company: "Université de la Paix de la RDC",
                gradient: "from-burgundy-800 to-orange-600",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 h-auto"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex text-amber-500 mb-4 sm:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-base sm:text-lg"></i>
                  ))}
                </div>
                
                <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed font-medium">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center">
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-burgundy-800 to-burgundy-700 flex items-center justify-center mr-3 sm:mr-4 shadow-lg flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-white font-bold text-sm sm:text-base">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </motion.div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-gray-600 text-xs sm:text-sm">{testimonial.role}</p>
                    <div className={`inline-flex items-center px-2 py-1 rounded-full bg-gradient-to-r ${testimonial.gradient} text-white text-xs font-medium mt-1`}>
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-8 sm:mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a
              {...scaleOnHover}
              href="https://wa.me/256709490920?text=Hi%20Nyota!%20I'd%20like%20to%20book%20a%2015-minute%20demo%20to%20learn%20how%20you%20can%20help%20my%20business.%20Looking%20forward%20to%20connecting!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-burgundy-800 to-burgundy-700 hover:from-burgundy-700 hover:to-burgundy-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer text-sm sm:text-base inline-block"
            >
              Book a 15-Minute Demo
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12 sm:mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 via-burgundy-800 to-gray-900 bg-clip-text text-transparent"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.8 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed px-4">
              Everything you need to know about Nyota CRM.
            </p>
          </motion.div>

          <motion.div
            className="space-y-3 sm:space-y-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            {[
              {
                question: "Do you support local currencies?",
                answer: "Yes: KES, UGX, RWF, ZAR, USD. We support all major African currencies plus USD for international transactions, with automatic conversion and local payment method integration."
              },
              {
                question: "How fast is onboarding?",
                answer: "15 minutes (+ assisted migration in 48h). Our setup wizard gets you running immediately, and our team provides free data migration from any existing CRM within 48 hours."
              },
              {
                question: "Integrations?",
                answer: "WhatsApp, Email, CSV import; API available. We integrate with WhatsApp Business API, all major email platforms, and provide robust API access for custom integrations."
              },
              {
                question: "How secure is my data with Nyota?",
                answer: "Security is our top priority. We use enterprise-grade encryption, regular security audits, and comply with GDPR, SOC 2, and other international standards. Your data is hosted on secure servers with 99.9% uptime guarantee."
              },
              {
                question: "Can I migrate my data from other CRMs?",
                answer: "Yes, we provide free data migration assistance for all paid plans. Our team will help you import contacts, deals, and conversation history from Salesforce, HubSpot, or any other CRM platform."
              },
              {
                question: "Do you offer local support in Africa?",
                answer: "Absolutely! We provide 24/7 support with local teams across Africa. Our support staff understand local business practices and can assist in multiple languages including English, French, and Swahili."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden"
                variants={fadeInUp}
                whileHover={{ scale: 1.01 }}
              >
                <motion.button
                  className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-burgundy-700 focus:ring-inset min-h-[48px] sm:min-h-[56px]"
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ x: 5 }}
                  aria-expanded={expandedFAQ.includes(index)}
                >
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 pr-4">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: expandedFAQ.includes(index) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-4 h-4 sm:w-6 sm:h-6 flex items-center justify-center"
                  >
                    <i className="ri-arrow-down-s-line text-xl sm:text-2xl text-gray-400"></i>
                  </motion.div>
                </motion.button>
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedFAQ.includes(index) ? 'auto' : 0,
                    opacity: expandedFAQ.includes(index) ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-5 lg:pb-6">
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-8 sm:mt-12 lg:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Still have questions?</p>
            <motion.a
              {...scaleOnHover}
              href="https://wa.me/256709490920?text=Hi%20Nyota%20Support!%20I%20have%20some%20questions%20about%20your%20CRM.%20Can%20you%20help%20me%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer focus:outline-none focus:ring-2 focus:ring-coral-500 focus:ring-offset-2 text-sm sm:text-base inline-block"
            >
              Contact Support
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Global Reach, Local Expertise - Desktop Only */}
      <section className="hidden sm:block py-24 bg-gradient-to-r from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-burgundy-800 to-gray-900 bg-clip-text text-transparent"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.8 }}
            >
              Global Reach, Local Expertise
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Serving businesses worldwide with local payment methods and regional compliance.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-4 gap-8 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            {[
              { number: '180+', label: 'Clients', gradient: 'from-burgundy-800 to-burgundy-700' },
              { number: '50+', label: 'Partners', gradient: 'from-blue-500 to-blue-600' },
              { number: '25', label: 'Countries', gradient: 'from-green-500 to-green-600' },
              { number: '24/7', label: 'Support', gradient: 'from-purple-500 to-purple-600' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-4`}>
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features That Drive Results */}
      <section id="features" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12 sm:mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8 bg-gradient-to-r from-gray-900 via-burgundy-800 to-gray-900 bg-clip-text text-transparent"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.8 }}
            >
              Features That Drive Results
            </motion.h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Everything you need to turn prospects into customers and grow your business with intelligent automation.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            {[
              {
                title: 'Smart Lead Scoring',
                description: 'Know who\'s ready to buy—now. AI-powered scoring identifies your hottest prospects automatically.',
                icon: 'ri-brain-line',
                gradient: 'from-purple-400 to-purple-600',
              },
              {
                title: 'Multi-Channel Messaging',
                description: 'WhatsApp, Email & SMS in one inbox. Manage all customer conversations from one unified platform.',
                icon: 'ri-message-3-line',
                gradient: 'from-green-400 to-green-600',
              },
              {
                title: 'Workflow Automation',
                description: 'Free up 20+ hours every week. Automate follow-ups, task assignments, and deal progression.',
                icon: 'ri-settings-3-line',
                gradient: 'from-blue-400 to-blue-600',
              },
              {
                title: 'Secure Data Protection',
                description: 'Bank-grade protection for every lead. FERPA-aware and SOC-aligned security with global compliance.',
                icon: 'ri-shield-check-line',
                gradient: 'from-trust-500 to-trust-600',
              },
              {
                title: 'Advanced Analytics',
                description: 'Spot revenue patterns instantly. Real-time insights into conversion performance and team productivity.',
                icon: 'ri-line-chart-line',
                gradient: 'from-orange-400 to-orange-600',
              },
              {
                title: 'AI Insights',
                description: 'Next-best action for every lead. Machine learning that gets smarter with every interaction.',
                icon: 'ri-lightbulb-line',
                gradient: 'from-teal-400 to-teal-600',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-burgundy-300 transition-all duration-300 shadow-lg hover:shadow-2xl"
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${feature.icon} text-white text-xl sm:text-2xl`}></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-burgundy-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security/Compliance Band */}
      <section className="py-6 sm:py-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2">
              <i className="ri-shield-check-line text-success-500"></i>
              <span className="text-xs sm:text-sm font-medium">99.9% uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-award-line text-trust-500"></i>
              <span className="text-xs sm:text-sm font-medium">SOC-aligned controls</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-graduation-cap-line text-trust-500"></i>
              <span className="text-xs sm:text-sm font-medium">FERPA-aware for admissions</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-lock-line text-trust-600"></i>
              <span className="text-xs sm:text-sm font-medium">Encrypted at rest & in transit</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-user-settings-line text-teal-400"></i>
              <span className="text-xs sm:text-sm font-medium">GDPR-style data rights</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-burgundy-50 via-white to-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-gray-900 via-burgundy-800 to-gray-900 bg-clip-text text-transparent"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.8 }}
            >
              Ready to Grow Your Business with Nyota Fusion AI?
            </motion.h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Join hundreds of African businesses using Nyota CRM to increase sales, improve customer relationships, and grow faster with intelligent automation.
            </p>

            {/* Team Contact Cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-lg"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-burgundy-800 to-burgundy-700 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-white font-bold text-lg sm:text-xl">JM</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Joel Mugisho</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">Sales Director</p>
                <p className="text-gray-500 text-xs sm:text-sm">Book a personalized demo</p>
              </motion.div>
              
              <motion.div
                className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-lg"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-white font-bold text-lg sm:text-xl">GO</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Gael Ongoriko</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">Customer Success</p>
                <p className="text-gray-500 text-xs sm:text-sm">Get onboarding support</p>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-col gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                {...scaleOnHover}
                href="https://wa.me/256709490920?text=Hi%20Nyota!%20I'd%20like%20to%20book%20a%2015-minute%20demo%20to%20learn%20how%20you%20can%20help%20my%20business.%20Looking%20forward%20to%20connecting!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-burgundy-800 to-burgundy-700 hover:from-burgundy-700 hover:to-burgundy-800 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-2xl text-base sm:text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl whitespace-nowrap cursor-pointer flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-burgundy-700 focus:ring-offset-2"
              >
                <span>Book a 15-Minute Demo</span>
                <i className="ri-arrow-right-line ml-2 text-lg sm:text-xl"></i>
              </motion.a>
              <motion.a
                {...scaleOnHover}
                href="https://wa.me/256709490920?text=Hi%20Nyota%2C%20I'd%20like%20a%20demo."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto border-2 border-success-200 hover:border-success-400 bg-success-50 hover:bg-success-100 text-success-700 hover:text-success-800 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-2xl text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-lg whitespace-nowrap cursor-pointer flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-success-500 focus:ring-offset-2"
              >
                <i className="ri-whatsapp-line mr-2 text-lg sm:text-xl"></i>
                <span>Chat on WhatsApp</span>
              </motion.a>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full flex items-center justify-center mb-3">
                  <i className="ri-time-line text-white text-lg sm:text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">15-Minute Setup</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Quick onboarding process</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-trust-400 to-trust-500 rounded-full flex items-center justify-center mb-3">
                  <i className="ri-shield-check-line text-white text-lg sm:text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">No Credit Card</h3>
                <p className="text-gray-600 text-xs sm:text-sm">30-day free trial</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-coral-400 to-coral-500 rounded-full flex items-center justify-center mb-3">
                  <i className="ri-customer-service-2-line text-white text-lg sm:text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">24/7 Support</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Global assistance</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Logo and Social Media */}
          <div className="flex flex-col items-center mb-6 sm:mb-8">
            <motion.div
              className="mb-4 sm:mb-6 bg-white rounded-xl px-6 py-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/logo.png"
                alt="Nyota Logo"
                width={150}
                height={50}
                className="w-auto h-10 sm:h-12"
              />
            </motion.div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-6">
              {[
                { icon: 'ri-linkedin-line', href: '#', label: 'LinkedIn' },
                { icon: 'ri-twitter-line', href: '#', label: 'Twitter' },
                { icon: 'ri-instagram-line', href: '#', label: 'Instagram' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-burgundy-800 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-burgundy-700 focus:ring-offset-2 focus:ring-offset-gray-900"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={`${social.icon} text-lg`}></i>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Legal Links and Copyright */}
          <div className="border-t border-gray-800 pt-6">
            <div className="flex flex-col items-center space-y-4">
              {/* Legal Links */}
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm">
                <Link 
                  href="/privacy" 
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer focus:outline-none focus:text-white"
                >
                  Privacy Policy
                </Link>
                <span className="text-gray-600">•</span>
                <Link 
                  href="/terms" 
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer focus:outline-none focus:text-white"
                >
                  Terms of Service
                </Link>
                <span className="text-gray-600">•</span>
                <Link 
                  href="/cookies" 
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer focus:outline-none focus:text-white"
                >
                  Cookie Policy
                </Link>
              </div>
              
              {/* Copyright */}
              <p className="text-gray-500 text-xs sm:text-sm text-center">
                © {new Date().getFullYear()} Nyota Fusion AI. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
