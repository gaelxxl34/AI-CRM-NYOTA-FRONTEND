'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  Workflow, 
  Users, 
  BarChart3, 
  Zap, 
  Shield 
} from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    id: 'whatsapp',
    icon: MessageSquare,
    title: 'WhatsApp Integration',
    label: 'Connect & Convert',
    description: 'Capture leads instantly from WhatsApp and manage all conversations in one unified inbox.',
    benefits: [
      'Auto-capture leads from WhatsApp Business',
      'Unified inbox for all messages',
      'Automated responses & follow-ups',
      'Rich media support (images, docs, voice)'
    ],
    stat: '10x',
    statLabel: 'Faster Response Time',
    visual: 'whatsapp-demo' // We'll create this visual
  },
  {
    id: 'workflows',
    icon: Workflow,
    title: 'Smart Workflows',
    label: 'Automate Everything',
    description: 'Build custom sales pipelines with drag-and-drop automation that matches your exact process.',
    benefits: [
      'Drag-and-drop workflow builder',
      'Trigger-based automations',
      'Custom pipeline stages',
      'Automated task assignments'
    ],
    stat: '3x',
    statLabel: 'More Conversions',
    visual: 'workflow-demo'
  },
  {
    id: 'team',
    icon: Users,
    title: 'Team Management',
    label: 'Collaborate Seamlessly',
    description: 'Assign leads, track performance, and collaborate with your team in real-time.',
    benefits: [
      'Role-based access control',
      'Lead assignment & routing',
      'Team performance tracking',
      'Internal notes & collaboration'
    ],
    stat: '100%',
    statLabel: 'Team Visibility',
    visual: 'team-demo'
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Revenue Analytics',
    label: 'Data-Driven Growth',
    description: 'Track every metric that matters with real-time dashboards and custom reports.',
    benefits: [
      'Real-time revenue tracking',
      'Conversion rate analytics',
      'Custom report builder',
      'Forecast & pipeline insights'
    ],
    stat: '35%',
    statLabel: 'Revenue Growth',
    visual: 'analytics-demo'
  },
  {
    id: 'ai',
    icon: Zap,
    title: 'AI Automation',
    label: 'Smart & Efficient',
    description: 'Let AI handle repetitive tasks while you focus on closing deals and growing revenue.',
    benefits: [
      'Smart lead scoring',
      'AI-powered follow-ups',
      'Predictive insights',
      'Automated data entry'
    ],
    stat: '20hrs',
    statLabel: 'Saved Per Week',
    visual: 'ai-demo'
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Enterprise Security',
    label: 'Protected 24/7',
    description: 'Bank-level encryption and compliance to keep your customer data safe and secure.',
    benefits: [
      'Bank-level encryption',
      'Role-based permissions',
      'Automatic backups',
      'GDPR compliant'
    ],
    stat: '99.9%',
    statLabel: 'Uptime SLA',
    visual: 'security-demo'
  }
];

