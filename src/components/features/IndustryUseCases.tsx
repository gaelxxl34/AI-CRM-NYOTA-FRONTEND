'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function IndustryUseCases() {
  const [showAll, setShowAll] = useState(false);
  const industries = [
    {
      id: 'real-estate',
      icon: '🏢',
      name: 'Real Estate',
      headline: 'Never Miss a Property Lead Again',
      description: 'Auto-capture leads from WhatsApp and property portals. Send instant property updates and schedule viewings automatically.',
      image: '/pngwing.com.png',
      imageAlt: 'Real estate property',
      metric: { label: 'More Sales', value: '+40%' },
      ctaText: 'See How It Works',
      ctaLink: 'https://wa.me/256709490920?text=I%20want%20to%20see%20the%20Real%20Estate%20demo',
      bgColor: 'bg-blue-50',
      accentColor: '#2563eb'
    },
    {
      id: 'education',
      icon: '🎓',
      name: 'Education',
      headline: 'Automate Student Admissions',
      description: 'AI chatbot handles admission inquiries 24/7. Auto-send forms and track each student from inquiry to enrollment.',
      image: '/university.png',
      imageAlt: 'University education',
      metric: { label: 'Less Admin', value: '70%' },
      ctaText: 'See How It Works',
      ctaLink: 'https://wa.me/256709490920?text=I%20want%20to%20see%20the%20Education%20demo',
      bgColor: 'bg-purple-50',
      accentColor: '#9333ea'
    },
    {
      id: 'ecommerce',
      icon: '🛍️',
      name: 'E-commerce',
      headline: 'Recover Abandoned Carts',
      description: 'Track cart abandonment and send personalized WhatsApp reminders with product links and discount codes.',
      image: '/e-commerce.png',
      imageAlt: 'E-commerce shopping',
      metric: { label: 'Cart Recovery', value: '35%' },
      ctaText: 'See How It Works',
      ctaLink: 'https://wa.me/256709490920?text=I%20want%20to%20see%20the%20E-commerce%20demo',
      bgColor: 'bg-orange-50',
      accentColor: '#ea580c'
    },
    {
      id: 'banking',
      icon: '🏦',
      name: 'Banking & Finance',
      headline: 'Reduce Support Costs by 60%',
      description: 'AI chatbot handles balance inquiries, loan applications, and account questions 24/7 via WhatsApp.',
      image: '/bank.jpg',
      imageAlt: 'Banking and financial services',
      metric: { label: 'Less Support Costs', value: '60%' },
      ctaText: 'See How It Works',
      ctaLink: 'https://wa.me/256709490920?text=I%20want%20to%20see%20the%20Banking%20demo',
      bgColor: 'bg-emerald-50',
      accentColor: '#059669'
    },
    {
      id: 'healthcare',
      icon: '🏥',
      name: 'Healthcare',
      headline: 'Cut Patient No-Shows by 50%',
      description: 'Automated appointment booking and WhatsApp reminders ensure patients never miss their visits.',
      image: '/doctor.jpg',
      imageAlt: 'Healthcare and medical services',
      metric: { label: 'Fewer No-Shows', value: '50%' },
      ctaText: 'See How It Works',
      ctaLink: 'https://wa.me/256709490920?text=I%20want%20to%20see%20the%20Healthcare%20demo',
      bgColor: 'bg-teal-50',
      accentColor: '#14b8a6'
    },
    {
      id: 'hospitality',
      icon: '🏨',
      name: 'Hotels & Hospitality',
      headline: 'Increase Direct Bookings by 45%',
      description: 'WhatsApp booking system helps you bypass OTA commissions and connect directly with guests.',
      image: '/hotel.jpg',
      imageAlt: 'Hotel and hospitality services',
      metric: { label: 'More Direct Bookings', value: '+45%' },
      ctaText: 'See How It Works',
      ctaLink: 'https://wa.me/256709490920?text=I%20want%20to%20see%20the%20Hospitality%20demo',
      bgColor: 'bg-rose-50',
      accentColor: '#e11d48'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-midnight-cosmos mb-3">
            Built for Every Industry
          </h2>
          <p className="text-lg text-graphite-gray max-w-2xl mx-auto">
            See how businesses like yours automate growth with Nyota
          </p>
        </motion.div>

        {/* Industry Cards */}
        <div className="space-y-12 sm:space-y-14">
          {industries.slice(0, 3).map((industry, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Image Section */}
                  <div className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className={`relative ${industry.bgColor} rounded-2xl p-6 overflow-hidden`}>
                      <div className="relative z-10">
                        <Image
                          src={industry.image}
                          alt={industry.imageAlt}
                          width={500}
                          height={400}
                          className="w-full h-auto rounded-xl"
                          unoptimized
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    {/* Icon & Category */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-3xl">{industry.icon}</span>
                      <span className="text-base font-semibold text-royal-azure">
                        {industry.name}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-2xl font-bold text-midnight-cosmos mb-3">
                      {industry.headline}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-graphite-gray mb-5 leading-relaxed">
                      {industry.description}
                    </p>

                    {/* Metric Card */}
                    <div className="inline-flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-md border border-gray-100 mb-5">
                      <div className="text-2xl font-bold" style={{ color: industry.accentColor }}>
                        {industry.metric.value}
                      </div>
                      <div className="text-xs text-gray-600 font-medium">
                        {industry.metric.label}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.a
                      href={industry.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold text-base transition-all shadow-md hover:shadow-lg"
                      style={{ backgroundColor: industry.accentColor }}
                    >
                      {industry.ctaText}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Show More Button - Centered between sections */}
          {!showAll && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative py-8"
            >
              {/* Decorative lines */}
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-gray-200"></div>
              </div>
              
              {/* Button container */}
              <div className="relative flex justify-center">
                <motion.button
                  onClick={() => setShowAll(true)}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative bg-white px-6 py-3 group"
                >
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-royal-azure/10 via-sunlit-amber/10 to-royal-azure/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative flex flex-col items-center gap-1.5">
                    <div className="flex items-center gap-2 text-midnight-cosmos font-bold text-base">
                      <span>Explore More Industries</span>
                      <motion.div
                        animate={{ 
                          rotate: [0, 180, 180, 0],
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <svg className="w-5 h-5 text-royal-azure" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </div>
                    
                    {/* Industry badges */}
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-xl">🏦</span>
                      <span className="text-xl">🏥</span>
                      <span className="text-xl">🏨</span>
                      <span className="text-xs text-gray-500 font-medium ml-1">+3 more</span>
                    </div>
                  </div>
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Additional Industries with Smooth Animation */}
          <AnimatePresence mode="wait">
            {showAll && (
              <>
                {industries.slice(3).map((industry, index) => {
                  const isEven = (index + 3) % 2 === 0;
                  
                  return (
                    <motion.div
                      key={industry.id}
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          duration: 0.8,
                          delay: index * 0.2,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }
                      }}
                      className="relative"
                    >
                      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                        {/* Image Section */}
                        <div className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}>
                          <div className={`relative ${industry.bgColor} rounded-2xl p-6 overflow-hidden`}>
                            <div className="relative z-10">
                              <Image
                                src={industry.image}
                                alt={industry.imageAlt}
                                width={500}
                                height={400}
                                className="w-full h-auto rounded-xl"
                                unoptimized
                              />
                            </div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                          {/* Icon & Category */}
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-3xl">{industry.icon}</span>
                            <span className="text-base font-semibold text-royal-azure">
                              {industry.name}
                            </span>
                          </div>

                          {/* Headline */}
                          <h3 className="text-2xl font-bold text-midnight-cosmos mb-3">
                            {industry.headline}
                          </h3>

                          {/* Description */}
                          <p className="text-base text-graphite-gray mb-5 leading-relaxed">
                            {industry.description}
                          </p>

                          {/* Metric Card */}
                          <div className="inline-flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-md border border-gray-100 mb-5">
                            <div className="text-2xl font-bold" style={{ color: industry.accentColor }}>
                              {industry.metric.value}
                            </div>
                            <div className="text-xs text-gray-600 font-medium">
                              {industry.metric.label}
                            </div>
                          </div>

                          {/* CTA Button */}
                          <motion.a
                            href={industry.ctaLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold text-base transition-all shadow-md hover:shadow-lg"
                            style={{ backgroundColor: industry.accentColor }}
                          >
                            {industry.ctaText}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-20 text-center bg-gradient-to-r from-royal-azure to-royal-azure/90 rounded-2xl p-6 sm:p-8 shadow-xl"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Your Industry Not Listed?
          </h3>
          <p className="text-base text-white/90 mb-6 max-w-2xl mx-auto">
            Nyota works for any business. Let's discuss your specific needs.
          </p>
          <motion.a
            href="https://wa.me/256709490920?text=I%20want%20to%20discuss%20Nyota%20for%20my%20industry"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-sunlit-amber hover:bg-[#FFD166] text-midnight-cosmos px-6 py-3 rounded-full font-bold text-base transition-all shadow-lg hover:shadow-xl"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Talk to Our Team
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
