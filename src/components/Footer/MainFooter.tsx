
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const MainFooter = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 8-4 8H6l-4-8z"/><path d="M12 9v6"/><path d="M15 12h-6"/></svg>
              </div>
              <span className="text-xl font-bold gradient-text">StreamWave</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Premium streaming service offering thousands of channels, movies, and shows from around the world.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary text-sm">Home</Link>
              </li>
              <li>
                <Link to="/live-tv" className="text-muted-foreground hover:text-primary text-sm">Live TV</Link>
              </li>
              <li>
                <Link to="/movies" className="text-muted-foreground hover:text-primary text-sm">Movies</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-primary text-sm">Pricing</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary text-sm">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary text-sm">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary text-sm">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary text-sm">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary text-sm">Privacy Policy</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Newsletter</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to receive updates and offers
            </p>
            <div className="space-y-4">
              <div className="flex">
                <Input placeholder="Your email address" className="rounded-r-none bg-secondary/50 border-r-0" />
                <Button className="rounded-l-none">Subscribe</Button>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail size={14} className="flex-shrink-0" />
                  <span>support@streamwave.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone size={14} className="flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={14} className="flex-shrink-0" />
                  <span>New York, NY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 StreamWave. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary">Terms</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary">Privacy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
