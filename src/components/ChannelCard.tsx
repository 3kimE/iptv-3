
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ChannelCardProps {
  id: string;
  name: string;
  logo: string;
  category: string;
  isLive?: boolean;
  currentProgram?: string;
}

const ChannelCard = ({
  name,
  logo,
  category,
  isLive = false,
  currentProgram,
}: ChannelCardProps) => {
  return (
    <Card className="channel-card overflow-hidden group">
      <CardContent className="p-0">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={logo}
            alt={name}
            className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
          />
          {isLive && <div className="live-badge">LIVE</div>}
        </div>
        <div className="p-3 space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-base line-clamp-1">{name}</h3>
            <Badge variant="outline" className="text-xs bg-secondary/50">
              {category}
            </Badge>
          </div>
          {currentProgram && (
            <p className="text-xs text-muted-foreground line-clamp-1">
              Now: {currentProgram}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ChannelCard;
