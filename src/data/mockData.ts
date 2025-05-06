
export const categories = [
  { id: "all", name: "All" },
  { id: "news", name: "News" },
  { id: "sports", name: "Sports" },
  { id: "entertainment", name: "Entertainment" },
  { id: "movies", name: "Movies" },
  { id: "documentary", name: "Documentary" },
  { id: "kids", name: "Kids" },
  { id: "music", name: "Music" },
  { id: "lifestyle", name: "Lifestyle" },
];

export const channels = [
  {
    id: "ch1",
    name: "beIN Sports",
    logo: "https://images.unsplash.com/photo-1593341646782-e42b3fd890f1?w=600&auto=format&fit=crop&q=60",
    category: "sports",
    isLive: true,
    currentProgram: "Champions League Live",
  },
  {
    id: "ch2",
    name: "CNN International",
    logo: "https://images.unsplash.com/photo-1616469829935-c2f33d54df85?w=600&auto=format&fit=crop&q=60",
    category: "news",
    isLive: true,
    currentProgram: "Breaking News Coverage",
  },
  {
    id: "ch3",
    name: "HBO Max",
    logo: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=600&auto=format&fit=crop&q=60",
    category: "movies",
    currentProgram: "Exclusive Premiere: The Last Chapter",
  },
  {
    id: "ch4",
    name: "National Geographic",
    logo: "https://images.unsplash.com/photo-1552083375-1447ce886485?w=600&auto=format&fit=crop&q=60",
    category: "documentary",
    isLive: true,
    currentProgram: "Secrets of the Deep Ocean",
  },
  {
    id: "ch5",
    name: "Disney+",
    logo: "https://images.unsplash.com/photo-1616469829941-a4e6a4e0d4be?w=600&auto=format&fit=crop&q=60",
    category: "kids",
    currentProgram: "Star Wars: The Mandalorian",
  },
  {
    id: "ch6",
    name: "MTV",
    logo: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=600&auto=format&fit=crop&q=60",
    category: "music",
    isLive: true,
    currentProgram: "Global Music Awards Live",
  },
  {
    id: "ch7",
    name: "BBC World",
    logo: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&auto=format&fit=crop&q=60",
    category: "news",
    currentProgram: "World Business Report",
  },
  {
    id: "ch8",
    name: "ESPN",
    logo: "https://images.unsplash.com/photo-1580591452793-4fbcd070235f?w=600&auto=format&fit=crop&q=60",
    category: "sports",
    isLive: true,
    currentProgram: "Formula 1 Grand Prix",
  },
  {
    id: "ch9",
    name: "Sky Sports Premier League",
    logo: "https://images.unsplash.com/photo-1610208311392-afd3e48d216f?w=600&auto=format&fit=crop&q=60",
    category: "sports",
    isLive: true,
    currentProgram: "Liverpool vs. Manchester United",
  },
  {
    id: "ch10",
    name: "Discovery Channel",
    logo: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=600&auto=format&fit=crop&q=60",
    category: "documentary",
    currentProgram: "Extreme Engineering",
  },
  {
    id: "ch11",
    name: "Cartoon Network",
    logo: "https://images.unsplash.com/photo-1580751302532-4043a8150821?w=600&auto=format&fit=crop&q=60",
    category: "kids",
    currentProgram: "Adventure Time",
  },
  {
    id: "ch12",
    name: "Al Jazeera",
    logo: "https://images.unsplash.com/photo-1590070572699-3dbfb90e80c5?w=600&auto=format&fit=crop&q=60",
    category: "news",
    isLive: true,
    currentProgram: "Inside Story",
  },
];

