import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Tentang", href: "#tentang" },
  { label: "Manfaat", href: "#manfaat" },
  { label: "Varian", href: "#varian" },
  { label: "Cara Pakai", href: "#cara" },
  { label: "Beli", href: "#beli" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <nav className={`max-w-6xl mx-auto glass-strong rounded-2xl transition-all duration-300 ${
        scrolled ? "shadow-xl shadow-primary/10" : ""
      }`}>
        <div className="px-4 md:px-6">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <span className="text-xl font-bold gradient-text">HALT SPS</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild size="sm" className="shadow-lg shadow-primary/20">
                <a href="#beli">Beli Sekarang</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground glass rounded-xl"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Nav */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-border/30">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <Button asChild size="sm" className="w-full shadow-lg shadow-primary/20">
                  <a href="#beli" onClick={() => setIsOpen(false)}>
                    Beli Sekarang
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
