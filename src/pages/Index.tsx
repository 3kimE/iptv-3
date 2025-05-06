
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CategoryList from "@/components/CategoryList";
import SubscriptionPackages from "@/components/SubscriptionPackages";
import MovieCarousel from "@/components/MovieCarousel";
import ChannelCarousel from "@/components/ChannelCarousel";
import { categories, featuredChannels, trendingChannels, liveChannels, channels, popularMovies, trendingMovies } from "@/data/mockData";
import { motion } from "framer-motion";

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
          id="packages"
        >
          <div className="container py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Premium Packages</h2>
            <SubscriptionPackages />
          </div>
        </motion.div>
        
        <div className="bg-gradient-to-r from-iptv-900 to-background">
          <MovieCarousel
            title="Popular Movies"
            movies={popularMovies}
            viewAllLink="/movies"
          />
        </div>
        
        <div className="container py-8">
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
        </div>
        
        <div className="bg-gradient-to-br from-iptv-900 to-iptv-800">
          <ChannelCarousel
            title="Live Channels"
            channels={liveChannels}
            viewAllLink="/categories"
          />
        </div>
        
        <div className="container">
          <MovieCarousel
            title="Trending Movies"
            movies={trendingMovies}
            viewAllLink="/movies"
          />
        </div>
        
        <ChannelCarousel 
          title="Premium Channels" 
          channels={trendingChannels} 
          viewAllLink="/categories" 
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
