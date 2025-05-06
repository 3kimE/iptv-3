
import React from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1600&auto=format&fit=crop&q=80"
          alt="Featured content"
          className="h-full w-full object-cover"
        />
        <div className="gradient-overlay"></div>
      </div>

      <div className="container relative h-full flex items-end pb-16">
        <div className="max-w-lg animate-slide-in space-y-4">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-iptv-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Live Now
            </span>
            <span className="text-iptv-accent font-medium">Featured</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            World Sports Championship 2025
          </h1>
          
          <p className="text-lg text-white/80">
            Watch the most anticipated sporting event of the year with exclusive commentary and behind-the-scenes content.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <Button size="lg" className="group">
              <Play className="mr-2 h-4 w-4 group-hover:animate-pulse-subtle" />
              Watch Live
            </Button>
            <Button variant="outline" size="lg" className="bg-background/30 backdrop-blur-sm hover:bg-background/50">
              Add to Favorites
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
