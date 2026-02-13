import { Scissors } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center">
                <Scissors className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-display font-bold text-background">StyleMe</span>
            </div>
            <p className="text-background/50 font-body text-sm leading-relaxed">
              AI-powered hairstyle discovery and salon booking platform.
            </p>
          </div>
          {[
            { title: "Product", links: ["Features", "Pricing", "Try-On", "Download"] },
            { title: "Company", links: ["About", "Careers", "Blog", "Press"] },
            { title: "Support", links: ["Help Center", "Contact", "Privacy", "Terms"] },
          ].map((col, i) => (
            <div key={i}>
              <h4 className="font-display font-bold text-background mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-background/50 hover:text-background text-sm font-body transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/40 text-sm font-body">© 2026 StyleMe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
