
import React from "react";
import { Button } from "@/components/ui/button";
import { Play, Info } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1600&auto=format&fit=crop&q=80"
          alt="Featured content"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent" />
      </div>

      <div className="container relative h-full flex items-center pb-16">
        <div className="max-w-lg space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="rounded-full bg-iptv-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Premium
            </span>
            <span className="text-iptv-accent font-medium">Featured</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl sm:text-6xl font-bold text-white leading-tight"
          >
            Premium Streaming <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-iptv-400 to-iptv-accent">
              Without Limits
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg text-white/90"
          >
            Access thousands of premium channels, movies, and shows from around the world. Choose your package and start streaming today.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button size="lg" className="group bg-gradient-to-r from-iptv-600 to-iptv-500 hover:from-iptv-700 hover:to-iptv-600 border-none">
              <Play className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              Browse Packages
            </Button>
            <Button variant="outline" size="lg" className="bg-background/30 backdrop-blur-sm hover:bg-background/50 border-white/20">
              <Info className="mr-2 h-4 w-4" />
              Learn More
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden lg:block absolute right-20 bottom-20 w-72 h-96 rounded-xl overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&auto=format&fit=crop&q=60" 
            alt="TV Device" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
            <div>
              <h3 className="text-white font-semibold text-lg">Start Watching</h3>
              <p className="text-white/80 text-sm">Premium Sports, Movies & TV Shows</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
