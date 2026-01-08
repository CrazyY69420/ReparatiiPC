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
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone
} from "lucide-react";

// Import service images
import serviceLaptop from "@/assets/service-laptop.jpg";
import servicePc from "@/assets/service-pc.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceSecurity from "@/assets/service-security.jpg";
import serviceData from "@/assets/service-data.jpg";
import serviceBusiness from "@/assets/service-business.jpg";

const services = [
  {
    id: "laptop",
    icon: Laptop,
    title: "Reparații Laptop",
    description: "Rezolvăm toate problemele laptopului tău, de la cele mai simple până la cele mai complexe. Servicii profesionale în București.",
    image: serviceLaptop,
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
    image: servicePc,
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
    image: serviceMaintenance,
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
    image: serviceSecurity,
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
    image: serviceData,
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
    image: serviceBusiness,
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

const serviceAreas = [
  "Sector 1", "Sector 2", "Sector 3", "Sector 4", "Sector 5", "Sector 6",
  "Ilfov", "Otopeni", "Voluntari", "Popești-Leordeni", "Bragadiru", "Chiajna"
];

export default function Servicii() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Servicii IT în București și Ilfov
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Oferim servicii IT complete pentru utilizatori casnici și firme. Diagnostic gratuit pentru toate problemele.
          </p>
          <div className="inline-flex items-center gap-2 text-gray-600">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Intervenții rapide în toate sectoarele Bucureștiului</span>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-gradient-to-b from-white to-slate-50">
        <div className="container-custom space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900">
                    {service.title}
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
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

              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-xl" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="relative rounded-2xl shadow-lg w-full h-auto object-cover border border-gray-100"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Deservim Zonele
            </h2>
            <p className="text-lg text-gray-600">
              Servicii IT la domiciliu și la sediul firmei în București și împrejurimi
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-slate-50 rounded-full text-gray-700 text-sm font-medium border border-gray-100"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nu găsești serviciul de care ai nevoie?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contactează-ne și îți vom oferi o soluție personalizată pentru problema ta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild>
                <Link to="/contact">
                  Contactează-ne
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-gray-300 text-gray-700">
                <a href="tel:+40700000000">
                  <Phone className="w-4 h-4 mr-2" />
                  0700 000 000
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
