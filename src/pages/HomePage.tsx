
import React from "react";
import MainNav from "@/components/Navigation/MainNav";
import MainFooter from "@/components/Footer/MainFooter";
import HeroSection from "@/components/Home/HeroSection";
import FeatureSection from "@/components/Home/FeatureSection";
import PricingSection from "@/components/Home/PricingSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import CallToAction from "@/components/Home/CallToAction";
import MediaCarousel from "@/components/Home/MediaCarousel";
import { Film, Tv, Trophy } from "lucide-react";
import { WhatsappButton } from "@/components/WhatsappButton";

// Mock data for carousels
const popularMovies = [
  {
    id: "m1",
    title: "The Last Duel",
    image: "https://m.media-amazon.com/images/M/MV5BZGZiNDFkNDgtNDlmNS00NzZmLTg4MmItMzJkYjdmMjJkZDliXkEyXkFqcGc@._V1_.jpg",
    category: "Action",
    rating: 4.8,
    year: 2021
  },
  {
    id: "m2",
    title: "Midnight in Paris",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9f/Midnight_in_Paris_Poster.jpg",
    category: "Romance",
    rating: 4.5,
    year: 2011
  },
  {
    id: "m3",
    title: "Dark Matter",
    image: "https://media.senscritique.com/media/000022102613/0/dark_matter.png",
    category: "Sci-Fi",
    rating: 4.7,
    year: 2015
  },
  {
    id: "m4",
    title: "The Forest",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs-k80E5pjwczeHnPtN_MjmU4x7sToQOqhew&s",
    category: "Horror",
    rating: 4.3,
    year: 2016
  },
  {
    id: "m5",
    title: "Inception",
    image: "https://media0078.elcinema.com/uploads/_315x420_2028a02da250c809cc4493409e19f7f80e2f37f9045ef28cf033448f56968505.jpg",
    category: "Sci-Fi",
    rating: 4.8,
    year: 2010
  },
  {
    id: "m6",
    title: "Deadpool",
    image: "https://fr.web.img5.acsta.net/img/e4/cd/e4cd101f2e66f4e7818fcf53d05c006a.jpg",
    category: "Action/Comedy",
    rating: 4.7,
    year: 2016
  },
  {
    id: "m7",
    title: "Deadpool",
    image: "https://fr.web.img5.acsta.net/img/e4/cd/e4cd101f2e66f4e7818fcf53d05c006a.jpg",
    category: "Action/Comedy",
    rating: 4.7,
    year: 2016
  },
];



const liveChannels = [
  {
    id: "c1",
    title: "BeIN Sports",
    image: "https://yt3.googleusercontent.com/ytc/AIdro_kb1MTQ2n-OsKeNRdC1TZhogcVypdt91CB7QxIcRtg_drs=s900-c-k-c0x00ffffff-no-rj",
    category: "Sports",
    isLive: true,
    currentProgram: "UEFA Champions League"
  },
  {
    id: "c2",
    title: "Apple TV+",
    image: "https://store-images.s-microsoft.com/image/apps.79.13853294760425971.2bebf469-f331-48e5-8d77-0b6823e3c7b7.cb0e6b63-4cad-4336-a1dd-5c0a18786f1e?mode=scale&q=90&h=225&w=150",
    category: "Movies & Series",
    isLive: true,
    currentProgram: "Ted Lasso"
  },
  {
    id: "c3",
    title: "Disney Channel",
    image: "https://store-images.s-microsoft.com/image/apps.55921.14495311847124170.7646206e-bd82-4cf0-8b8c-d06a67bc302c.f939755d-cf85-415a-80dc-b98e3ccacd22",
    category: "Kids",
    isLive: true,
    currentProgram: "The Owl House"
  },
  {
    id: "c4",
    title: "Peacock",
    image: "https://m.media-amazon.com/images/I/61GbrxjZXHL.png",
    category: "Movies & Sports",
    isLive: true,
    currentProgram: "Premier League Live"
  },
  {
    id: "c5",
    title: "MTV",
    image: "https://alloforfait.fr/wp-content/uploads/2008/08/mtv.jpg",
    category: "Music",
    isLive: true,
    currentProgram: "Top 40 Countdown"
  },

    {
      id: "c5",
      title: "HBO",
      image: "https://img.utdstc.com/icon/db3/ff9/db3ff9df52071ba96d884cde93221b4ea43a9516d73a2164652aa3b402e33977:200",
      category: "Movies",
      isLive: true,
      currentProgram: "The Owl House"
    }
  ];
  


