
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import ChannelCard from "./ChannelCard";
import { Link } from "react-router-dom";

interface ChannelCarouselProps {
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

const ChannelCarousel = ({ title, channels, viewAllLink }: ChannelCarouselProps) => {
  return (
    <section className="py-10">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">{title}</h2>
            {viewAllLink && (
              <Button variant="link" className="text-iptv-500 hover:text-iptv-400 gap-1 group" asChild>
                <Link to={viewAllLink}>
                  View All
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            )}
          </div>
          
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {channels.map((channel) => (
                <CarouselItem key={channel.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5">
                  <ChannelCard {...channel} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-4">
              <CarouselPrevious className="relative inset-auto left-0 translate-y-0 mx-1" />
              <CarouselNext className="relative inset-auto right-0 translate-y-0 mx-1" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default ChannelCarousel;
