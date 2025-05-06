
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChannelCard from "@/components/ChannelCard";
import { channels } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

// Mock favorite channels (first 3 for the example)
const favoriteChannels = channels.slice(0, 3);

const Favorites = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Your Favorites</h1>
          </div>
          
          {favoriteChannels.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
              {favoriteChannels.map(channel => (
                <ChannelCard key={channel.id} {...channel} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Heart className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-2xl font-bold mb-2">No favorites yet</h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">
                Add your favorite channels to quickly access them anytime. Look for the heart icon while browsing channels.
              </p>
              <Button>Explore Channels</Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Favorites;
