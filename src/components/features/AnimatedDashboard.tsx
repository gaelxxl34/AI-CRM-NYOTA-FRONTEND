'use client';

import { motion } from 'framer-motion';

/**
 * AnimatedDashboard component displays an interactive, animated CRM dashboard mockup
 * Shows lead scoring, message threads, AI suggestions, and real-time stats
 * Used in hero section to demonstrate product capabilities
 */
export function AnimatedDashboard() {
  return (
    <motion.div
      className="relative z-10"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated Background Blur */}
      <div className="absolute inset-0 bg-gradient-to-r from-burgundy-800/20 to-orange-500/20 rounded-xl sm:rounded-2xl blur-2xl transform rotate-3"></div>
      
      {/* Dashboard Container */}
      <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
        {/* Dashboard Header */}
        <div className="bg-gradient-to-r from-burgundy-800 to-burgundy-700 p-3 sm:p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white/80 rounded-full"></div>
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
          </div>
          <div className="text-white text-xs sm:text-sm font-semibold flex items-center space-x-2">
            <i className="ri-star-fill text-orange-300"></i>
            <span>Nyota CRM Live Dashboard</span>
          </div>
          <div className="flex items-center space-x-1">
            <motion.div 
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-white text-xs hidden sm:inline">Live</span>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-4 sm:p-6 space-y-4">
          {/* Lead Score Animation */}
          <motion.div
            className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-3 sm:p-4 border border-green-200"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '100%', opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <i className="ri-user-star-line text-green-700 text-lg"></i>
                <span className="text-xs sm:text-sm font-semibold text-green-800">Lead Quality Score</span>
              </div>
              <motion.span
                className="text-lg sm:text-2xl font-bold text-green-600"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                87/100
              </motion.span>
            </div>
            <motion.div
              className="h-2 bg-white rounded-full overflow-hidden shadow-inner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-green-500 to-green-600 relative"
                initial={{ width: 0 }}
                animate={{ width: '87%' }}
                transition={{ duration: 1, delay: 1.6, ease: 'easeOut' }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/30"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>
            </motion.div>
            <motion.p
              className="text-xs text-green-700 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
            >
              High intent • Engaged user • Ready for follow-up
            </motion.p>
          </motion.div>

          {/* WhatsApp Message Thread Animation */}
          <div className="space-y-2 bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200">
            <div className="flex items-center space-x-2 mb-3">
              <i className="ri-whatsapp-fill text-green-600 text-lg"></i>
              <span className="text-xs font-semibold text-gray-700">WhatsApp Conversation</span>
              <span className="ml-auto text-xs text-gray-500">Just now</span>
            </div>
            
            {[
              { 
                delay: 2, 
                text: 'Hi! I\'m interested in your MBA program 🎓', 
                align: 'left', 
                bg: 'bg-white',
                time: '14:23'
              },
              { 
                delay: 2.5, 
                text: 'Great to hear! Let me send you the details', 
                align: 'right', 
                bg: 'bg-burgundy-100',
                time: '14:23'
              },
              { 
                delay: 3, 
                text: 'What are the admission requirements?', 
                align: 'left', 
                bg: 'bg-white',
                time: '14:24'
              },
            ].map((message, index) => (
              <motion.div
                key={index}
                className={`flex ${message.align === 'right' ? 'justify-end' : 'justify-start'}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: message.delay }}
              >
                <div className={`${message.bg} rounded-lg px-3 py-2 max-w-[75%] shadow-sm border border-gray-200`}>
                  <p className="text-xs sm:text-sm text-gray-700">{message.text}</p>
                  <span className="text-[10px] text-gray-400 mt-1 block">{message.time}</span>
                </div>
              </motion.div>
            ))}
            
            {/* Typing Indicator */}
            <motion.div
              className="flex justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3.5 }}
            >
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200">
                <div className="flex space-x-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-gray-400 rounded-full"
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* AI Suggestion Animation */}
          <motion.div
            className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-lg p-3 sm:p-4 shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 4 }}
          >
            <div className="flex items-center space-x-2 mb-2">
              <motion.i 
                className="ri-robot-2-fill text-blue-600 text-lg"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 4.5 }}
              />
              <span className="text-xs sm:text-sm font-semibold text-blue-800">AI Recommendation</span>
              <span className="ml-auto bg-blue-200 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-full">NEW</span>
            </div>
            <p className="text-xs sm:text-sm text-blue-700 font-medium">
              📞 Follow up in 3 hours for 76% higher response rate
            </p>
            <motion.button
              className="mt-2 text-xs bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.5 }}
            >
              Schedule Follow-up
            </motion.button>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {[
              { 
                label: 'New Leads', 
                value: '24', 
                icon: 'ri-user-add-line', 
                color: 'text-burgundy-700',
                bgColor: 'bg-burgundy-50',
                delay: 4.5 
              },
              { 
                label: 'Responses', 
                value: '18', 
                icon: 'ri-message-2-line', 
                color: 'text-orange-600',
                bgColor: 'bg-orange-50',
                delay: 4.7 
              },
              { 
                label: 'Converted', 
                value: '12', 
                icon: 'ri-checkbox-circle-line', 
                color: 'text-green-600',
                bgColor: 'bg-green-50',
                delay: 4.9 
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className={`${stat.bgColor} rounded-lg p-2 sm:p-3 text-center border border-gray-200 shadow-sm`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: stat.delay }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <motion.i 
                  className={`${stat.icon} ${stat.color} text-lg sm:text-xl mb-1 block`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: stat.delay + 0.5 }}
                />
                <motion.div 
                  className="text-lg sm:text-2xl font-bold text-gray-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: stat.delay + 0.2 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-[10px] sm:text-xs text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Status Bar */}
          <motion.div
            className="flex items-center justify-between pt-3 border-t border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5.2 }}
          >
            <div className="flex items-center space-x-2">
              <motion.div
                className="w-2 h-2 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-xs text-gray-600">All systems operational</span>
            </div>
            <span className="text-xs text-gray-500">Updated 2s ago</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
