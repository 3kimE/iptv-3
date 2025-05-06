
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChannelCard from "@/components/ChannelCard";
import { categories, channels } from "@/data/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Categories = () => {
  const [selectedTab, setSelectedTab] = useState(categories[0].id);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-6">Categories</h1>
          
          <Tabs defaultValue={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="text-center py-3"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
                  {category.id === "all" 
                    ? channels.map(channel => (
                        <ChannelCard key={channel.id} {...channel} />
                      ))
                    : channels
                        .filter(channel => channel.category === category.id)
                        .map(channel => (
                          <ChannelCard key={channel.id} {...channel} />
                        ))
                  }
                  
                  {/* If no channels for a category, show empty state */}
                  {category.id !== "all" && 
                    channels.filter(channel => channel.category === category.id).length === 0 && (
                    <div className="col-span-full py-12 text-center">
                      <h3 className="text-xl font-medium mb-2">No channels found</h3>
                      <p className="text-muted-foreground">
                        There are no channels in this category yet.
                      </p>
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
