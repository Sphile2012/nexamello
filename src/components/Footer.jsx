import { Globe, Mail, Phone, MessageSquare, ArrowRight } from "lucide-react";

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { label: "Services", href: "#services" },
    { label: "Packages", href: "#hosting" },
    { label: "Process", href: "#workflow" },
    { label: "Add-Ons", href: "#addons" },
    { label: "Why Us", href: "#value" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-border/50 pt-16 pb-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <Globe className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-space font-bold text-lg text-foreground">
                Nexa Web Solutions
              </span>
            </div>
            <p className="text-sm font-inter text-muted-foreground leading-relaxed mb-5">
              Affordable web design &amp; hosting for businesses in <strong className="text-foreground">South Africa and worldwide</strong>. Professional websites from <strong className="text-primary">R350</strong>. Remote-friendly — we work with anyone, anywhere.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/27823562239"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#25D366]/15 border border-[#25D366]/25 flex items-center justify-center hover:bg-[#25D366]/25 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
              </a>
              <a
                href="mailto:poomeigh503@gmail.com"
                className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
              </a>
              <a
                href="tel:0823562239"
                className="w-9 h-9 rounded-xl bg-secondary border border-border/50 flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                <Phone className="w-4 h-4 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-space font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm font-inter text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-space font-semibold text-foreground mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a href="tel:0823562239" className="flex items-center gap-3 text-sm font-inter text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                082 356 2239
              </a>
              <a href="tel:0820610949" className="flex items-center gap-3 text-sm font-inter text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                082 061 0949
              </a>
              <a href="mailto:poomeigh503@gmail.com" className="flex items-center gap-3 text-sm font-inter text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                poomeigh503@gmail.com
              </a>
              <div className="pt-2">
                <p className="text-xs font-inter text-muted-foreground/60">Mon–Fri: 8:00–18:00 · Sat: 9:00–14:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-inter text-muted-foreground/60">
            © {new Date().getFullYear()} Nexa Web Solutions. All rights reserved. | Durban, South Africa 🌍 Worldwide
          </p>
          <p className="text-xs font-inter text-muted-foreground/40">
            Web Design · Website Development · Global Clients Welcome
          </p>
        </div>
      </div>
    </footer>
  );
}
