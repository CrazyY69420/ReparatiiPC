import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Laptop, Monitor, Settings, ShieldCheck, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Laptop,
    title: "Reparații Laptop",
    description: "Placă de bază, ecran, baterie, conector alimentare, tastatură.",
    href: "/servicii#laptop"
  },
  {
    icon: Monitor,
    title: "Reparații PC",
    description: "Surse, plăci video, procesoare, upgrade-uri, asamblare.",
    href: "/servicii#pc"
  },
  {
    icon: Settings,
    title: "Curățare & Mentenanță",
    description: "Curățare profesională praf, înlocuire pastă termică.",
    href: "/servicii#mentenanta"
  },
  {
    icon: ShieldCheck,
    title: "Software & Windows",
    description: "Instalare, optimizare, licențe, eliminare viruși.",
    href: "/servicii#software"
  }
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Serviciile Noastre
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferim o gamă completă de servicii IT pentru utilizatori casnici și companii
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:border-primary/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="flex items-center text-primary font-medium text-sm">
                <span>Află mai multe</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild className="border-gray-300 text-gray-700 hover:bg-gray-50">
            <Link to="/servicii">
              Vezi toate serviciile
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
