
import React from "react";
import SubscriptionPackage from "./SubscriptionPackage";
import { subscriptionPackages } from "@/data/mockData";
import { Alert, AlertDescription } from "@/components/ui/alert";

const SubscriptionPackages = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Choose Your Package</h2>
          <p className="text-muted-foreground mt-2">Select the perfect package that suits your entertainment needs</p>
        </div>
        
        <Alert className="mb-8 border-iptv-500 bg-iptv-500/10">
          <AlertDescription>
            After purchasing a package, our team will contact you via WhatsApp to provide access credentials and setup instructions.
          </AlertDescription>
        </Alert>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {subscriptionPackages.map((pkg) => (
            <SubscriptionPackage
              key={pkg.id}
              id={pkg.id}
              name={pkg.name}
              price={pkg.price}
              description={pkg.description}
              features={pkg.features}
              popular={pkg.popular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPackages;
