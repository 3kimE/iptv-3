
import React from "react";
import { Tv, Film, Globe, Smartphone, Zap, Shield, Clock, Wifi } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Tv size={24} />,
    title: "Live TV Channels",
    description: "Access thousands of channels from around the world"
  },
  {
    icon: <Film size={24} />,
    title: "Movies & Series",
    description: "Enjoy the latest blockbusters and TV series"
  },
  {
    icon: <Globe size={24} />,
    title: "International Content",
    description: "Content in multiple languages from various countries"
  },
  {
    icon: <Smartphone size={24} />,
    title: "Multi-device Support",
    description: "Watch on TVs, phones, tablets, and computers"
  },
  {
    icon: <Zap size={24} />,
    title: "High-speed Streaming",
    description: "Buffer-free viewing with our optimized servers"
  },
  {
    icon: <Clock size={24} />,
    title: "24/7 Support",
    description: "Our technical team is always available to help"
  },
  {
    icon: <Shield size={24} />,
    title: "Secure Connection",
    description: "Encrypted streaming for your privacy and security"
  },
  {
    icon: <Wifi size={24} />,
    title: "Low Bandwidth Option",
    description: "Optimized streaming for all internet connections"
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-card">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose StreamWave</h2>
          <p className="text-muted-foreground">
            We offer the most comprehensive streaming solution with unmatched features and reliability
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 card-hover"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
