
import React, { useState } from "react";
import MainNav from "@/components/Navigation/MainNav";
import MainFooter from "@/components/Footer/MainFooter";
import { Button } from "@/components/ui/button";
import { Check, Info, CreditCard, AlertCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const plans = [
  {
    id: "basic",
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
    limitations: [
      "No sports channels",
      "Limited movie selection",
      "No multi-device streaming"
    ],
    popular: false,
    bestFor: "Casual viewers"
  },
  {
    id: "premium",
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
    limitations: [
      "No 4K streaming",
      "Limited international content"
    ],
    popular: true,
    bestFor: "Families & Sports fans"
  },
  {
    id: "ultimate",
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
    limitations: [],
    popular: false,
    bestFor: "Power users & Media enthusiasts"
  }
];

const faqs = [
  {
    question: "How does StreamWave work?",
    answer: "StreamWave provides access to live TV channels and on-demand content through internet streaming. After subscribing, you'll receive login credentials to access our platform on compatible devices including smart TVs, smartphones, tablets, and computers."
  },
  {
    question: "What internet speed do I need?",
    answer: "We recommend a minimum of 10 Mbps for standard definition, 15 Mbps for HD content, and 25 Mbps for 4K streaming. A stable connection is more important than raw speed."
  },
  {
    question: "Can I watch on multiple devices?",
    answer: "Yes, depending on your subscription plan. The Basic plan allows streaming on 1 device, Premium on 3 devices, and Ultimate on 5 devices simultaneously."
  },
  {
    question: "Is there a contract or commitment?",
    answer: "No long-term contracts. All our plans are month-to-month and you can cancel anytime. We do offer discounts for quarterly and annual subscriptions."
  },
  {
    question: "How is content delivered to my devices?",
    answer: "Content is delivered through our secure streaming servers via the internet. You can access it through our web player or dedicated apps for various platforms."
  },
  {
    question: "Do you offer a trial period?",
    answer: "Yes, we offer a 24-hour free trial for all packages. You can explore the full features before committing to a subscription."
  }
];

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-card to-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <h1 className="text-4xl font-bold mb-4">Choose Your Perfect Plan</h1>
              <p className="text-muted-foreground">
                Select the package that suits your entertainment needs. All plans include access to our streaming platform with no hidden fees.
              </p>
            </motion.div>
            
            {/* Billing Cycle Toggle */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex items-center bg-card rounded-full p-1 border border-border">
                <button
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    billingCycle === "monthly"
                      ? "bg-primary text-white"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setBillingCycle("monthly")}
                >
                  Monthly
                </button>
                <button
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    billingCycle === "yearly"
                      ? "bg-primary text-white"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setBillingCycle("yearly")}
                >
                  Yearly <span className="text-xs text-accent">Save 20%</span>
                </button>
              </div>
            </div>
            
            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative rounded-xl border ${
                    plan.popular 
                      ? "border-primary shadow-lg shadow-primary/20 scale-105 z-10" 
                      : "border-border hover:border-primary/50 transition-colors"
                  } bg-card overflow-hidden`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-primary px-4 py-1 text-xs font-bold rounded-full uppercase shadow-md flex items-center gap-1">
                        <Sparkles className="h-3 w-3" /> Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="p-6 border-b border-border">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                      Best for: {plan.bestFor}
                    </div>
                    <h3 className="text-xl font-bold mb-1 gradient-text">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">${billingCycle === "yearly" ? (plan.price * 0.8).toFixed(2) : plan.price}</span>
                      <span className="text-muted-foreground ml-1">/{billingCycle === "yearly" ? "month, billed yearly" : "month"}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                        <Check className="h-4 w-4 text-primary" /> Features
                      </h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {plan.limitations.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                          <Info className="h-4 w-4 text-muted-foreground" /> Limitations
                        </h4>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation, i) => (
                            <li key={i} className="flex items-start text-sm text-muted-foreground">
                              <AlertCircle className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0 mt-0.5" />
                              <span>{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <Button 
                      className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                    >
                      <CreditCard className="mr-2 h-4 w-4" /> Subscribe Now
                    </Button>
                    
                    <div className="mt-4 text-center text-xs text-muted-foreground">
                      24-hour free trial included
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Comparison */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">Features Comparison</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 text-left"></th>
                    {plans.map((plan) => (
                      <th 
                        key={plan.id} 
                        className={`p-4 text-center ${plan.popular ? 'text-primary' : ''}`}
                      >
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-4 text-left">Price</td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="p-4 text-center">
                        ${billingCycle === "yearly" ? (plan.price * 0.8).toFixed(2) : plan.price}/{billingCycle === "yearly" ? "mo (yearly)" : "month"}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 text-left">Channels</td>
                    <td className="p-4 text-center">500+</td>
                    <td className="p-4 text-center">2000+</td>
                    <td className="p-4 text-center">4000+</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 text-left">Simultaneous Devices</td>
                    <td className="p-4 text-center">1</td>
                    <td className="p-4 text-center">3</td>
                    <td className="p-4 text-center">5</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 text-left">Streaming Quality</td>
                    <td className="p-4 text-center">720p HD</td>
                    <td className="p-4 text-center">1080p Full HD</td>
                    <td className="p-4 text-center">Up to 4K</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 text-left">Sports Channels</td>
                    <td className="p-4 text-center">
                      <AlertCircle className="h-4 w-4 text-destructive mx-auto" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="h-4 w-4 text-primary mx-auto" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="h-4 w-4 text-primary mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 text-left">Catchup TV</td>
                    <td className="p-4 text-center">7 days</td>
                    <td className="p-4 text-center">14 days</td>
                    <td className="p-4 text-center">30 days</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 text-left">International Channels</td>
                    <td className="p-4 text-center">Basic</td>
                    <td className="p-4 text-center">Standard</td>
                    <td className="p-4 text-center">Premium</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-left">Support Priority</td>
                    <td className="p-4 text-center">Standard</td>
                    <td className="p-4 text-center">Priority</td>
                    <td className="p-4 text-center">24/7 VIP</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        
        {/* FAQs */}
        <section className="py-16 bg-card">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Still have questions about our plans?
              </p>
              <Button asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <MainFooter />
    </div>
  );
};

export default PricingPage;
