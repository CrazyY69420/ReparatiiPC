import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Clock, Shield, Heart, Target, ArrowRight } from "lucide-react";

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
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Despre Noi
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Echipa ta de încredere pentru reparații IT profesionale
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Povestea Noastră
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Am început această călătorie acum peste 10 ani, cu o viziune simplă: să oferim 
                  servicii IT de calitate, la prețuri corecte, cu respect pentru fiecare client.
                </p>
                <p>
                  De-a lungul anilor, am reparat mii de calculatoare și laptopuri, am ajutat 
                  sute de firme să-și mențină infrastructura IT funcțională și am construit 
                  relații de lungă durată bazate pe încredere și profesionalism.
                </p>
                <p>
                  Astăzi, suntem mândri să fim una dintre cele mai apreciate echipe de reparații 
                  IT din oraș, recunoscuți pentru expertiza noastră, comunicarea transparentă 
                  și dedicarea față de satisfacția clienților.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl flex items-center justify-center border border-border">
              <Award className="w-32 h-32 text-primary/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Valorile Noastre
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Principiile care ne ghidează în fiecare interacțiune cu clienții
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border shadow-card text-center hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hai să lucrăm împreună!
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Indiferent de problema ta IT, suntem aici să te ajutăm.
          </p>
          <Button variant="accent" size="lg" asChild>
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
