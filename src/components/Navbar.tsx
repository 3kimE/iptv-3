
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, Tv } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "Movies", path: "/movies" },
    { name: "Contact", path: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className={`sticky top-0 z-50 w-full ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      } transition-all duration-300`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Tv className="h-6 w-6 text-iptv-500" />
            </motion.div>
            <span className="hidden font-bold text-xl text-foreground sm:inline-block">
              StreamWave
            </span>
          </Link>

          {!isMobile && (
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`nav-link text-sm font-medium transition-colors relative px-4 py-2 rounded-md ${
                    location.pathname === link.path 
                      ? 'text-iptv-500 bg-iptv-500/10' 
                      : 'text-foreground/80 hover:text-foreground hover:bg-background/80'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-iptv-500 mx-4"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>
          )}
        </div>

        <div className="flex items-center gap-4">
          {!searchOpen ? (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(true)}
              className="text-foreground/80 hover:text-foreground"
            >
              <Search className="h-5 w-5" />
            </Button>
          ) : (
            <motion.div 
              className="relative"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Input
                type="search"
                placeholder="Search packages..."
                className="w-[200px] focus:w-[300px] transition-all duration-300"
                autoFocus
                onBlur={() => setSearchOpen(false)}
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </motion.div>
          )}

          {isMobile && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {navLinks.map((link) => (
                  <DropdownMenuItem key={link.name} asChild>
                    <Link to={link.path}>{link.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <Button 
            variant="default" 
            className="hidden sm:flex bg-gradient-to-r from-iptv-600 to-iptv-500 hover:from-iptv-700 hover:to-iptv-600 border-none"
          >
            Sign In
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
