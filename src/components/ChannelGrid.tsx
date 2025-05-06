
import React from "react";
import ChannelCard from "./ChannelCard";
import { Button } from "@/components/ui/button";

interface Category {
  id: string;
  name: string;
}

interface ChannelGridProps {
  title: string;
  channels: Array<{
    id: string;
    name: string;
    logo: string;
    category: string;
    isLive?: boolean;
    currentProgram?: string;
  }>;
  viewAllLink?: string;
}

const ChannelGrid = ({ title, channels, viewAllLink }: ChannelGridProps) => {
  return (
    <section className="py-8">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          {viewAllLink && (
            <Button variant="link" className="text-iptv-500 hover:text-iptv-400">
              View All
            </Button>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
          {channels.map((channel) => (
            <ChannelCard key={channel.id} {...channel} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChannelGrid;
