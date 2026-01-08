import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Clock, Shield, Heart, Target, ArrowRight, MapPin } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";
import officeWorkspace from "@/assets/office-workspace.jpg";

const values = [
  {
    icon: Heart,
    title: "Pasiune pentru Tehnologie",
    description: "Suntem pasionați de ceea ce facem și asta se vede în calitatea muncii noastre.",
  },
  {
    icon: Users,
    title: "Orientare către Client",
    description: "Fiecare client este important pentru noi. Explicăm clar și oferim suport pe întreg procesul.",
  },
  {
    icon: Shield,
    title: "Integritate",
    description: "Prețuri corecte, fără costuri ascunse. Facem doar ce este necesar.",
  },
  {
    icon: Target,
    title: "Excelență",
    description: "Ne străduim să oferim cele mai bune soluții, folosind piese de calitate.",
  },
];

const stats = [
  { value: "10+", label: "Ani de experiență" },
  { value: "1000+", label: "Clienți mulțumiți" },
  { value: "5000+", label: "Reparații efectuate" },
  { value: "98%", label: "Rată de succes" },
];

export default function Despre() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Despre Noi
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Echipa ta de încredere pentru reparații IT profesionale în București
          </p>
          <div className="inline-flex items-center gap-2 text-gray-600">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Sector 1, București</span>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-gradient-to-b from-white to-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Povestea Noastră
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Am început această călătorie acum peste 10 ani, cu o viziune simplă: să oferim 
                  servicii IT de calitate, la prețuri corecte, cu respect pentru fiecare client din București.
                </p>
                <p>
                  De-a lungul anilor, am reparat mii de calculatoare și laptopuri, am ajutat 
                  sute de firme din Capitală să-și mențină infrastructura IT funcțională și am construit 
                  relații de lungă durată bazate pe încredere și profesionalism.
                </p>
                <p>
                  Astăzi, suntem mândri să fim una dintre cele mai apreciate echipe de reparații 
                  IT din București, recunoscuți pentru expertiza noastră, comunicarea transparentă 
                  și dedicarea față de satisfacția clienților.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-xl" />
              <img
                src={teamPhoto}
                alt="Echipa TechRepair București"
                className="relative rounded-2xl shadow-lg w-full h-auto object-cover border border-gray-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-slate-50 border border-gray-100">
                <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Image */}
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="container-custom py-12">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-xl" />
            <img
              src={officeWorkspace}
              alt="Laboratorul TechRepair București"
              className="relative rounded-2xl shadow-lg w-full h-auto object-cover border border-gray-100"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Valorile Noastre
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Principiile care ne ghidează în fiecare interacțiune cu clienții
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center hover:shadow-md hover:border-gray-200 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-lg font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 text-center border border-gray-100">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hai să lucrăm împreună!
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Indiferent de problema ta IT, suntem aici să te ajutăm în București și Ilfov.
            </p>
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">
                Contactează-ne
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
