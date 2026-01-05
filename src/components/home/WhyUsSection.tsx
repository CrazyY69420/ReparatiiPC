import { Award, Clock, Shield, Wrench, MapPin, MessageCircle } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Peste 10 ani experiență",
    description: "Expertiză solidă în reparații hardware și software pentru toate tipurile de dispozitive."
  },
  {
    icon: MessageCircle,
    title: "Explicăm clar problema",
    description: "Comunicare transparentă - înțelegi exact ce s-a întâmplat și ce facem pentru a rezolva."
  },
  {
    icon: Shield,
    title: "Prețuri corecte",
    description: "Fără costuri ascunse sau surprize neplăcute. Plătești doar ce este necesar."
  },
  {
    icon: Award,
    title: "Garanție scrisă",
    description: "Toate lucrările vin cu garanție, pentru liniștea ta sufletească."
  },
  {
    icon: MapPin,
    title: "Intervenții la domiciliu",
    description: "Venim la tine acasă sau la birou, pentru confortul tău maxim."
  },
  {
    icon: Wrench,
    title: "Piese de calitate",
    description: "Folosim doar componente originale sau compatibile de înaltă calitate."
  }
];

export function WhyUsSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            De ce clienții ne recomandă
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Suntem dedicați să oferim cele mai bune servicii IT din oraș
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <reason.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-1 text-gray-900">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
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
