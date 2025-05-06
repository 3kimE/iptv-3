
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
    name: "Sports Network",
    logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&auto=format&fit=crop&q=60",
    category: "sports",
    isLive: true,
    currentProgram: "World Championship 2025",
  },
  {
    id: "ch2",
    name: "News 24/7",
    logo: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=60",
    category: "news",
    isLive: true,
    currentProgram: "Evening News",
  },
  {
    id: "ch3",
    name: "Cinema Plus",
    logo: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=60",
    category: "movies",
    currentProgram: "Blockbuster Movie Night",
  },
  {
    id: "ch4",
    name: "Discovery World",
    logo: "https://images.unsplash.com/photo-1552083375-1447ce886485?w=600&auto=format&fit=crop&q=60",
    category: "documentary",
    isLive: true,
    currentProgram: "Ocean Mysteries",
  },
  {
    id: "ch5",
    name: "Kids Zone",
    logo: "https://images.unsplash.com/photo-1596945808198-186c9254a660?w=600&auto=format&fit=crop&q=60",
    category: "kids",
    currentProgram: "Adventure Time",
  },
  {
    id: "ch6",
    name: "Music Channel",
    logo: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=60",
    category: "music",
    isLive: true,
    currentProgram: "Top 40 Countdown",
  },
  {
    id: "ch7",
    name: "Home & Living",
    logo: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=60",
    category: "lifestyle",
    currentProgram: "Interior Design Masters",
  },
  {
    id: "ch8",
    name: "Comedy Central",
    logo: "https://images.unsplash.com/photo-1527224538127-2104bb71c51b?w=600&auto=format&fit=crop&q=60",
    category: "entertainment",
    currentProgram: "Stand-up Special",
  },
  {
    id: "ch9",
    name: "Action Movies",
    logo: "https://images.unsplash.com/photo-1547130542-00fea39f7e45?w=600&auto=format&fit=crop&q=60",
    category: "movies",
    isLive: true,
    currentProgram: "Action Heroes Marathon",
  },
  {
    id: "ch10",
    name: "Nature Explorer",
    logo: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&auto=format&fit=crop&q=60",
    category: "documentary",
    currentProgram: "Wild Africa",
  },
];

export const featuredChannels = channels.slice(0, 5);
export const trendingChannels = [channels[5], channels[6], channels[7], channels[8], channels[9]];
export const liveChannels = channels.filter(channel => channel.isLive);
