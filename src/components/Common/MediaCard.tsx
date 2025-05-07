
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Info, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface MediaCardProps {
  id: string;
  title: string;
  image: string;
  type: "movie" | "channel";
  category?: string;
  rating?: number;
  isLive?: boolean;
  currentProgram?: string;
  year?: number;
}

const MediaCard = ({
  id,
  title,
  image,
  type,
  category,
  rating,
  isLive,
  currentProgram,
  year,
}: MediaCardProps) => {
  const detailUrl = type === "movie" ? `/movie/${id}` : `/channel/${id}`;
  
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full bg-card border-border/50 hover:border-primary/50 transition-colors group">
        <CardContent className="p-0 h-full flex flex-col">
          <div className="relative aspect-[2/3] overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="absolute top-2 right-2 flex flex-col gap-1.5">
              {isLive && <Badge variant="live">LIVE</Badge>}
              {rating && (
                <Badge variant="secondary" className="bg-yellow-500/90 text-black backdrop-blur-sm flex items-center gap-0.5">
                  <Star className="h-3 w-3 fill-black" /> {rating.toFixed(1)}
                </Badge>
              )}
              {year && (
                <Badge variant="secondary" className="bg-white/10 backdrop-blur-sm">
                  {year}
                </Badge>
              )}
              {category && (
                <Badge variant="secondary" className="bg-primary/20 backdrop-blur-sm border border-primary/20">
                  {category}
                </Badge>
              )}
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col gap-2">
                <Button variant="accent" size="sm" className="rounded-full" asChild>
                  <Link to={detailUrl}>
                    <Play className="h-4 w-4 mr-1" /> {isLive ? "Watch Now" : "Play"}
                  </Link>
                </Button>
                
                <Button variant="secondary" size="sm" className="rounded-full bg-white/10" asChild>
                  <Link to={detailUrl}>
                    <Info className="h-4 w-4 mr-1" /> Details
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="p-3 flex-grow flex flex-col">
            <h3 className="font-medium line-clamp-1 group-hover:text-primary transition-colors">{title}</h3>
            {currentProgram && (
              <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                Now: {currentProgram}
              </p>
            )}
            
            <div className="mt-auto pt-2">
              {isLive && (
                <div className="w-full bg-muted h-0.5 rounded overflow-hidden mt-1">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-primary via-accent to-primary"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: "100%", 
                      transition: { 
                        repeat: Infinity, 
                        duration: 3, 
                        ease: "linear" 
                      }
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MediaCard;
