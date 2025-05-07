
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Info, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] max-h-[900px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://info.haas-avocats.com/hubfs/l%E2%80%99IPTV%20est-elle%20ill%C3%A9gale%20%20Le%20cadre%20juridique%20que%20vous%20ne%20pouvez%20pas%20ignorer%20!.png"
          alt="Champions League"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
      </div>

      <div className="container relative h-full flex items-center pb-16">
        <div className="max-w-xl space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <Badge variant="premium" className="py-1">Premium</Badge>
            <span className="text-accent font-medium">Champions League</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl sm:text-6xl font-bold leading-tight"
          >
            Premium Sports <br/>
            <span className="gradient-text">Without Limits</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg text-white/80"
          >
            Access thousands of premium channels, movies, and shows from around the world. Choose your package and start streaming today.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button size="lg" className="group rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
              <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-125" />
              Browse Packages
            </Button>
            <Button variant="outline" size="lg" className="rounded-full bg-white/5 backdrop-blur-md hover:bg-white/10 border-white/20" asChild>
              <Link to="/contact">
                <Info className="mr-2 h-4 w-4" />
                Contact Us
              </Link>
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden lg:block absolute right-20 bottom-20"
        >
          <div className="relative">
            <div className="w-72 h-96 rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&auto=format&fit=crop&q=60" 
                alt="TV Device" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                <div>
                  <h3 className="text-white font-semibold text-lg">Start Watching</h3>
                  <p className="text-white/80 text-sm">Premium Sports, Movies & TV Shows</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-background/80 backdrop-blur-md shadow-lg">
              <div className="animate-glow rounded-full bg-primary/20 p-2">
                <Play className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <div className="container">
          <div className="flex items-center justify-between py-6 border-t border-white/10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-4"
            >
              <h4 className="text-sm font-medium text-white/80">Featured Sports</h4>
              
              <div className="flex gap-4">
                <Badge variant="secondary" className="bg-white/10 backdrop-blur-sm">Football</Badge>
                <Badge variant="secondary" className="bg-white/10 backdrop-blur-sm">Basketball</Badge>
                <Badge variant="secondary" className="bg-white/10 backdrop-blur-sm">Formula 1</Badge>
                <Badge variant="secondary" className="bg-white/10 backdrop-blur-sm">Tennis</Badge>
              </div>
            </motion.div>
            
            <Button variant="ghost" size="sm" className="text-white/70 hover:text-white" asChild>
              <Link to="/live-tv">
                More Sports <ChevronRight className="h-3 w-3 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
