
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Info, Star, Play } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface MovieCardProps {
  id: string;
  title: string;
  poster: string;
  genre: string;
  rating: number;
  year: number;
  description?: string;
}

const MovieCard = ({
  id,
  title,
  poster,
  genre,
  rating,
  year,
  description,
}: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className="h-full"
    >
      <Card 
        className="movie-card overflow-hidden h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-0 h-full flex flex-col">
          <div className="relative aspect-[2/3] overflow-hidden">
            <img
              src={poster}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700"
              style={{ transform: isHovered ? 'scale(1.08)' : 'scale(1)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300"
              style={{ opacity: isHovered ? 1 : 0 }}
            />
            <div className="absolute top-2 right-2 flex gap-1.5">
              <Badge variant="secondary" className="bg-yellow-500/90 text-black backdrop-blur-sm flex items-center gap-0.5">
                <Star className="h-3 w-3 fill-black" /> {rating}
              </Badge>
              <Badge variant="secondary" className="bg-background/60 backdrop-blur-sm">
                {year}
              </Badge>
            </div>
            {isHovered && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 opacity-0 transition-opacity duration-300"
                style={{ opacity: isHovered ? 1 : 0 }}
              >
                <Button variant="secondary" size="sm" className="bg-white/90 hover:bg-white text-black gap-1.5 group" asChild>
                  <Link to={`/movies`}>
                    <Play className="h-4 w-4 group-hover:text-iptv-500" /> Watch Trailer
                  </Link>
                </Button>
                <Button variant="outline" size="sm" className="bg-black/50 text-white border-white/30 hover:bg-black/70 gap-1.5" asChild>
                  <Link to={`/movies/${id}`}>
                    <Info className="h-4 w-4" /> More Info
                  </Link>
                </Button>
              </div>
            )}
          </div>
          <div className="p-3 space-y-2 flex-grow flex flex-col">
            <div className="flex flex-col flex-grow">
              <h3 className="font-medium text-base line-clamp-1">{title}</h3>
              <span className="text-xs text-muted-foreground">{genre}</span>
            </div>
            {description && isHovered && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-xs text-muted-foreground line-clamp-2 mt-auto"
              >
                {description}
              </motion.p>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MovieCard;
