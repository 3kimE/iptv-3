
import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Michael J.",
    location: "United States",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "I've tried several IPTV services before, but StreamWave is by far the most reliable. The channel quality is exceptional and customer support is always responsive."
  },
  {
    name: "Sarah T.",
    location: "United Kingdom",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Finally found an IPTV service that actually works! No buffering, great channel selection, and the interface is super easy to use on all my devices."
  },
  {
    name: "Ahmed K.",
    location: "United Arab Emirates",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 4,
    text: "Excellent service with channels from across the Middle East. Being able to watch my local sports has been amazing. Very happy with my subscription."
  },
  {
    name: "Maria G.",
    location: "Spain",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "The Spanish channel selection is impressive! I can watch all my favorite shows from home. The streaming quality is excellent even with my average internet speed."
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground">
            Join thousands of satisfied viewers who have made the switch to StreamWave
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-lg p-6 border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full mr-4 border-2 border-primary/30"
                />
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {Array(5).fill(0).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted'}`} 
                  />
                ))}
              </div>
              
              <p className="text-sm text-muted-foreground italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm">
            <span className="mr-1">4.9</span>
            <div className="flex">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} className="h-3 w-3 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <span className="ml-1 text-muted-foreground">from 2,394 reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
