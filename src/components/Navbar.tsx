
import React, { useState } from "react";
import { Link } from "react-router-dom";
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

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const isMobile = useIsMobile();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Live TV", path: "/live" },
    { name: "Categories", path: "/categories" },
    { name: "Favorites", path: "/favorites" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <Tv className="h-6 w-6 text-iptv-500" />
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
                  className="nav-link text-sm font-medium text-foreground/80 hover:text-foreground"
                >
                  {link.name}
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
            <div className="relative animate-fade-in">
              <Input
                type="search"
                placeholder="Search channels..."
                className="w-[200px] focus:w-[300px] transition-all duration-300"
                autoFocus
                onBlur={() => setSearchOpen(false)}
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
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

          <Button variant="default" className="hidden sm:flex">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
