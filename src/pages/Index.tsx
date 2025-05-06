
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ChannelGrid from "@/components/ChannelGrid";
import CategoryList from "@/components/CategoryList";
import LivePlayer from "@/components/LivePlayer";
import { categories, featuredChannels, trendingChannels, liveChannels, channels } from "@/data/mockData";

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
        
        <div className="container py-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Continue Watching</h2>
            <LivePlayer 
              channelName="Sports Network" 
              programTitle="World Championship 2025" 
            />
          </div>
        </div>
        
        <div className="container mb-4">
          <CategoryList 
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
        
        <ChannelGrid 
          title="Featured Channels" 
          channels={filteredChannels.slice(0, 5)} 
          viewAllLink="/featured" 
        />
        
        <section className="py-8 bg-gradient-to-br from-iptv-900 to-iptv-800">
          <div className="container">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Live Now</h2>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
              {liveChannels.map(channel => (
                <div key={channel.id} className="channel-card overflow-hidden group">
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
              ))}
            </div>
          </div>
        </section>
        
        <ChannelGrid 
          title="Popular Channels" 
          channels={trendingChannels} 
          viewAllLink="/popular" 
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
