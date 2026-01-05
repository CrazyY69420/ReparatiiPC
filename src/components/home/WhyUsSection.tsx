import { Award, Users, Clock, Shield, Home, ThumbsUp } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Peste 10 ani experiență",
    description: "Experiență vastă în reparații de toate tipurile",
  },
  {
    icon: Users,
    title: "Explicăm clar problema",
    description: "Fără jargon tehnic, înțelegi exact ce s-a reparat",
  },
  {
    icon: ThumbsUp,
    title: "Prețuri corecte",
    description: "Transparență totală, fără costuri ascunse",
  },
  {
    icon: Shield,
    title: "Garanție scrisă",
    description: "Toate reparațiile sunt garantate în scris",
  },
  {
    icon: Home,
    title: "Intervenții la domiciliu",
    description: "Venim noi la tine, pentru confortul tău",
  },
  {
    icon: Clock,
    title: "Reparații rapide",
    description: "Majoritatea problemelor rezolvate în aceeași zi",
  },
];

export function WhyUsSection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            De ce clienții ne recomandă
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Suntem dedicați să oferim cele mai bune servicii IT din oraș
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center">
                <reason.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-1">
                  {reason.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
