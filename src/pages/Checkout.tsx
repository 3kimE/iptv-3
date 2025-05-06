
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { subscriptionPackages } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Checkout = () => {
  const { packageId } = useParams();
  const selectedPackage = subscriptionPackages.find(pkg => pkg.id === packageId);

  if (!selectedPackage) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 container py-16 flex items-center justify-center">
          <Card className="w-full max-w-lg">
            <CardHeader>
              <CardTitle>Package Not Found</CardTitle>
              <CardDescription>The selected package could not be found.</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full" asChild>
                <a href="/">Return to Home</a>
              </Button>
            </CardFooter>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 container py-8 md:py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold mb-4">Checkout</h1>
            <p className="mb-6 text-muted-foreground">
              Complete your purchase of {selectedPackage.name}
            </p>
            
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Enter your details for delivery of your service</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-iptv-500 bg-iptv-500/10">
                  <AlertDescription>
                    Please provide your WhatsApp number below. We'll contact you via WhatsApp after payment to set up your service.
                  </AlertDescription>
                </Alert>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp Number</Label>
                  <Input id="whatsapp" type="tel" placeholder="+1 (555) 123-4567" />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            <Card>
              <CardContent className="py-4">
                <div className="mb-4 space-y-1">
                  <h3 className="font-semibold text-lg">{selectedPackage.name}</h3>
                  <p className="text-sm text-muted-foreground">{selectedPackage.description}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    {selectedPackage.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <div className="bg-iptv-500 h-1.5 w-1.5 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${selectedPackage.price.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Tax</span>
                    <span>${(selectedPackage.price * 0.1).toFixed(2)}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between items-center font-bold text-lg">
                    <span>Total</span>
                    <span>${(selectedPackage.price * 1.1).toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Pay with PayPal</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;
