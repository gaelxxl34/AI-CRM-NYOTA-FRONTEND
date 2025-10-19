'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'agent';
  time: string;
  delay: number;
}

/**
 * PhoneMockup component displays an interactive phone frame with animated WhatsApp conversation
 * Shows real-time lead interaction demonstrating the CRM's WhatsApp-first approach
 */
export function PhoneMockup() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const conversationFlow: Message[] = useMemo(() => [
    {
      id: 1,
      text: "Hi! I'm interested in your MBA program 🎓",
      sender: 'user',
      time: '14:23',
      delay: 1500,
    },
    {
      id: 2,
      text: "Great to hear from you! Our MBA program is perfect for professionals like you. Let me share the details 📚",
      sender: 'agent',
      time: '14:23',
      delay: 2000,
    },
    {
      id: 3,
      text: "What are the admission requirements?",
      sender: 'user',
      time: '14:24',
      delay: 2500,
    },
  ], []);

  useEffect(() => {
    if (currentMessageIndex < conversationFlow.length) {
      const message = conversationFlow[currentMessageIndex];
      
      const timer = setTimeout(() => {
        // Show typing indicator for agent messages
        if (message.sender === 'agent') {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, message]);
            setCurrentMessageIndex(prev => prev + 1);
          }, 1200);
        } else {
          setMessages(prev => [...prev, message]);
          setCurrentMessageIndex(prev => prev + 1);
        }
      }, message.delay);

      return () => clearTimeout(timer);
    } else {
      // Loop the animation after all messages
      const resetTimer = setTimeout(() => {
        setMessages([]);
        setCurrentMessageIndex(0);
      }, 4000);
      
      return () => clearTimeout(resetTimer);
    }
  }, [currentMessageIndex, conversationFlow.length]);

  return (
    <div className="relative w-full max-w-[240px] sm:max-w-[280px] mx-auto">
      {/* Phone Frame - Proper positioning */}
      <div className="relative w-full" style={{ aspectRatio: '380/774' }}>
        {/* Phone Image as Background Frame */}
        <Image
          src="/phone.png"
          alt="iPhone Frame"
          width={380}
          height={774}
          className="w-full h-auto relative z-10 pointer-events-none"
          priority
        />

        {/* Content Overlay - Positioned to fit inside phone screen */}
        <div 
          className="absolute z-20 bg-white rounded-[36px] overflow-hidden"
          style={{
            top: '2.5%',
            left: '4.5%',
            right: '4.5%',
            bottom: '2.5%',
          }}
        >
          {/* WhatsApp Header */}
          <div className="bg-[#075E54] px-3 py-2.5 flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
              <i className="ri-user-line text-gray-600 text-sm"></i>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-semibold text-xs truncate">University Admissions</h3>
              <p className="text-green-200 text-[10px] flex items-center">
                <span className="w-1.5 h-1.5 bg-green-300 rounded-full mr-1 animate-pulse"></span>
                Online
              </p>
            </div>
          </div>

          {/* Chat Area */}
          <div 
            className="h-[calc(100%-100px)] bg-[#ECE5DD] overflow-hidden px-2 py-2"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4d4d4' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          >
            <div className="space-y-1.5">
              {/* Date Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex justify-center my-2"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-md px-2 py-0.5 shadow-sm">
                  <span className="text-[9px] text-gray-600 font-medium">TODAY</span>
                </div>
              </motion.div>

              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`
                        max-w-[75%] rounded-lg px-2 py-1.5 shadow-sm
                        ${message.sender === 'user' 
                          ? 'bg-[#DCF8C6] rounded-tr-none' 
                          : 'bg-white rounded-tl-none'
                        }
                      `}
                    >
                      <p className="text-[10px] sm:text-xs text-gray-800 leading-snug">
                        {message.text}
                      </p>
                      <div className="flex items-center justify-end space-x-1 mt-0.5">
                        <span className="text-[8px] text-gray-500">{message.time}</span>
                        {message.sender === 'user' && (
                          <i className="ri-check-double-line text-blue-500 text-[9px]"></i>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing Indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 shadow-sm">
                      <div className="flex space-x-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                            animate={{ y: [0, -4, 0] }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              delay: i * 0.15,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* WhatsApp Input Area */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#F0F0F0] px-2 py-1.5 flex items-center space-x-1.5">
            <div className="flex-1 bg-white rounded-full px-2.5 py-1.5 flex items-center space-x-1.5">
              <i className="ri-emotion-happy-line text-gray-400 text-sm"></i>
              <span className="flex-1 text-[10px] text-gray-400">Type a message...</span>
              <i className="ri-attachment-line text-gray-400 text-xs"></i>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-7 h-7 bg-[#075E54] rounded-full flex items-center justify-center shadow-md flex-shrink-0"
            >
              <i className="ri-mic-line text-white text-sm"></i>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Simplified Floating Indicators - Only 2, positioned better */}
      <motion.div
        className="absolute top-[12%] -right-3 sm:-right-6 bg-white rounded-xl shadow-xl px-3 py-2 border-2 border-green-200 z-30"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-center">
          <div className="text-xl font-bold text-green-600">87</div>
          <div className="text-[9px] text-gray-500 font-medium whitespace-nowrap">Lead Score</div>
          <div className="text-[10px] font-bold text-green-600">High Intent 🔥</div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[15%] -left-3 sm:-left-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-xl px-3 py-2 max-w-[130px] z-30"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 3.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-start space-x-1.5">
          <motion.i 
            className="ri-robot-2-fill text-white text-base flex-shrink-0"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 4 }}
          />
          <div>
            <div className="text-[8px] text-blue-100 font-semibold mb-0.5">AI Suggests</div>
            <div className="text-[9px] text-white font-medium leading-tight">
              Send pricing now for 76% conversion boost
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