export default function KeyFeaturesShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const activeFeature = features[activeTab];
  const Icon = activeFeature.icon;

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-royal-azure/10 via-royal-azure/15 to-royal-azure/5 border-y border-royal-azure/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-midnight-cosmos mb-4 leading-tight">
            Everything you need to close more deals
          </h2>
          <p className="text-graphite-gray text-base sm:text-lg max-w-3xl mx-auto">
            Explore the features that make Nyota the most powerful CRM for African businesses.
          </p>
        </motion.div>

        {/* Tabs Navigation - Pill Style */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-full p-1.5 shadow-sm border border-gray-200">
            {features.map((feature, index) => {
              const TabIcon = feature.icon;
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(index)}
                  className={`
                    relative px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300
                    ${activeTab === index 
                      ? 'bg-midnight-cosmos text-white shadow-md' 
                      : 'text-graphite-gray hover:text-midnight-cosmos'
                    }
                  `}
                >
                  <span className="hidden sm:inline">{feature.title}</span>
                  <span className="sm:hidden flex items-center justify-center">
                    <TabIcon className="w-4 h-4" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feature Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Content */}
              <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                {/* Icon & Label */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-royal-azure/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-royal-azure" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-bold text-royal-azure uppercase tracking-wider">
                    {activeFeature.label}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl md:text-3xl font-bold text-midnight-cosmos mb-3 leading-snug">
                  {activeFeature.title}
                </h3>
                <p className="text-graphite-gray text-base leading-relaxed mb-6">
                  {activeFeature.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-3 mb-6">
                  {activeFeature.benefits.map((benefit, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-graphite-gray text-sm leading-relaxed">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Stat */}
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-royal-azure/10 to-purple-500/10 rounded-xl px-5 py-4 border border-royal-azure/20">
                  <div>
                    <div className="text-3xl font-bold text-royal-azure">
                      {activeFeature.stat}
                    </div>
                    <div className="text-xs text-graphite-gray font-medium">
                      {activeFeature.statLabel}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Visual Demo */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50/30 p-8 md:p-10 flex items-center justify-center relative min-h-[400px] lg:min-h-[500px]">
                {/* Demo Visual */}
                <FeatureVisual type={activeFeature.visual} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/256709490920"
            className="inline-flex items-center gap-3 bg-royal-azure hover:bg-royal-azure/90 text-white px-8 py-4 rounded-full font-bold text-base transition-all shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            See It In Action
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

// Feature Visual Component - Placeholder for now, you can replace with actual images/animations
function FeatureVisual({ type }: { type: string }) {
  const visuals: Record<string, JSX.Element> = {
    'whatsapp-demo': (
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-200">
          {/* WhatsApp chat mockup */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-semibold text-midnight-cosmos">Customer Inquiry</div>
              <div className="text-sm text-green-500 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Active now
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                <p className="text-sm text-midnight-cosmos">Hi, I'm interested in your services</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-royal-azure rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                <p className="text-sm text-white">Thanks for reaching out! Let me help you...</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-green-600 bg-green-50 px-3 py-2 rounded-lg">
              <Zap className="w-4 h-4" />
              Auto-captured & assigned to sales team
            </div>
          </div>
        </div>
      </div>
    ),
    'workflow-demo': (
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-200">
          <div className="space-y-4">
            {/* Workflow stages */}
            {['New Lead', 'Contacted', 'Qualified', 'Proposal', 'Closed'].map((stage, idx) => (
              <motion.div
                key={stage}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  idx <= 2 ? 'bg-royal-azure text-white' : 'bg-gray-100 text-gray-400'
                }`}>
                  {idx <= 2 ? '✓' : idx + 1}
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg px-4 py-3">
                  <div className="font-semibold text-midnight-cosmos text-sm">{stage}</div>
                </div>
                {idx <= 2 && <Zap className="w-5 h-5 text-sunlit-amber" />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    ),
    'team-demo': (
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-200">
          <div className="space-y-4">
            {[
              { name: 'Sarah Johnson', role: 'Sales Manager', leads: 24, color: 'bg-blue-500' },
              { name: 'Mike Chen', role: 'Sales Rep', leads: 18, color: 'bg-purple-500' },
              { name: 'Anna Williams', role: 'Sales Rep', leads: 15, color: 'bg-green-500' }
            ].map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
              >
                <div className={`w-12 h-12 ${member.color} rounded-full flex items-center justify-center text-white font-bold`}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-midnight-cosmos">{member.name}</div>
                  <div className="text-sm text-graphite-gray">{member.role}</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-royal-azure">{member.leads}</div>
                  <div className="text-xs text-graphite-gray">Active leads</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    ),
    'analytics-demo': (
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-200">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Revenue', value: '$45.2K', change: '+12%', color: 'text-green-600' },
                { label: 'Conversion', value: '24.5%', change: '+8%', color: 'text-green-600' },
                { label: 'Leads', value: '342', change: '+35%', color: 'text-green-600' },
                { label: 'Avg Deal', value: '$2.1K', change: '+5%', color: 'text-green-600' }
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gray-50 rounded-xl p-4"
                >
                  <div className="text-xs text-graphite-gray mb-1">{stat.label}</div>
                  <div className="text-2xl font-bold text-midnight-cosmos mb-1">{stat.value}</div>
                  <div className={`text-xs font-semibold ${stat.color}`}>{stat.change}</div>
                </motion.div>
              ))}
            </div>
            {/* Simple bar chart */}
            <div className="flex items-end gap-2 h-32">
              {[60, 75, 85, 70, 90, 95, 88].map((height, idx) => (
                <motion.div
                  key={idx}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex-1 bg-gradient-to-t from-royal-azure to-purple-500 rounded-t-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    'ai-demo': (
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-200">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-sunlit-amber" />
              <span className="font-semibold text-midnight-cosmos">AI Assistant Active</span>
            </div>
            {[
              { task: 'Lead scored', score: 'High priority', icon: '🎯' },
              { task: 'Follow-up scheduled', time: 'Tomorrow 10am', icon: '📅' },
              { task: 'Email drafted', status: 'Ready to send', icon: '✉️' },
              { task: 'Data enriched', info: '5 new fields', icon: '📊' }
            ].map((item, idx) => (
              <motion.div
                key={item.task}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="flex items-center gap-3 p-4 bg-gradient-to-r from-sunlit-amber/10 to-transparent rounded-xl border border-sunlit-amber/20"
              >
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1">
                  <div className="font-semibold text-midnight-cosmos text-sm">{item.task}</div>
                  <div className="text-xs text-graphite-gray">{item.score || item.time || item.status || item.info}</div>
                </div>
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    ),
    'security-demo': (
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-200">
          <div className="space-y-4">
            {[
              { feature: 'Data Encryption', status: 'Active', icon: Shield, color: 'text-green-600' },
              { feature: 'Two-Factor Auth', status: 'Enabled', icon: Shield, color: 'text-green-600' },
              { feature: 'Daily Backups', status: 'Running', icon: Shield, color: 'text-green-600' },
              { feature: 'Access Control', status: 'Configured', icon: Shield, color: 'text-green-600' },
              { feature: 'Audit Logs', status: 'Monitoring', icon: Shield, color: 'text-green-600' }
            ].map((item, idx) => (
              <motion.div
                key={item.feature}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200"
              >
                <div className="flex items-center gap-3">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="font-semibold text-midnight-cosmos text-sm">{item.feature}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-green-700 font-medium">{item.status}</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  };

  return visuals[type] || <div className="text-graphite-gray">Feature demo coming soon</div>;
}
