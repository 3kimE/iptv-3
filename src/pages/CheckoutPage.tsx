
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainNav from "@/components/Navigation/MainNav";
import MainFooter from "@/components/Footer/MainFooter";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { WhatsappButton } from "@/components/WhatsappButton";
import { motion } from "framer-motion";
import { CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";

// Mock package data (would come from your API/data source)
const packageData = [
  {
    id: "basic",
    name: "Basic Plan",
    price: 9.99,
    description: "Perfect for starters",
    features: ["50+ Live Channels", "Standard Definition", "1 Device", "24/7 Support"]
  },
  {
    id: "standard",
    name: "Standard Plan",
    price: 19.99,
    description: "Most popular choice",
    features: ["120+ Live Channels", "High Definition", "2 Devices", "24/7 Support", "Video on Demand"]
  },
  {
    id: "premium",
    name: "Premium Plan",
    price: 29.99,
    description: "Ultimate experience",
    features: ["200+ Live Channels", "Ultra HD Quality", "4 Devices", "24/7 Priority Support", "Video on Demand", "Premium Sports"]
  }
];

const CheckoutPage = () => {
  const { packageId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    whatsapp: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedPackage = packageData.find(pkg => pkg.id === packageId);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Order placed successfully! We'll contact you via WhatsApp shortly.");
      
      // Open WhatsApp with prefilled message
      const message = `Hello! I just ordered the ${selectedPackage?.name} package. My name is ${formData.firstName} ${formData.lastName}. Please confirm my order.`;
      window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, "_blank");
      
      // Redirect to homepage after a short delay
      setTimeout(() => navigate("/"), 2000);
    }, 1500);
  };

  if (!selectedPackage) {
    return (
      <div className="flex flex-col min-h-screen">
        <MainNav />
        <main className="flex-1 container py-16 flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-center">Package Not Found</CardTitle>
              <CardDescription className="text-center">The selected package could not be found.</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center">
              <Button onClick={() => navigate("/pricing")}>Browse Packages</Button>
            </CardFooter>
          </Card>
        </main>
        <MainFooter />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      
      <main className="flex-1 container py-8 md:py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-2 gradient-text">Checkout</h1>
          <p className="mb-8 text-muted-foreground">
            Complete your subscription to {selectedPackage.name}
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>We'll use this to set up your service</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Alert className="border-primary/30 bg-primary/5">
                      <AlertDescription className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>After payment, we'll contact you via WhatsApp to set up your service.</span>
                      </AlertDescription>
                    </Alert>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName" 
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="John" 
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName" 
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe" 
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com" 
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp">WhatsApp Number</Label>
                      <Input 
                        id="whatsapp" 
                        type="tel" 
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567" 
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Complete Purchase"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold">{selectedPackage.name}</h3>
                    <p className="text-sm text-muted-foreground">{selectedPackage.description}</p>
                  </div>
                  
                  <div className="space-y-2">
                    {selectedPackage.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${selectedPackage.price.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax</span>
                      <span>${(selectedPackage.price * 0.1).toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">Total</span>
                    <span className="font-bold text-xl gradient-text">${(selectedPackage.price * 1.1).toFixed(2)}</span>
                  </div>
                  
                  <div className="pt-4">
                    <Alert className="border-accent/30 bg-accent/5">
                      <AlertDescription className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                        <span>Guaranteed 24-hour activation after payment</span>
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </main>
      
      <MainFooter />
      <WhatsappButton />
    </div>
  );
};

export default CheckoutPage;
