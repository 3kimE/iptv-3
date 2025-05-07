
import React from "react";
import { useParams } from "react-router-dom";
import MainNav from "@/components/Navigation/MainNav";
import MainFooter from "@/components/Footer/MainFooter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Play, 
  Download, 
  Share2, 
  Heart, 
  Clock, 
  Calendar, 
  Star, 
  User,
  Languages,
  Film
} from "lucide-react";
import { motion } from "framer-motion";
import MediaCarousel from "@/components/Home/MediaCarousel";

// Mock movie data
const mockMovie = {
  id: "m1",
  title: "The Last Journey",
  image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=80",
  backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&auto=format&fit=crop&q=80",
  poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=60",
  category: "Action",
  description: "In a world on the brink of collapse, one man embarks on a dangerous journey to save what remains of humanity. Facing treacherous landscapes and deadly enemies, he must navigate through perilous terrain while uncovering a conspiracy that could change the fate of the world forever.",
  releaseYear: 2023,
  duration: "2h 15m",
  rating: 4.8,
  cast: ["John Smith", "Emma Johnson", "Michael Williams", "Sophia Brown"],
  director: "Christopher Anderson",
  language: "English",
  videoUrl: "https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36563c3f856064c7146a3b43&profile_id=139&oauth2_token_id=57447761"
};

// Related movies for carousel
const relatedMovies = [
  {
    id: "rm1",
    title: "Dark Matter",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&auto=format&fit=crop&q=60",
    category: "Sci-Fi",
    rating: 4.7,
    year: 2023
  },
  {
    id: "rm2",
    title: "The Forest",
    image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=500&auto=format&fit=crop&q=60",
    category: "Horror",
    rating: 4.3,
    year: 2022
  },
  {
    id: "rm3",
    title: "Ocean's Depth",
    image: "https://images.unsplash.com/photo-1601036241724-872e1e5ce1e1?w=500&auto=format&fit=crop&q=60",
    category: "Adventure",
    rating: 4.6,
    year: 2023
  },
  {
    id: "rm4",
    title: "City Lights",
    image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=500&auto=format&fit=crop&q=60",
    category: "Drama",
    rating: 4.9,
    year: 2023
  },
];

const MovieDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  // In a real app, you'd fetch the movie data based on the ID
  const movie = mockMovie;
  
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      
      <main className="flex-1 pt-16">
        {/* Hero Banner */}
        <section className="relative h-[50vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={movie.backdrop}
              alt={movie.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          </div>
          
          <div className="container relative h-full flex items-end pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col lg:flex-row gap-8"
            >
              <div className="flex-shrink-0 w-48 h-72 rounded-lg overflow-hidden border border-white/20">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="h-full w-full object-cover"
                />
              </div>
              
              <div className="flex flex-col">
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="secondary" className="bg-accent/90 text-accent-foreground">
                    {movie.category}
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 backdrop-blur-sm">
                    {movie.releaseYear}
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 backdrop-blur-sm flex items-center gap-1">
                    <Star className="fill-yellow-500 stroke-yellow-500 h-3 w-3" />
                    {movie.rating}
                  </Badge>
                </div>
                
                <h1 className="text-3xl lg:text-4xl font-bold mb-2">{movie.title}</h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {movie.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {movie.releaseYear}
                  </div>
                  <div className="flex items-center gap-1">
                    <Languages className="h-4 w-4" />
                    {movie.language}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 max-w-2xl">
                  {movie.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mt-auto">
                  <Button className="gap-2">
                    <Play className="h-4 w-4" /> Play Movie
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" /> Download
                  </Button>
                  <Button variant="secondary" className="gap-2">
                    <Heart className="h-4 w-4" /> Add to Favorites
                  </Button>
                  <Button variant="secondary" className="gap-2">
                    <Share2 className="h-4 w-4" /> Share
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Details Section */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Film className="h-5 w-5 text-primary" /> About the Movie
                </h2>
                <p className="text-muted-foreground mb-8">
                  {movie.description}
                  <br /><br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim urna nec tortor placerat, vel ultrices enim fermentum. Morbi vehicula, nisi vel facilisis suscipit, lectus sem consequat velit, vel gravida nulla est vitae augue. Proin et tristique nisi. Sed at ante non magna mollis lobortis.
                </p>
                
                {/* Video Player */}
                <div className="aspect-video rounded-lg overflow-hidden mb-8">
                  <video
                    src={movie.videoUrl}
                    className="h-full w-full object-cover"
                    controls
                    playsInline
                    poster={movie.backdrop}
                  />
                </div>
              </div>
              
              <div>
                <div className="glass-panel p-6">
                  <h3 className="text-lg font-semibold mb-4">Cast & Crew</h3>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Director</h4>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                        <User className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <span>{movie.director}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Cast</h4>
                    <div className="space-y-2">
                      {movie.cast.map((actor, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                            <User className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <span>{actor}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Movies Section */}
        <MediaCarousel
          title="You May Also Like"
          subtitle="Similar movies you might enjoy"
          items={relatedMovies}
          type="movie"
          viewAllLink="/movies"
        />
      </main>
      
      <MainFooter />
    </div>
  );
};

export default MovieDetailPage;
