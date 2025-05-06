
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SubscriptionPackageProps {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
}

const SubscriptionPackage = ({
  id,
  name,
  price,
  description,
  features,
  popular = false,
}: SubscriptionPackageProps) => {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    navigate(`/checkout/${id}`);
  };

  return (
    <Card className={`flex flex-col h-full transition-all duration-300 ${
      popular ? "border-iptv-500 shadow-lg scale-105 relative z-10" : "hover:shadow-md"
    }`}>
      {popular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <span className="bg-iptv-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
            Most Popular
          </span>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-4">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-muted-foreground">/month</span>
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-iptv-500 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleSubscribe}
          className={`w-full ${popular ? "bg-iptv-500 hover:bg-iptv-600" : ""}`}
        >
          Subscribe Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubscriptionPackage;
