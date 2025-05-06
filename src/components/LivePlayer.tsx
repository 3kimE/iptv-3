
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX, Settings } from "lucide-react";

interface LivePlayerProps {
  channelName: string;
  programTitle: string;
  videoUrl?: string;
}

const LivePlayer = ({
  channelName,
  programTitle,
  videoUrl = "https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36563c3f856064c7146a3b43&profile_id=139&oauth2_token_id=57447761",
}: LivePlayerProps) => {
  return (
    <Card className="overflow-hidden bg-black">
      <CardContent className="p-0">
        <div className="relative">
          {/* Video Player */}
          <div className="aspect-video w-full">
            <video
              src={videoUrl}
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>

          {/* Player Controls Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80">
            <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-white text-lg">{channelName}</h3>
                  <p className="text-sm text-white/70">{programTitle}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                    <Volume2 size={20} />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                    <Settings size={20} />
                  </Button>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-white/30 rounded-full h-1.5">
                <div className="bg-iptv-500 h-1.5 rounded-full" style={{ width: "45%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LivePlayer;
