import React, { useState } from "react";
import MainNav from "@/components/Navigation/MainNav";
import MainFooter from "@/components/Footer/MainFooter";
import MediaCard from "@/components/Common/MediaCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal, Film } from "lucide-react";
import { motion } from "framer-motion";

// Mock categories
const categories = [
  { id: "all", name: "All Movies" },
  { id: "action", name: "Action" },
  { id: "adventure", name: "Adventure" },
  { id: "comedy", name: "Comedy" },
  { id: "drama", name: "Drama" },
  { id: "horror", name: "Horror" },
  { id: "romance", name: "Romance" },
  { id: "sci-fi", name: "Sci-Fi" },
  { id: "thriller", name: "Thriller" },
];

// Mock movies data
const allMovies = [
  {
    id: "m1",
    title: "The Last Duel",
    image:
      "https://m.media-amazon.com/images/M/MV5BZGZiNDFkNDgtNDlmNS00NzZmLTg4MmItMzJkYjdmMjJkZDliXkEyXkFqcGc@._V1_.jpg",
    category: "Action",
    rating: 4.8,
    year: 2021,
  },
  {
    id: "m2",
    title: "Midnight in Paris",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/9f/Midnight_in_Paris_Poster.jpg",
    category: "Romance",
    rating: 4.5,
    year: 2011,
  },
  {
    id: "m3",
    title: "Dark Matter",
    image:
      "https://media.senscritique.com/media/000022102613/0/dark_matter.png",
    category: "Sci-Fi",
    rating: 4.7,
    year: 2015,
  },
  {
    id: "m4",
    title: "The Forest",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs-k80E5pjwczeHnPtN_MjmU4x7sToQOqhew&s",
    category: "Horror",
    rating: 4.3,
    year: 2016,
  },
  {
    id: "m5",
    title: "Inception",
    image:
      "https://media0078.elcinema.com/uploads/_315x420_2028a02da250c809cc4493409e19f7f80e2f37f9045ef28cf033448f56968505.jpg",
    category: "Sci-Fi",
    rating: 4.8,
    year: 2010,
  },
  {
    id: "m6",
    title: "Deadpool",
    image:
      "https://fr.web.img5.acsta.net/img/e4/cd/e4cd101f2e66f4e7818fcf53d05c006a.jpg",
    category: "Action/Comedy",
    rating: 4.7,
    year: 2016,
  },

  {
    id: "m1",
    title: "The Last Journey",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=60",
    category: "action",
    rating: 4.8,
    year: 2023,
  },
  {
    id: "m2",
    title: "Midnight in Paris",
    image:
      "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&auto=format&fit=crop&q=60",
    category: "romance",
    rating: 4.5,
    year: 2022,
  },
  {
    id: "m3",
    title: "Dark Matter",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&auto=format&fit=crop&q=60",
    category: "sci-fi",
    rating: 4.7,
    year: 2023,
  },
  {
    id: "m4",
    title: "The Forest",
    image:
      "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=500&auto=format&fit=crop&q=60",
    category: "horror",
    rating: 4.3,
    year: 2022,
  },

  {
    id: "m6",
    title: "City Lights",
    image:
      "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=500&auto=format&fit=crop&q=60",
    category: "drama",
    rating: 4.9,
    year: 2023,
  },
  {
    id: "m7",
    title: "Havok 2025",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEDsrNqZSpouHIYFMVW3mvRJECZQe94Fnm7Q&s",
    category: "action",
    rating: 4.1,
    year: 2022,
  },
  {
    id: "m8",
    title: "Murder Mystery",
    image:
      "https://images.unsplash.com/photo-1579547621309-5e57ab324182?w=500&auto=format&fit=crop&q=60",
    category: "thriller",
    rating: 4.4,
    year: 2023,
  },
  {
    id: "m9",
    title: "Skyfall Ultimatum",
    image:
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=500&auto=format&fit=crop&q=60",
    category: "action",
    rating: 4.9,
    year: 2023,
  },
  {
    id: "m10",
    title: "Wild Horizons",
    image:
      "https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=500&auto=format&fit=crop&q=60",
    category: "adventure",
    rating: 4.7,
    year: 2023,
  },

  {
    id: "m12",
    title: "Cyber Attack",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&auto=format&fit=crop&q=60",
    category: "sci-fi",
    rating: 4.8,
    year: 2023,
  },
];

const MoviesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMovies = allMovies
    .filter(
      (movie) =>
        selectedCategory === "all" || movie.category === selectedCategory
    )
    .filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/20 via-background to-background py-16">
          <div className="container">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl font-bold mb-4"
                >
                  Movies & Series
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-muted-foreground mb-6"
                >
                  Explore our vast collection of movies and series from around
                  the world. New titles added regularly to keep your
                  entertainment fresh and exciting.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex-shrink-0 relative"
              >
                <div className="h-28 w-28 lg:h-40 lg:w-40 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-subtle">
                  <Film className="h-12 w-12 lg:h-16 lg:w-16 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-xs font-bold">{allMovies.length}+</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-card border-y border-border">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={
                      selectedCategory === category.id ? "default" : "secondary"
                    }
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>

              <div className="flex gap-2">
                <div className="relative w-full md:w-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search movies..."
                    className="pl-10 w-full md:w-auto"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="icon">
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Movies Grid */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredMovies.map((movie, index) => (
                <motion.div
                  key={movie.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <MediaCard
                    id={movie.id}
                    title={movie.title}
                    image={movie.image}
                    type="movie"
                    category={movie.category}
                    rating={movie.rating}
                    year={movie.year}
                  />
                </motion.div>
              ))}
            </div>

            {filteredMovies.length === 0 && (
              <div className="py-12 text-center">
                <h3 className="text-2xl font-semibold mb-2">No movies found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <MainFooter />
    </div>
  );
};

export default MoviesPage;
