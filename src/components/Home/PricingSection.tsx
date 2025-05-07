
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Basic",
    price: 9.99,
    description: "Perfect for casual viewers",
    features: [
      "500+ Live TV Channels",
      "Basic on-demand library",
      "Watch on 1 device at a time",
      "720p streaming quality",
      "7-day catchup TV",
      "Email support"
    ],
    popular: false
  },
  {
    name: "Premium",
    price: 19.99,
    description: "Our most popular package",
    features: [
      "2000+ Live TV Channels",
      "Full on-demand library",
      "Watch on 3 devices at a time",
      "Full HD streaming quality",
      "14-day catchup TV",
      "Priority email & chat support",
      "Sports & PPV events included"
    ],
    popular: true
  },
  {
    name: "Ultimate",
    price: 29.99,
    description: "For the complete experience",
    features: [
      "4000+ Live TV Channels",
      "Extended on-demand library",
      "Watch on 5 devices at a time", 
      "4K streaming where available",
      "30-day catchup TV",
      "24/7 priority support",
      "Sports & PPV events included",
      "Adult content access",
      "Premium international channels"
    ],
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-card to-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-muted-foreground">
            Select the perfect package for your entertainment needs with our flexible subscription options
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-xl border ${
                plan.popular 
                  ? "border-primary shadow-lg shadow-primary/20 scale-105 z-10" 
                  : "border-border/50 hover:border-primary/50"
              } transition-all bg-card overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary px-4 py-1 text-xs font-bold rounded-full uppercase shadow-md">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-6 border-b border-border/50">
                <h3 className="text-xl font-bold mb-1 gradient-text">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                  asChild
                >
                  <Link to="/pricing">Subscribe Now</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center text-sm text-muted-foreground">
          <p>All plans include a 24-hour free trial. Cancel anytime.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
