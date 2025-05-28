
import React, { useState } from "react";
import MainNav from "@/components/Navigation/MainNav";
import MainFooter from "@/components/Footer/MainFooter";
import MediaCard from "@/components/Common/MediaCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal, Tv } from "lucide-react";
import { motion } from "framer-motion";

import { WhatsappButton } from "@/components/WhatsappButton";
// Mock categories
const categories = [
  { id: "all", name: "All Channels" },
  { id: "sports", name: "Sports" },
  { id: "news", name: "News" },
  { id: "entertainment", name: "Entertainment" },
  { id: "movies", name: "Movies" },
  { id: "kids", name: "Kids" },
  { id: "music", name: "Music" },
  { id: "documentary", name: "Documentary" },
];

// Mock channels data
const allChannels = [
  {
    id: "c1",
    title: "Sports Plus",
    image: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=500&auto=format&fit=crop&q=60",
    category: "sports",
    isLive: true,
    currentProgram: "Champions League Final"
  },
  {
    id: "c2",
    title: "News 24",
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=500&auto=format&fit=crop&q=60",
    category: "news",
    isLive: true,
    currentProgram: "World Report"
  },
  {
    id: "c3",
    title: "Movie Central",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&auto=format&fit=crop&q=60",
    category: "movies",
    isLive: true,
    currentProgram: "The Blockbuster Show"
  },
  {
    id: "c4",
    title: "Kids Zone",
    image: "https://images.unsplash.com/photo-1597340310329-1087c3721289?w=500&auto=format&fit=crop&q=60",
    category: "kids",
    isLive: true,
    currentProgram: "Animated Adventures"
  },
  {
    id: "c5",
    title: "Music TV",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop&q=60",
    category: "music",
    isLive: true,
    currentProgram: "Top 40 Countdown"
  },
  {
    id: "c6",
    title: "Premier Sports",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=500&auto=format&fit=crop&q=60",
    category: "sports",
    isLive: true,
    currentProgram: "NBA Finals"
  },
  {
    id: "c7",
    title: "Nature World",
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=500&auto=format&fit=crop&q=60",
    category: "documentary",
    isLive: true,
    currentProgram: "Wild Africa"
  },
  {
    id: "c8",
    title: "Comedy Central",
    image: "https://images.unsplash.com/photo-1607601799024-bef746413678?w=500&auto=format&fit=crop&q=60",
    category: "entertainment",
    isLive: true,
    currentProgram: "Stand-up Special"
  },
  {
    id: "c9",
    title: "Drama Network",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=60",
    category: "entertainment",
    isLive: true,
    currentProgram: "Crime Scene"
  },
  {
    id: "c10",
    title: "Food & Travel",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&auto=format&fit=crop&q=60",
    category: "entertainment",
    isLive: true,
    currentProgram: "Global Cuisine"
  },
  {
    id: "c11",
    title: "History Channel",
    image: "https://images.unsplash.com/photo-1461360228754-6e81c478b882?w=500&auto=format&fit=crop&q=60",
    category: "documentary",
    isLive: true,
    currentProgram: "Ancient Civilizations"
  },
  {
    id: "c12",
    title: "Action Movies",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=60",
    category: "movies",
    isLive: true,
    currentProgram: "Die Hard Marathon"
  },
];

const LiveTVPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredChannels = allChannels
    .filter(channel => 
      selectedCategory === "all" || channel.category === selectedCategory
    )
    .filter(channel => 
      channel.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/20 via-background to-background py-16">
          <div className="container">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl font-bold mb-4"
                >
                  Live TV Streaming
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-muted-foreground mb-6"
                >
                  Watch thousands of live TV channels from around the world. Sports, news, entertainment, and more - all in one place.
                </motion.p>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex-shrink-0 relative"
              >
                <div className="h-28 w-28 lg:h-40 lg:w-40 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-subtle">
                  <Tv className="h-12 w-12 lg:h-16 lg:w-16 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-xs font-bold">{allChannels.length}+</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Filters Section */}
        <section className="py-8 bg-card border-y border-border">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "secondary"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
              
              <div className="flex gap-2">
                <div className="relative w-full md:w-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search channels..."
                    className="pl-10 w-full md:w-auto"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="icon">
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Channels Grid */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredChannels.map((channel, index) => (
                <motion.div
                  key={channel.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <MediaCard
                    id={channel.id}
                    title={channel.title}
                    image={channel.image}
                    type="channel"
                    category={channel.category}
                    isLive={channel.isLive}
                    currentProgram={channel.currentProgram}
                  />
                </motion.div>
              ))}
            </div>
            
            {filteredChannels.length === 0 && (
              <div className="py-12 text-center">
                <h3 className="text-2xl font-semibold mb-2">No channels found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <MainFooter />
       <WhatsappButton />
    </div>
  );
};

export default LiveTVPage;
