
import React from "react";
import MainNav from "@/components/Navigation/MainNav";
import MainFooter from "@/components/Footer/MainFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MessageSquare, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { WhatsappButton } from "@/components/WhatsappButton";
const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav/>
      
      <main className="flex-1">
        <div className="bg-gradient-to-b from-iptv-900 to-background py-16">
          <div className="container text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/70 max-w-2xl mx-auto"
            >
              Have questions about our packages? Our team is ready to assist you.
            </motion.p>
          </div>
        </div>

        <div className="container py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                After purchasing a package, our team will contact you via WhatsApp to provide access credentials and setup instructions. You can also reach us directly using the information below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-iptv-500/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-iptv-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+1 (234) 567-8901</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-iptv-500/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-iptv-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">support@streamwave.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-iptv-500/10 p-3 rounded-full">
                    <MessageSquare className="h-6 w-6 text-iptv-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">WhatsApp</h3>
                    <p className="text-muted-foreground">+1 (234) 567-8901</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-iptv-500/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-iptv-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-muted-foreground">1234 Streaming Ave, Los Angeles, CA 90001</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input id="name" placeholder="Your Name" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input id="subject" placeholder="How can we help?" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Your message..." className="min-h-32" />
                    </div>
                    
                    <Button className="w-full group bg-gradient-to-r from-iptv-600 to-iptv-500 hover:from-iptv-700 hover:to-iptv-600">
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
        
        <div className="container py-12">
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-iptv-900 to-iptv-700 text-white">
              <CardTitle>WhatsApp Setup Service</CardTitle>
              <CardDescription className="text-white/70">
                After purchase, our technicians will guide you through the setup process via WhatsApp
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border rounded-lg p-4 text-center">
                  <div className="bg-iptv-500/10 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-iptv-500">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Purchase a Package</h3>
                  <p className="text-sm text-muted-foreground">
                    Select and purchase one of our premium streaming packages
                  </p>
                </div>
                
                <div className="border rounded-lg p-4 text-center">
                  <div className="bg-iptv-500/10 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-iptv-500">2</span>
                  </div>
                  <h3 className="font-medium mb-2">WhatsApp Contact</h3>
                  <p className="text-sm text-muted-foreground">
                    Our technician will contact you via WhatsApp within 24 hours
                  </p>
                </div>
                
                <div className="border rounded-lg p-4 text-center">
                  <div className="bg-iptv-500/10 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-iptv-500">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Setup & Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive credentials and guided setup assistance for your devices
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
   <MainFooter />
            <WhatsappButton />
    </div>
  );
};

export default ContactPage;
