
import React from "react";
import MainNav from "@/components/Navigation/MainNav";
import MainFooter from "@/components/Footer/MainFooter";
import HeroSection from "@/components/Home/HeroSection";
import FeatureSection from "@/components/Home/FeatureSection";
import PricingSection from "@/components/Home/PricingSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import CallToAction from "@/components/Home/CallToAction";
import MediaCarousel from "@/components/Home/MediaCarousel";
import { Film, Tv, Flame } from "lucide-react";

// Mock data for carousels
const popularMovies = [
  {
    id: "m1",
    title: "The Last Journey",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=60",
    category: "Action",
    rating: 4.8,
    year: 2023
  },
  {
    id: "m2",
    title: "Midnight in Paris",
    image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&auto=format&fit=crop&q=60",
    category: "Romance",
    rating: 4.5,
    year: 2022
  },
  {
    id: "m3",
    title: "Dark Matter",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&auto=format&fit=crop&q=60",
    category: "Sci-Fi",
    rating: 4.7,
    year: 2023
  },
  {
    id: "m4",
    title: "The Forest",
    image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=500&auto=format&fit=crop&q=60",
    category: "Horror",
    rating: 4.3,
    year: 2022
  },
  {
    id: "m5",
    title: "Ocean's Depth",
    image: "https://images.unsplash.com/photo-1601036241724-872e1e5ce1e1?w=500&auto=format&fit=crop&q=60",
    category: "Adventure",
    rating: 4.6,
    year: 2023
  },
  {
    id: "m6",
    title: "City Lights",
    image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=500&auto=format&fit=crop&q=60",
    category: "Drama",
    rating: 4.9,
    year: 2023
  },
];

const liveChannels = [
  {
    id: "c1",
    title: "Sports Plus",
    image: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=500&auto=format&fit=crop&q=60",
    category: "Sports",
    isLive: true,
    currentProgram: "Champions League Final"
  },
  {
    id: "c2",
    title: "News 24",
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=500&auto=format&fit=crop&q=60",
    category: "News",
    isLive: true,
    currentProgram: "World Report"
  },
  {
    id: "c3",
    title: "Movie Central",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&auto=format&fit=crop&q=60",
    category: "Movies",
    isLive: true,
    currentProgram: "The Blockbuster Show"
  },
  {
    id: "c4",
    title: "Kids Zone",
    image: "https://images.unsplash.com/photo-1597340310329-1087c3721289?w=500&auto=format&fit=crop&q=60",
    category: "Kids",
    isLive: true,
    currentProgram: "Animated Adventures"
  },
  {
    id: "c5",
    title: "Music TV",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop&q=60",
    category: "Music",
    isLive: true,
    currentProgram: "Top 40 Countdown"
  },
];

const trendingMovies = [
  {
    id: "tm1",
    title: "Skyfall Ultimatum",
    image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=500&auto=format&fit=crop&q=60",
    category: "Thriller",
    rating: 4.9,
    year: 2023
  },
  {
    id: "tm2",
    title: "Wild Horizons",
    image: "https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=500&auto=format&fit=crop&q=60",
    category: "Documentary",
    rating: 4.7,
    year: 2023
  },
  {
    id: "tm3",
    title: "Eternal Love",
    image: "https://images.unsplash.com/photo-1539310399736-0517fda11c32?w=500&auto=format&fit=crop&q=60",
    category: "Romance",
    rating: 4.5,
    year: 2022
  },
  {
    id: "tm4",
    title: "Cyber Attack",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&auto=format&fit=crop&q=60",
    category: "Sci-Fi",
    rating: 4.8,
    year: 2023
  },
  {
    id: "tm5",
    title: "Mountain Escape",
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=500&auto=format&fit=crop&q=60",
    category: "Adventure",
    rating: 4.6,
    year: 2023
  },
];

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      
      <main className="flex-1">
        <HeroSection />
        
        <MediaCarousel
          title="Popular Movies"
          subtitle="Our most-watched films this week"
          items={popularMovies}
          type="movie"
          viewAllLink="/movies"
          icon={<Film className="text-primary h-5 w-5" />}
        />
        
        <MediaCarousel
          title="Live Channels"
          subtitle="Watch what's streaming right now"
          items={liveChannels}
          type="channel"
          viewAllLink="/live-tv"
          icon={<Tv className="text-red-500 h-5 w-5" />}
          accentColor="primary"
        />
        
        <FeatureSection />
        
        <MediaCarousel
          title="Trending Movies"
          subtitle="Gaining popularity this month"
          items={trendingMovies}
          type="movie"
          viewAllLink="/movies"
          icon={<Flame className="text-accent h-5 w-5" />}
        />
        
        <PricingSection />
        
        <TestimonialSection />
        
        <CallToAction />
      </main>
      
      <MainFooter />
    </div>
  );
};

export default HomePage;
