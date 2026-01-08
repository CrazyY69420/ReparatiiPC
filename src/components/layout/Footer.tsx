import { Link } from "react-router-dom";
import { Monitor, Phone, Mail, MapPin, Clock, Facebook, Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const serviceAreas = [
  "Sector 1", "Sector 2", "Sector 3", "Sector 4", "Sector 5", "Sector 6", "Ilfov"
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-white">
                <Monitor className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg">TechRepair</span>
                <span className="text-xs text-gray-400 -mt-1">Service IT București</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Servicii profesionale de reparații calculatoare și laptopuri în București și Ilfov. Rapid, sigur și cu garanție.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
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
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
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
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
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
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  0700 000 000
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@techrepair.ro"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  contact@techrepair.ro
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Bucuresti+Sector+1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Str. Exemplu nr. 123, Sector 1<br />București, România</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Luni - Vineri: 09:00 - 18:00<br />Sâmbătă: 10:00 - 14:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center mb-6">
            <h4 className="font-display font-semibold text-lg mb-4">Deservim Zonele</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1 bg-gray-800 rounded-full text-gray-400 text-xs"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Google Maps Button */}
        <div className="mt-8 text-center">
          <Button variant="outline" size="sm" asChild className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white">
            <a
              href="https://maps.google.com/?q=Bucuresti+Sector+1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Vezi locația pe Google Maps
              <ExternalLink className="w-3 h-3 ml-2" />
            </a>
          </Button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} TechRepair București. Toate drepturile rezervate.
            </p>
            <div className="flex gap-6">
              <Link
                to="/politica-confidentialitate"
                className="text-gray-500 hover:text-primary transition-colors text-sm"
              >
                Politică GDPR
              </Link>
              <Link
                to="/termeni-conditii"
                className="text-gray-500 hover:text-primary transition-colors text-sm"
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
