import React, { useState } from "react";
import MainNav from "@/components/Navigation/MainNav";
import MainFooter from "@/components/Footer/MainFooter";
import MediaCard from "@/components/Common/MediaCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal, Film } from "lucide-react";
import { motion } from "framer-motion";
import { WhatsappButton } from "@/components/WhatsappButton";

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
    title: "Joker: Folie à Deux",
    image: "https://fr.web.img6.acsta.net/img/f5/a1/f5a1012acb73bb38b4801fe371a54227.jpg",
    category: "drama/musical",
    rating: 3.5,
    year: 2024
  },
  {
    id: "m2",
    title: "A Minecraft Movie",
    image: "https://shop.warnerbros.co.uk/cdn/shop/files/Minecraft4Kflat.jpg?v=1742984443",
    category: "adventure/fantasy",
    rating: 4.2,
    year: 2025
  },
  {
    id: "m3",
    title: "Gladiator II",
    image: "https://upload.wikimedia.org/wikipedia/en/0/04/Gladiator_II_%282024%29_poster.jpg",
    category: "action/drama",
    rating: 4.5,
    year: 2024
  },
  {
    id: "m4",
    title: "Venom: The Last Dance",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a3/Venom_The_Last_Dance_Poster.jpg",
    category: "superhero/action",
    rating: 4.1,
    year: 2024
  },
  {
    id: "m5",
    title: "Deadpool 3",
    image: "https://fr.web.img5.acsta.net/img/e4/cd/e4cd101f2e66f4e7818fcf53d05c006a.jpg",
    category: "action/comedy",
    rating: 4.6,
    year: 2024
  },
  
  {
    id: "m6",
    title: "Smile 2",
    image: "https://cinedweller.com/wp-content/uploads/2024/10/smile-2-affiche.jpg.webp",
    category: "horror",
    rating: 4.0,
    year: 2024
  },
  {
    id: "m7",
    title: "Bad Boys: Ride or Die",
    image: "https://fr.web.img6.acsta.net/img/ef/bb/efbbe86f093b0904258c8a9b1e60bae7.jpg",
    category: "action/comedy",
    rating: 4.3,
    year: 2024
  },
  {
    id: "m8",
    title: "The Dark Knight",
    image:
      "https://fr.web.img2.acsta.net/medias/nmedia/18/63/97/89/18949761.jpg",
    category: "action",
    rating: 4.9,
    year: 2008,
  },
  {
    id: "m9",
    title: "The Shawshank Redemption",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
    category: "drama",
    rating: 4.9,
    year: 1994,
  },
  {
    id: "m10",
    title: "The Godfather",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    category: "crime",
    rating: 4.9,
    year: 1972,
  },
  {
    id: "m11",
    title: "The Matrix",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/94/The_Matrix.jpg",
    category: "sci-fi",
    rating: 4.7,
    year: 1999,
  },
  {
    id: "m12",
    title: "Inception",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    category: "sci-fi",
    rating: 4.8,
    year: 2010,
  },
  {
    id: "m13",
    title: "Deadpool",
    image:
      "https://fr.web.img5.acsta.net/img/e4/cd/e4cd101f2e66f4e7818fcf53d05c006a.jpg",
    category: "action/comedy",
    rating: 4.7,
    year: 2016,
  },

  {
    id: "m14",
    title: "The Lion King",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_.jpg",
    category: "animation",
    rating: 4.8,
    year: 2019,
  },
  {
    id: "m15",
    title: "The Avengers",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
    category: "action",
    rating: 4.8,
    year: 2012,
  },
 
 


  {
    id: "m16",
    title: "Havok 2025",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEDsrNqZSpouHIYFMVW3mvRJECZQe94Fnm7Q&s",
    category: "action",
    rating: 4.1,
    year: 2022,
  },


  

 
  {
    id: "m17",
    title: "Interstellar",
    image:
      "https://fr.web.img6.acsta.net/pictures/14/09/24/12/08/158828.jpg",
    category: "sci-fi/adventure",
    rating: 4.6,
    year: 2014,
  },
  {
  id: "m18",
  title: "Fly Me to the Moon",
  image:
    "https://musicart.xboxlive.com/7/5c4b6c00-0000-0000-0000-000000000002/504/image.jpg",
  category: "romantic comedy",
  rating: 4.1,
  year: 2024,
},
{
  id: "m19",
  title: "Captain America: Brave New World",
  image:
    "https://fr.web.img2.acsta.net/img/92/55/9255d9aeb17004f6a622cc47e573777e.jpg",
  category: "superhero/action",
  rating: 4.4,
  year: 2025,
},
{
  id: "m20",
  title: "A Working Man",
  image:
    "https://m.media-amazon.com/images/M/MV5BYmQxZGIxNTYtYTQwMy00ODdkLWI0MmQtM2E0ZmIyNmYzMGMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  category: "drama",
  rating: 4.0,
  year: 2024,
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
       <WhatsappButton />
    </div>
  );
};

export default MoviesPage;
