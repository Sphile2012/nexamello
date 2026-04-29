import { Globe } from "lucide-react";

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Globe className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-space font-bold text-lg text-foreground">
              NexaWeb Tech Solutions
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { label: "Services", href: "#services" },
              { label: "Pricing", href: "#pricing" },
              { label: "Hosting", href: "#hosting" },
              { label: "Process", href: "#workflow" },
              { label: "Add-Ons", href: "#addons" },
              { label: "Why Us", href: "#value" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-inter text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col items-center sm:items-end gap-1">
            <p className="text-xs font-inter text-muted-foreground">
              © {new Date().getFullYear()} NexaWeb Tech Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-3 text-xs font-inter text-muted-foreground">
              <a href="tel:0823562239" className="hover:text-primary transition-colors">0823562239</a>
              <span>·</span>
              <a href="tel:0820610949" className="hover:text-primary transition-colors">0820610949</a>
              <span>·</span>
              <a href="mailto:poomeigh503@gmail.com" className="hover:text-primary transition-colors">Email Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}