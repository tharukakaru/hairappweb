import { Camera, Sparkles, CalendarCheck } from "lucide-react";

const steps = [
  {
    icon: Camera,
    step: "01",
    title: "Upload Your Photo",
    description: "Take a selfie or upload a photo. Our AI will analyze your face shape and features.",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "Try Hairstyles",
    description: "Browse hundreds of styles and see how they look on you with our virtual try-on.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Book & Go",
    description: "Found your style? Book an appointment at a top-rated salon nearby instantly.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-body font-semibold tracking-wider uppercase text-primary">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
            Three Simple Steps
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Your perfect hairstyle is just three steps away.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="text-center relative">
              <div className="relative mx-auto w-20 h-20 rounded-full gradient-primary flex items-center justify-center mb-6 shadow-lg">
                <step.icon className="w-9 h-9 text-primary-foreground" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center font-body">
                  {step.step}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-primary/30" />
              )}
              <h3 className="text-xl font-display font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
