
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LivePlayer from "@/components/LivePlayer";
import CategoryList from "@/components/CategoryList";
import { categories, liveChannels } from "@/data/mockData";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

const LiveTV = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeChannel, setActiveChannel] = useState(liveChannels[0]);
  
  const filteredChannels = selectedCategory === "all" 
    ? liveChannels 
    : liveChannels.filter(channel => channel.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-6">Live TV</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <LivePlayer 
                channelName={activeChannel.name} 
                programTitle={activeChannel.currentProgram || ""} 
              />
              <div className="mt-4">
                <h2 className="text-2xl font-bold mb-2">{activeChannel.name}</h2>
                <p className="text-muted-foreground">
                  {activeChannel.currentProgram}
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="sticky top-20">
                <h3 className="text-lg font-semibold mb-4">Live Channels</h3>
                <CategoryList 
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                />
                
                <div className="mt-4 space-y-2 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
                  {filteredChannels.map(channel => (
                    <Card 
                      key={channel.id} 
                      className={`flex items-center p-2 cursor-pointer transition-colors ${
                        activeChannel.id === channel.id ? 'bg-iptv-700/20 ring-1 ring-iptv-500' : ''
                      }`}
                      onClick={() => setActiveChannel(channel)}
                    >
                      <div className="w-16 h-16 mr-3 rounded overflow-hidden flex-shrink-0">
                        <img 
                          src={channel.logo} 
                          alt={channel.name} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-medium line-clamp-1">{channel.name}</h4>
                        <p className="text-xs text-muted-foreground line-clamp-1">
                          {channel.currentProgram}
                        </p>
                      </div>
                      <div className="ml-2">
                        <div className={`p-2 rounded-full ${
                          activeChannel.id === channel.id ? 'bg-iptv-500 text-white' : 'bg-secondary text-foreground'
                        }`}>
                          <Play size={16} />
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LiveTV;
