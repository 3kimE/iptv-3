
import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import MediaCard from "../Common/MediaCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface MediaItem {
  id: string;
  title: string;
  image: string;
  category?: string;
  rating?: number;
  isLive?: boolean;
  currentProgram?: string;
  year?: number;
}

interface MediaCarouselProps {
  title: string;
  subtitle?: string;
  items: MediaItem[];
  type: "movie" | "channel";
  viewAllLink?: string;
  icon?: ReactNode;
  accentColor?: string;
}

const MediaCarousel = ({
  title,
  subtitle,
  items,
  type,
  viewAllLink,
  icon,
  accentColor,
}: MediaCarouselProps) => {
  const bgClass = accentColor ? `bg-${accentColor}/5` : "bg-card";

  return (
    <section className={`py-12 ${bgClass}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                {icon && <span>{icon}</span>}
                <h2 className="text-2xl font-bold">{title}</h2>
              </div>
              {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
            </div>
            
            {viewAllLink && (
              <Button variant="ghost" className="group" asChild>
                <Link to={viewAllLink}>
                  View All 
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
              {items.map((item) => (
                <CarouselItem key={item.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5">
                  <MediaCard
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    type={type}
                    category={item.category}
                    rating={item.rating}
                    isLive={item.isLive}
                    currentProgram={item.currentProgram}
                    year={item.year}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-end gap-2 mt-4">
              <CarouselPrevious className="relative -translate-y-0 h-8 w-8 rounded-full" />
              <CarouselNext className="relative -translate-y-0 h-8 w-8 rounded-full" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default MediaCarousel;
