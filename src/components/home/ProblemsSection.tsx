import { AlertTriangle, Laptop, Gauge, Monitor, Bug, HardDrive } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const problems = [
  {
    icon: Laptop,
    text: "Laptopul nu pornește",
  },
  {
    icon: Gauge,
    text: "Calculatorul merge foarte greu",
  },
  {
    icon: Monitor,
    text: "Ecran spart sau tastatură defectă",
  },
  {
    icon: Bug,
    text: "Viruși sau mesaje suspecte",
  },
  {
    icon: HardDrive,
    text: "Ai pierdut date importante",
  },
];

export function ProblemsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-destructive/10 text-destructive mb-6">
            <AlertTriangle className="w-8 h-8" />
          </div>

          {/* Title */}
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Te confrunți cu una dintre aceste probleme?
          </h2>

          {/* Problems Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-destructive/10 text-destructive flex items-center justify-center">
                  <problem.icon className="w-5 h-5" />
                </div>
                <span className="text-foreground font-medium text-left">{problem.text}</span>
              </div>
            ))}
          </div>

          {/* Message */}
          <p className="text-lg text-muted-foreground mb-8">
            <strong className="text-foreground">Nu ești singur.</strong> Rezolvăm zilnic astfel de probleme.
          </p>

          {/* CTA */}
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">Vreau ajutor acum</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
