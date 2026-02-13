import { ArrowRight, Sparkles, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-salon.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful hairstyle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-primary-foreground/80 font-body text-sm font-medium tracking-wide uppercase">
              AI-Powered Beauty
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-2 animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            Find Your Perfect
          </h1>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-gradient mb-8 animate-fade-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
            Hairstyle
          </h1>

          <div className="space-y-4 mb-10">
            {[
              { icon: Sparkles, text: "AI-powered virtual try-on" },
              { icon: MapPin, text: "Discover top-rated salons nearby" },
              { icon: Calendar, text: "Book appointments instantly" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-primary-foreground/80 font-body animate-fade-up"
                style={{ animationDelay: `${0.4 + i * 0.1}s`, opacity: 0 }}
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.7s", opacity: 0 }}>
            <Button variant="hero" size="lg" className="rounded-full px-10 py-6 text-lg">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="lg" className="rounded-full px-10 py-6 text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              Learn More
            </Button>
          </div>

          <p className="text-primary-foreground/50 text-xs font-body mt-6 animate-fade-up" style={{ animationDelay: "0.8s", opacity: 0 }}>
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
