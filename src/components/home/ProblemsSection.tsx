import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Power, Gauge, MonitorX, Bug, HardDrive, Keyboard } from "lucide-react";

const problems = [
  { icon: Power, text: "Laptopul nu pornește" },
  { icon: Gauge, text: "Calculatorul merge foarte greu" },
  { icon: MonitorX, text: "Ecran spart sau tastatură defectă" },
  { icon: Bug, text: "Viruși sau mesaje suspecte" },
  { icon: HardDrive, text: "Ai pierdut date importante" },
  { icon: Keyboard, text: "Taste sau butoane nu funcționează" },
];

export function ProblemsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-50 text-red-500 mb-6">
            <AlertTriangle className="w-8 h-8" />
          </div>

          {/* Title */}
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Te confrunți cu una dintre aceste probleme?
          </h2>

          {/* Problems Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-primary/30 hover:shadow-md transition-all duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center">
                  <problem.icon className="w-5 h-5" />
                </div>
                <span className="text-gray-900 font-medium text-left">{problem.text}</span>
              </div>
            ))}
          </div>

          {/* Message */}
          <p className="text-lg text-gray-600 mb-8">
            <strong className="text-gray-900">Nu ești singur.</strong> Rezolvăm zilnic astfel de probleme.
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
