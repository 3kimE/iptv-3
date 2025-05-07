
import React from 'react';
import { motion } from 'framer-motion';

export const WhatsappButton = () => {
  const phoneNumber = "+1234567890"; // Replace with your actual WhatsApp number
  const message = "Hello, I'm interested in your IPTV service!";
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.button
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3.5 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-whatsapp"
      >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
        <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
        <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
      </svg>
    </motion.button>
  );
};