export const popularMovies = [
  {
    id: "movie1",
    title: "Inception",
    poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=600&auto=format&fit=crop&q=60",
    genre: "Action, Sci-Fi",
    rating: 4.8,
    year: 2023,
    description: "A thief who enters people's dreams to steal their secrets gets a chance at redemption with one last job."
  },
  {
    id: "movie2",
    title: "Interstellar",
    poster: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&auto=format&fit=crop&q=60",
    genre: "Adventure, Drama, Sci-Fi",
    rating: 4.9,
    year: 2022,
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  },
  {
    id: "movie3",
    title: "The Grand Budapest Hotel",
    poster: "https://images.unsplash.com/photo-1572177191856-3cde618dee1f?w=600&auto=format&fit=crop&q=60",
    genre: "Comedy, Drama",
    rating: 4.7,
    year: 2024,
    description: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy."
  },
  {
    id: "movie4",
    title: "Dune",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=60",
    genre: "Action, Adventure, Sci-Fi",
    rating: 4.8,
    year: 2023,
    description: "Feature adaptation of Frank Herbert's science fiction novel about the son of a noble family entrusted with the protection of the most valuable asset in the galaxy."
  },
  {
    id: "movie5",
    title: "Eternal Sunshine",
    poster: "https://images.unsplash.com/photo-1499566727020-881da110a0b0?w=600&auto=format&fit=crop&q=60",
    genre: "Drama, Romance, Sci-Fi",
    rating: 4.6,
    year: 2022,
    description: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories."
  },
  {
    id: "movie6",
    title: "Blade Runner 2049",
    poster: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&auto=format&fit=crop&q=60",
    genre: "Action, Drama, Sci-Fi",
    rating: 4.7,
    year: 2022,
    description: "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard."
  },
  {
    id: "movie7",
    title: "The Lighthouse",
    poster: "https://images.unsplash.com/photo-1518411614054-a08996b9ae55?w=600&auto=format&fit=crop&q=60",
    genre: "Drama, Fantasy, Horror",
    rating: 4.5,
    year: 2023,
    description: "Two lighthouse keepers try to maintain their sanity while living on a remote and mysterious New England island in the 1890s."
  },
  {
    id: "movie8",
    title: "Parasite",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=60",
    genre: "Drama, Thriller",
    rating: 4.9,
    year: 2022,
    description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan."
  },
];

export const trendingMovies = [
  {
    id: "trending1",
    title: "The Matrix Revolution",
    poster: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&auto=format&fit=crop&q=60",
    genre: "Action, Sci-Fi",
    rating: 4.9,
    year: 2024,
    description: "Neo continues his quest to save humanity in this epic conclusion to the Matrix saga."
  },
  {
    id: "trending2",
    title: "Avatar: Way of Water",
    poster: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=600&auto=format&fit=crop&q=60",
    genre: "Action, Adventure, Fantasy",
    rating: 4.7,
    year: 2023,
    description: "Return to the world of Pandora as Jake Sully leads a resistance against human invaders."
  },
  {
    id: "trending3",
    title: "The Dark Knight Returns",
    poster: "https://images.unsplash.com/photo-1601513445506-2ab0d4fb4229?w=600&auto=format&fit=crop&q=60",
    genre: "Action, Crime, Drama",
    rating: 4.8,
    year: 2024,
    description: "Batman emerges from retirement to combat a new threat to Gotham City."
  },
  {
    id: "trending4",
    title: "Cosmic Odyssey",
    poster: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600&auto=format&fit=crop&q=60",
    genre: "Adventure, Sci-Fi",
    rating: 4.6,
    year: 2023,
    description: "An astronaut embarks on a journey to the edge of our solar system in search of extraterrestrial intelligence."
  },
  {
    id: "trending5",
    title: "The Dreamers",
    poster: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=600&auto=format&fit=crop&q=60",
    genre: "Drama, Romance",
    rating: 4.5,
    year: 2024,
    description: "Two strangers connected through their dreams must find each other in reality before time runs out."
  },
];

export const subscriptionPackages = [
  {
    id: "basic",
    name: "Basic Package",
    price: 9.99,
    description: "Access to 50+ premium channels with HD quality",
    features: [
      "50+ Premium Channels",
      "HD Quality Streaming",
      "Watch on 1 device at a time",
      "7-day Technical Support",
      "WhatsApp Setup Assistance",
    ],
    popular: false,
  },
  {
    id: "premium",
    name: "Premium Package",
    price: 19.99,
    description: "Access to 120+ channels with Full HD quality",
    features: [
      "120+ Premium Channels",
      "Full HD Quality Streaming",
      "Watch on 2 devices simultaneously",
      "14-day Technical Support",
      "WhatsApp Setup Assistance",
      "Sports premium content",
      "Priority Customer Service",
    ],
    popular: true,
  },
  {
    id: "ultimate",
    name: "Ultimate Package",
    price: 29.99,
    description: "Access to 200+ channels with 4K quality",
    features: [
      "200+ Premium Channels",
      "4K Ultra HD Quality Streaming",
      "Watch on 4 devices simultaneously",
      "30-day Technical Support",
      "WhatsApp Setup Assistance",
      "Sports premium content",
      "Movie premieres",
      "Exclusive shows",
      "VIP Customer Service",
      "Free Hardware Upgrades",
    ],
    popular: false,
  },
];

export const featuredChannels = channels.slice(0, 5);
export const trendingChannels = [channels[5], channels[6], channels[7], channels[8], channels[9]];
export const liveChannels = channels.filter(channel => channel.isLive);