const popularSports = [
  {
    id: "s1",
    title: "UEFA Champions League",
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/408fd07f-2369-407d-a6db-724beb218ddc/dfb9jvz-e0566435-6913-439c-9681-7732cb589dd4.jpg/v1/fill/w_1024,h_1280,q_75,strp/uefa_champions_league__2022___2023_by_jafarjeef_dfb9jvz-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzQwOGZkMDdmLTIzNjktNDA3ZC1hNmRiLTcyNGJlYjIxOGRkY1wvZGZiOWp2ei1lMDU2NjQzNS02OTEzLTQzOWMtOTY4MS03NzMyY2I1ODlkZDQuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.mR-nwh7lC-11tocfE8gh3OF3KiJLKRNZpMAHxrmhdW8",
    category: "Soccer",
    rating: 4.9,
    isLive: true
  },
  {
    id: "s2",
    title: "NBA Finals 2024",
    image: "https://beam-images.warnermediacdn.com/2023-09/league-art-nba.png?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com&w=480+99vp/VbtVoKN+9JXhvJvTYNe/Wlet8etm1lTJcp4m9Hvrq0ad03L1/Xq429+uo8kTxi6ykEruNPvuuRewhEHge8EtcEu2Xx3XKlKzxX79OmfFUJ53t6sfr6Np0y7ks3CHL3AfBAJj4w2uGccYFQOis3yRuUhY928ud/HrNdQpA7TsA6HQN0+CuIRpxQku4Qsr6VQo1ZUQ1v2rHfz+cm3KLGhZ7kQoNbiR1NO6920HAGValJsQoZZQbPhLRlgPujtAKJFdbkLUbAvF5Das+7c7QCjWuNyEIWFfKHcpBQzrKbjO5l3HhMJgIR30KeH532coVAuVEqKN2Aprte++nND/89cZijUtr6TuD0m5gaKShoh/naFYGj2pLSOUDfhUI2AN8aXhttps://beam-images.warnermediacdn.com/2023-09/league-art-nba.png?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com&w=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",
    category: "Basketball",
    rating: 4.8,
    isLive: true
  },
  {
    id: "s3",
    title: "Formula 1 Grand Prix",
    image: "https://i.pinimg.com/736x/aa/22/ee/aa22eee50de57937286d0ccd5e80df42.jpg",
    category: "Racing",
    rating: 4.7,
    isLive: false
  },
  {
    id: "s4",
    title: "Wimbledon Grand Slam",
    image: "https://pbs.twimg.com/media/E5D-9DUWQAQEMrM?format=jpg&name=4096x4096",
    category: "Tennis",
    rating: 4.6,
    isLive: true
  },
  {
    id: "s5",
    title: "English Premier League",
    image: "https://www.thesportsdb.com/images/media/league/poster/67al0l1719007596.jpg",
    category: "Soccer",
    rating: 4.9,
    isLive: true
  },
];


const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background relative">
      <MainNav />
      
      <main className="flex-1">
        <HeroSection />
        
        <MediaCarousel
          title="Popular Movies"
          subtitle="Our most-watched films this week"
          items={popularMovies}
          type="movie"
          viewAllLink="/movies"
          icon={<Film className="h-6 w-6" />}
          cardStyle="overlay"
        />
        
        <MediaCarousel
          title="Live TV Channels"
          subtitle="Watch what's streaming right now"
          items={liveChannels}
          type="channel"
          viewAllLink="/live-tv"
          icon={<Tv className="h-6 w-6" />}
          accentColor="primary"
        />
        
        <FeatureSection />
        
        <MediaCarousel
          title="Popular Sports"
          subtitle="Never miss your favorite games"
          items={popularSports}
          type="sport"
          viewAllLink="/live-tv"
          icon={<Trophy className="h-6 w-6" />}
          accentColor="accent"
        />
        
        <PricingSection />
        
        <TestimonialSection />
        
        <CallToAction />
      </main>
      
      <MainFooter />
      
      {/* WhatsApp Button */}
      <WhatsappButton />
    </div>
  );
};

export default HomePage;
