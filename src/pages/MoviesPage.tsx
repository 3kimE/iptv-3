
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovieCard from "@/components/MovieCard";
import { popularMovies, trendingMovies } from "@/data/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";

const movieGenres = ["All Genres", "Action", "Adventure", "Comedy", "Drama", "Horror", "Sci-Fi", "Thriller"];
const movieYears = ["All Years", "2024", "2023", "2022", "2021", "2020"];

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All Genres");
  const [selectedYear, setSelectedYear] = useState("All Years");

  const allMovies = [...popularMovies, ...trendingMovies];
  
  const filteredMovies = allMovies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === "All Genres" || movie.genre.includes(selectedGenre);
    const matchesYear = selectedYear === "All Years" || movie.year.toString() === selectedYear;
    return matchesSearch && matchesGenre && matchesYear;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        <div className="bg-gradient-to-b from-iptv-900 to-background py-16">
          <div className="container text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Explore Our Movie Collection
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/70 max-w-2xl mx-auto"
            >
              Discover thousands of premium movies from around the world, available in HD and 4K quality.
            </motion.p>
          </div>
        </div>

        <div className="container py-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8 items-center">
            <div className="relative flex-1">
              <Input
                type="search"
                placeholder="Search movies..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            
            <div className="flex gap-4">
              <Select onValueChange={setSelectedGenre} defaultValue={selectedGenre}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Genre" />
                </SelectTrigger>
                <SelectContent>
                  {movieGenres.map(genre => (
                    <SelectItem key={genre} value={genre}>{genre}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select onValueChange={setSelectedYear} defaultValue={selectedYear}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {movieYears.map(year => (
                    <SelectItem key={year} value={year}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="all">All Movies</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {filteredMovies.map((movie) => (
                  <MovieCard key={movie.id} {...movie} />
                ))}
                
                {filteredMovies.length === 0 && (
                  <div className="col-span-full py-12 text-center">
                    <h3 className="text-xl font-medium mb-2">No movies found</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your search or filter criteria.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="popular">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {popularMovies
                  .filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))
                  .filter(movie => selectedGenre === "All Genres" || movie.genre.includes(selectedGenre))
                  .filter(movie => selectedYear === "All Years" || movie.year.toString() === selectedYear)
                  .map((movie) => (
                    <MovieCard key={movie.id} {...movie} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="trending">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {trendingMovies
                  .filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))
                  .filter(movie => selectedGenre === "All Genres" || movie.genre.includes(selectedGenre))
                  .filter(movie => selectedYear === "All Years" || movie.year.toString() === selectedYear)
                  .map((movie) => (
                    <MovieCard key={movie.id} {...movie} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MoviesPage;
