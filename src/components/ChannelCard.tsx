
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ChannelCardProps {
  id: string;
  name: string;
  logo: string;
  category: string;
  isLive?: boolean;
  currentProgram?: string;
}

const ChannelCard = ({
  id,
  name,
  logo,
  category,
  isLive = false,
  currentProgram,
}: ChannelCardProps) => {
  return (
    <Link to={`/categories?category=${category}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={{ y: -5 }}
      >
        <Card className="channel-card overflow-hidden group h-full">
          <CardContent className="p-0 h-full">
            <div className="relative aspect-video overflow-hidden">
              <img
                src={logo}
                alt={name}
                className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {isLive && (
                <motion.div 
                  className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1"
                  initial={{ scale: 0.8, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1.2
                  }}
                >
                  <span className="h-2 w-2 bg-white rounded-full inline-block"></span>
                  LIVE
                </motion.div>
              )}
            </div>
            <div className="p-3 space-y-2 bg-card">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-base line-clamp-1 group-hover:text-iptv-400 transition-colors duration-300">{name}</h3>
                <Badge variant="outline" className="text-xs bg-secondary/70 border-secondary/30">
                  {category}
                </Badge>
              </div>
              {currentProgram && (
                <p className="text-xs text-muted-foreground line-clamp-1">
                  Now: {currentProgram}
                </p>
              )}
              
              <motion.div 
                className="h-1 w-0 bg-gradient-to-r from-iptv-500 to-iptv-300 mt-2 rounded-full"
                animate={{ width: isLive ? '100%' : '0%' }}
                transition={{ duration: 2.5, ease: "easeInOut", repeat: isLive ? Infinity : 0 }}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
};

export default ChannelCard;
