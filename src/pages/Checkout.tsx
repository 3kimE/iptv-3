
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { subscriptionPackages } from "@/data/mockData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Checkout = () => {
  const { packageId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedPackage, setSelectedPackage] = useState(
    subscriptionPackages.find((p) => p.id === packageId) || subscriptionPackages[0]
  );

  useEffect(() => {
    if (packageId) {
      const pkg = subscriptionPackages.find((p) => p.id === packageId);
      if (pkg) {
        setSelectedPackage(pkg);
      } else {
        navigate("/");
      }
    }
  }, [packageId, navigate]);

  const handlePayPalCheckout = () => {
    toast({
      title: "Processing Payment",
      description: "Redirecting to PayPal for payment processing...",
    });
    
    // In a real application, this would redirect to PayPal or process the payment
    setTimeout(() => {
      toast({
        title: "Payment Successful!",
        description: "Thank you for subscribing to our service.",
        variant: "default",
      });
      
      navigate("/");
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        <div className="container py-12">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-6">
                    <div className="bg-muted/30 p-6 rounded-lg">
                      <h3 className="text-lg font-medium mb-4">Secure Payment</h3>
                      <p className="text-muted-foreground mb-4">
                        Complete your subscription purchase securely through PayPal.
                        You will be redirected to PayPal to complete the transaction.
                      </p>
                      <Button 
                        onClick={handlePayPalCheckout}
                        className="w-full bg-[#0070ba] hover:bg-[#005ea6]"
                      >
                        Pay with PayPal
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-lg">{selectedPackage.name}</h3>
                      <p className="text-muted-foreground">{selectedPackage.description}</p>
                    </div>
                    
                    <ul className="space-y-1">
                      {selectedPackage.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-iptv-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="border-t pt-4 mt-4">
                      <div className="flex justify-between mb-2">
                        <span>Subscription</span>
                        <span>${selectedPackage.price.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>${selectedPackage.price.toFixed(2)}/month</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;
