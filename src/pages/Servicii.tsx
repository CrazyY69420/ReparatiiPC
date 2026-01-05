import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Laptop, 
  Monitor, 
  Fan, 
  Settings, 
  HardDrive, 
  Shield, 
  Building2,
  Network,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    id: "laptop",
    icon: Laptop,
    title: "Reparații Laptop",
    description: "Rezolvăm toate problemele laptopului tău, de la cele mai simple până la cele mai complexe.",
    features: [
      "Diagnostic complet hardware și software",
      "Înlocuire ecran (LCD, LED, IPS)",
      "Reparații placă de bază",
      "Înlocuire tastatură și touchpad",
      "Reparații conector alimentare",
      "Înlocuire baterie",
      "Upgrade RAM și SSD",
    ],
  },
  {
    id: "pc",
    icon: Monitor,
    title: "Reparații PC Desktop",
    description: "Asamblare, upgrade și reparații pentru calculatoare desktop de orice configurație.",
    features: [
      "Asamblare PC la comandă",
      "Reparații și înlocuire surse",
      "Upgrade plăci video",
      "Înlocuire procesoare și coolere",
      "Reparații plăci de bază",
      "Testare și diagnosticare",
      "Optimizare performanță",
    ],
  },
  {
    id: "mentenanta",
    icon: Fan,
    title: "Curățare & Mentenanță",
    description: "Mentenanță preventivă pentru a prelungi durata de viață a echipamentelor tale.",
    features: [
      "Curățare profesională praf",
      "Schimb pastă termică",
      "Curățare sistem răcire",
      "Verificare temperaturi",
      "Optimizare ventilatoare",
      "Mentenanță periodică",
    ],
  },
  {
    id: "software",
    icon: Settings,
    title: "Software & Securitate",
    description: "Instalări, configurări și protecție completă pentru sistemul tău de operare.",
    features: [
      "Instalare Windows 10/11",
      "Instalare drivere și programe",
      "Eliminare viruși și malware",
      "Configurare antivirus",
      "Optimizare sistem",
      "Backup și restore",
    ],
  },
  {
    id: "recuperare",
    icon: HardDrive,
    title: "Recuperare Date",
    description: "Recuperăm datele tale pierdute de pe hard disk-uri, SSD-uri și alte dispozitive.",
    features: [
      "Recuperare date HDD",
      "Recuperare date SSD",
      "Recuperare de pe USB/carduri",
      "Recuperare fișiere șterse",
      "Recuperare partiții",
      "Backup date importante",
    ],
  },
  {
    id: "firme",
    icon: Building2,
    title: "Servicii pentru Firme",
    description: "Soluții IT complete pentru afacerea ta, de la suport tehnic la infrastructură.",
    features: [
      "Contracte de mentenanță",
      "Suport tehnic remote",
      "Configurare rețele",
      "Administrare servere",
      "Soluții backup enterprise",
      "Consultanță IT",
    ],
  },
];

export default function Servicii() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Serviciile Noastre
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Oferim servicii IT complete pentru utilizatori casnici și firme. Diagnostic gratuit pentru toate problemele.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-custom space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    {service.title}
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="accent" asChild>
                  <Link to="/contact">
                    Solicită o ofertă
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>

              {/* Image Placeholder */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl flex items-center justify-center border border-border">
                  <service.icon className="w-24 h-24 text-primary/30" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nu găsești serviciul de care ai nevoie?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contactează-ne și îți vom oferi o soluție personalizată pentru problema ta.
          </p>
          <Button variant="default" size="lg" asChild>
            <Link to="/contact">
              Contactează-ne
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
