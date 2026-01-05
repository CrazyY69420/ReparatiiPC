import { Search, Wrench, CheckCircle } from "lucide-react";

const solutions = [
  {
    icon: Search,
    title: "Diagnostic rapid",
    description: "Identificăm problema corect din prima, folosind echipamente profesionale de testare."
  },
  {
    icon: Wrench,
    title: "Reparație profesionistă",
    description: "Piese de calitate și tehnicieni cu experiență pentru lucrări sigure și durabile."
  },
  {
    icon: CheckCircle,
    title: "Testare & garanție",
    description: "Calculatorul pleacă perfect funcțional, cu garanție scrisă pentru liniștea ta."
  }
];

export function SolutionsSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Soluții IT complete, fără bătăi de cap
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Procesul nostru simplu și transparent te ajută să scapi rapid de probleme
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector Line */}
              {index < solutions.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-200" />
              )}
              
              <div className="relative bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
