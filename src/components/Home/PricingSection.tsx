
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const plans = [
  {
    id: "basic",
    name: "Basic",
    price: 9.99,
    description: "Perfect for beginners",
    features: [
      "50+ Live Channels",
      "Standard Definition",
      "1 Device",
      "24/7 Support"
    ],
    popular: false,
    cta: "Get Started"
  },
  {
    id: "standard",
    name: "Standard",
    price: 19.99,
    description: "Most Popular Choice",
    features: [
      "120+ Live Channels",
      "High Definition",
      "2 Devices",
      "24/7 Support",
      "Video on Demand"
    ],
    popular: true,
    cta: "Get Standard"
  },
  {
    id: "premium",
    name: "Premium",
    price: 29.99,
    description: "Ultimate Experience",
    features: [
      "200+ Live Channels",
      "Ultra HD Quality",
      "4 Devices",
      "24/7 Priority Support",
      "Video on Demand",
      "Premium Sports"
    ],
    popular: false,
    cta: "Get Premium"
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-card/50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/5 text-primary">
            Pricing
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Choose Your Perfect Plan
          </h2>
          <p className="text-lg text-muted-foreground">
            Select the subscription that fits your entertainment needs. All plans include easy setup and unlimited entertainment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-xl ${
                plan.popular 
                  ? "border-2 border-primary shadow-lg shadow-primary/10" 
                  : "border border-border"
              } overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-extrabold">${plan.price}</span>
                  <span className="text-base text-muted-foreground ml-1">/month</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
                
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <Button 
                    variant={plan.popular ? "default" : "outline"} 
                    className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : "border-primary/50 text-primary hover:bg-primary/10"}`}
                    asChild
                  >
                    <Link to={`/checkout/${plan.id}`}>
                      {plan.cta}
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
