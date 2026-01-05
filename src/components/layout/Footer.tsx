import { Link } from "react-router-dom";
import { Monitor, Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

const quickLinks = [
  { name: "Servicii", href: "/servicii" },
  { name: "Prețuri", href: "/preturi" },
  { name: "Despre Noi", href: "/despre" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Reparații Laptop", href: "/servicii#laptop" },
  { name: "Reparații PC", href: "/servicii#pc" },
  { name: "Instalare Windows", href: "/servicii#software" },
  { name: "Recuperare Date", href: "/servicii#recuperare" },
  { name: "Servicii Firme", href: "/servicii#firme" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground">
                <Monitor className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg">TechRepair</span>
                <span className="text-xs text-background/60 -mt-1">Service IT</span>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Servicii profesionale de reparații calculatoare și laptopuri. Rapid, sigur și cu garanție.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Link-uri Rapide</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Servicii</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+40700000000"
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  0700 000 000
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@techrepair.ro"
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  contact@techrepair.ro
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/70 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Str. Exemplu nr. 123, București</span>
              </li>
              <li className="flex items-start gap-3 text-background/70 text-sm">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Luni - Vineri: 09:00 - 18:00<br />Sâmbătă: 10:00 - 14:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} TechRepair. Toate drepturile rezervate.
            </p>
            <div className="flex gap-6">
              <Link
                to="/politica-confidentialitate"
                className="text-background/60 hover:text-primary transition-colors text-sm"
              >
                Politică GDPR
              </Link>
              <Link
                to="/termeni-conditii"
                className="text-background/60 hover:text-primary transition-colors text-sm"
              >
                Termeni și Condiții
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
