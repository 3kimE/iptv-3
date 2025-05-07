
import React from "react";
import { useParams } from "react-router-dom";
import MainNav from "@/components/Navigation/MainNav";
import MainFooter from "@/components/Footer/MainFooter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarClock, Share2, Heart, Info, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import MediaCarousel from "@/components/Home/MediaCarousel";

// Mock channel data
const mockChannel = {
  id: "c1",
  title: "Sports Plus",
  image: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&auto=format&fit=crop&q=80",
  logo: "https://cdn-icons-png.flaticon.com/512/2503/2503508.png",
  category: "Sports",
  description: "Sports Plus is your premier destination for all things sports. From live matches to expert analysis, we provide comprehensive coverage of sporting events from around the globe. Catch the biggest games, tournaments, and championships all in one place.",
  currentProgram: "Champions League Final",
  upcomingPrograms: [
    { time: "20:00", title: "Premier League Highlights" },
    { time: "21:30", title: "Formula 1 Qualifying" },
    { time: "23:00", title: "Boxing World Championship" },
    { time: "01:30", title: "NBA Game of the Week" }
  ],
  isLive: true,
  videoUrl: "https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36563c3f856064c7146a3b43&profile_id=139&oauth2_token_id=57447761"
};

// Related channels for carousel
const relatedChannels = [
  {
    id: "rc1",
    title: "Premier Sports",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=500&auto=format&fit=crop&q=60",
    category: "Sports",
    isLive: true,
    currentProgram: "NBA Finals"
  },
  {
    id: "rc2",
    title: "Football Channel",
    image: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=500&auto=format&fit=crop&q=60",
    category: "Sports",
    isLive: true,
    currentProgram: "UEFA Champions League"
  },
  {
    id: "rc3",
    title: "Motor Sports",
    image: "https://images.unsplash.com/photo-1503945839639-aea48daa250f?w=500&auto=format&fit=crop&q=60",
    category: "Sports",
    isLive: true,
    currentProgram: "Formula 1 Grand Prix"
  },
  {
    id: "rc4",
    title: "Tennis TV",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=500&auto=format&fit=crop&q=60",
    category: "Sports",
    isLive: true,
    currentProgram: "Wimbledon Semifinals"
  },
];

const ChannelDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  // In a real app, you'd fetch the channel data based on the ID
  const channel = mockChannel;
  
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      
      <main className="flex-1 pt-16">
        {/* Video Player Section */}
        <section className="bg-black">
          <div className="container py-4">
            <div className="relative aspect-video">
              <video
                src={channel.videoUrl}
                className="h-full w-full object-cover rounded-lg"
                autoPlay
                controls
                playsInline
              />
              
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge variant="live">LIVE</Badge>
                <Badge variant="secondary" className="bg-black/50 backdrop-blur-sm">
                  {channel.category}
                </Badge>
              </div>
            </div>
          </div>
        </section>
        
        {/* Channel Info Section */}
        <section className="py-6 border-b border-border">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-grow">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-card flex items-center justify-center p-2">
                    <img src={channel.logo} alt={channel.title} className="h-10 w-10" />
                  </div>
                  
                  <div>
                    <h1 className="text-2xl font-bold">{channel.title}</h1>
                    <p className="text-muted-foreground text-sm">Now Playing: {channel.currentProgram}</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <p className="text-muted-foreground">{channel.description}</p>
                </div>
              </div>
              
              <div className="flex-shrink-0 flex flex-row md:flex-col gap-2">
                <Button variant="default" className="flex-1" size="sm">
                  <Heart className="mr-2 h-4 w-4" /> Add to Favorites
                </Button>
                <Button variant="outline" className="flex-1" size="sm">
                  <Share2 className="mr-2 h-4 w-4" /> Share
                </Button>
                <Button variant="secondary" className="flex-1" size="sm">
                  <Info className="mr-2 h-4 w-4" /> More Info
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Schedule Section */}
        <section className="py-8">
          <div className="container">
            <div className="flex items-center gap-2 mb-4">
              <CalendarClock className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Today's Schedule</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {channel.upcomingPrograms.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center p-3 rounded-lg bg-card border border-border"
                >
                  <div className="w-20 py-2 px-3 bg-primary/10 rounded text-primary text-center font-medium">
                    {program.time}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">{program.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 p-4 rounded-lg bg-muted/20 border border-border flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-primary" />
              <p className="text-sm text-muted-foreground">
                Schedule is subject to change without notice. All times are displayed in your local timezone.
              </p>
            </div>
          </div>
        </section>
        
        {/* Related Channels Section */}
        <MediaCarousel
          title="Similar Channels"
          subtitle="You might also enjoy these channels"
          items={relatedChannels}
          type="channel"
          viewAllLink="/live-tv"
        />
      </main>
      
      <MainFooter />
    </div>
  );
};

export default ChannelDetailPage;
