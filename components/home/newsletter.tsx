"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Send, Sparkles, Check } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center"
          >
            <Sparkles className="w-8 h-8 text-primary" />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4 text-balance">
            Join the {siteConfig.name} Family
          </h2>
          <p className="text-muted-foreground text-lg mb-8 text-pretty">
            Subscribe to receive exclusive offers, early access to new collections, 
            and styling tips delivered straight to your inbox.
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 py-4 px-6 bg-green-50 text-green-700 rounded-full"
            >
              <Check className="w-5 h-5" />
              <span className="font-medium">Thank you for subscribing!</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1 relative">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 px-5 bg-background/80 backdrop-blur-sm border-primary/20 focus:border-primary rounded-full"
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground group"
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : (
                  <>
                    Subscribe
                    <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
          )}

          <p className="text-sm text-muted-foreground mt-6">
            By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { title: "10% Off", subtitle: "First Order" },
              { title: "Early Access", subtitle: "New Arrivals" },
              { title: "Exclusive", subtitle: "Member Deals" },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <p className="text-2xl font-serif text-primary">{benefit.title}</p>
                <p className="text-sm text-muted-foreground">{benefit.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
