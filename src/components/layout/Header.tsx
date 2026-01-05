import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Acasă", href: "/" },
  { name: "Servicii", href: "/servicii" },
  { name: "Prețuri", href: "/preturi" },
  { name: "Despre Noi", href: "/despre" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container-custom">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground">
              <Monitor className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                TechRepair
              </span>
              <span className="text-xs text-muted-foreground -mt-1">Service IT</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="call" size="sm" asChild>
              <a href="tel:+40700000000" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">0700 000 000</span>
                <span className="xl:hidden">Sună</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-border">
              <Button variant="call" className="w-full" asChild>
                <a href="tel:+40700000000" className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Sună acum: 0700 000 000
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
