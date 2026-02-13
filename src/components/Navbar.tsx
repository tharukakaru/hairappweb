import { Scissors } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center">
            <Scissors className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-display font-bold text-foreground">StyleMe</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
          <a href="#salons" className="hover:text-foreground transition-colors">Salons</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Sign In
          </button>
          <button className="gradient-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
