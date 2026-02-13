import { Sparkles, MapPin, Calendar, Camera, Star, Clock } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Virtual Try-On",
    description: "Upload your photo and try hundreds of hairstyles using our AI technology before visiting the salon.",
  },
  {
    icon: MapPin,
    title: "Salon Discovery",
    description: "Find top-rated salons near you with real reviews, pricing, and availability at your fingertips.",
  },
  {
    icon: Calendar,
    title: "Instant Booking",
    description: "Book your appointment in seconds. Choose your stylist, time, and service — all in one place.",
  },
  {
    icon: Sparkles,
    title: "AI Recommendations",
    description: "Get personalized hairstyle suggestions based on your face shape, hair type, and preferences.",
  },
  {
    icon: Star,
    title: "Verified Reviews",
    description: "Read honest reviews from real customers to find the best stylist for your needs.",
  },
  {
    icon: Clock,
    title: "Real-Time Availability",
    description: "See live stylist schedules and never wait. Get notified of cancellations and openings.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-body font-semibold tracking-wider uppercase text-primary">Features</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
            Everything You Need
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            From AI-powered styling to instant booking, we've got your beauty journey covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
