
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ChannelGrid from "@/components/ChannelGrid";
import CategoryList from "@/components/CategoryList";
import LivePlayer from "@/components/LivePlayer";
import MovieCard from "@/components/MovieCard";
import SubscriptionPackages from "@/components/SubscriptionPackages";
import { categories, featuredChannels, trendingChannels, liveChannels, channels, popularMovies, trendingMovies } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const filteredChannels = selectedCategory === "all" 
    ? channels 
    : channels.filter(channel => channel.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="container py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Premium Packages</h2>
            <SubscriptionPackages />
          </div>
        </motion.div>
        
        <div className="bg-gradient-to-r from-iptv-900 to-background py-12">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-white">Featured Content</h2>
              <LivePlayer 
                channelName="beIN Sports" 
                programTitle="Champions League Live" 
              />
            </motion.div>
          </div>
        </div>
        
        <div className="container py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Popular Movies</h2>
              <Button variant="link" className="text-iptv-500 hover:text-iptv-400 gap-1 group" asChild>
                <a href="/movies">
                  View All
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {popularMovies.map((movie) => (
                <MovieCard key={movie.id} {...movie} />
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="bg-gradient-to-br from-iptv-900 to-iptv-800 py-12">
          <div className="container">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Live Channels</h2>
              <Button variant="link" className="text-iptv-300 hover:text-iptv-200" asChild>
                <a href="/categories">View All</a>
              </Button>
            </div>
            
            <div className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-none snap-x">
              {liveChannels.map((channel) => (
                <div 
                  key={channel.id} 
                  className="flex-none w-72 pr-4 snap-start"
                >
                  <div className="channel-card overflow-hidden group">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={channel.logo}
                        alt={channel.name}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                      />
                      <div className="live-badge">LIVE</div>
                    </div>
                    <div className="p-3 space-y-2 bg-card">
                      <h3 className="font-semibold text-base line-clamp-1">{channel.name}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-1">
                        Now: {channel.currentProgram}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="container py-12">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Trending Movies</h2>
              <Button variant="link" className="text-iptv-500 hover:text-iptv-400 gap-1 group" asChild>
                <a href="/movies">
                  View All
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {trendingMovies.slice(0, 5).map((movie) => (
                <MovieCard key={movie.id} {...movie} />
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <CategoryList 
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </motion.div>
          
          <ChannelGrid 
            title="Premium Channels" 
            channels={trendingChannels} 
            viewAllLink="/categories" 
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
