import { Globe, Mail, Phone, MessageSquare, ArrowRight } from "lucide-react";

export default function Footer() {
  const scrollTo = (href) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (href.startsWith('/#')) {
      window.location.href = href;
    } else {
      window.location.href = href;
    }
  };

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="relative border-t border-white/10 pt-12 sm:pt-16 pb-8 overflow-hidden bg-black">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 mb-10 sm:mb-12 text-center sm:text-left">

          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <Globe className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-playfair font-bold text-lg text-white">
                Nexa Web Solutions
              </span>
            </div>
            <p className="text-sm font-dm text-white/50 leading-[1.8] font-light mb-5 max-w-xs">
              Affordable web design &amp; hosting for businesses in <strong className="text-white font-medium">South Africa and worldwide</strong>.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/27823562239"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded bg-[#25D366]/15 border border-[#25D366]/25 flex items-center justify-center hover:bg-[#25D366]/25 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
              </a>
              <a
                href="mailto:poomeigh503@gmail.com"
                className="w-9 h-9 rounded bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-primary" />
              </a>
              <a
                href="tel:0823562239"
                className="w-9 h-9 rounded bg-background border border-border flex items-center justify-center hover:bg-secondary transition-all duration-300"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-playfair font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm font-dm text-white/50 hover:text-white transition-all duration-200 flex items-center gap-1.5 group font-light"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-playfair font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a href="tel:0823562239" className="flex items-center gap-3 text-sm font-dm text-white/50 hover:text-white transition-all duration-200 group font-light">
                <div className="w-8 h-8 rounded bg-background flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                082 356 2239
              </a>
              <a href="tel:0820610949" className="flex items-center gap-3 text-sm font-dm text-muted-foreground hover:text-primary transition-all duration-200 group font-light">
                <div className="w-8 h-8 rounded bg-background flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                082 061 0949
              </a>
              <a href="mailto:poomeigh503@gmail.com" className="flex items-center gap-3 text-sm font-dm text-muted-foreground hover:text-primary transition-all duration-200 group font-light">
                <div className="w-8 h-8 rounded bg-background flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                poomeigh503@gmail.com
              </a>
              <div className="pt-2">
                <p className="text-xs font-dm text-muted-foreground/60 font-light">Mon–Fri: 8:00–18:00 · Sat: 9:00–14:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs font-dm text-white/40 font-light">
            © {new Date().getFullYear()} Nexa Web Solutions. All rights reserved.
          </p>
          <p className="text-xs font-dm text-white/30 font-light">
            Made with precision · Designed for the world
          </p>
        </div>
      </div>
    </footer>
  );
}
