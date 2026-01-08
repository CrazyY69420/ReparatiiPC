import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Phone, MapPin } from "lucide-react";

const priceCategories = [
  {
    title: "Diagnostic & Consultanță",
    items: [
      { name: "Diagnostic hardware/software", price: "Gratuit" },
      { name: "Consultanță tehnică", price: "Gratuit" },
      { name: "Estimare reparație", price: "Gratuit" },
    ],
  },
  {
    title: "Servicii Software",
    items: [
      { name: "Instalare Windows 10/11", price: "de la 80 lei" },
      { name: "Instalare drivere și programe", price: "de la 50 lei" },
      { name: "Eliminare viruși și malware", price: "de la 60 lei" },
      { name: "Optimizare sistem", price: "de la 50 lei" },
      { name: "Backup date", price: "de la 40 lei" },
    ],
  },
  {
    title: "Reparații Laptop",
    items: [
      { name: "Curățare laptop + pastă termică", price: "de la 80 lei" },
      { name: "Înlocuire tastatură", price: "de la 100 lei" },
      { name: "Înlocuire ecran", price: "de la 200 lei" },
      { name: "Reparație conector alimentare", price: "de la 100 lei" },
      { name: "Înlocuire baterie", price: "de la 150 lei" },
      { name: "Reparație placă de bază", price: "de la 150 lei" },
    ],
  },
  {
    title: "Reparații PC Desktop",
    items: [
      { name: "Curățare PC + pastă termică", price: "de la 60 lei" },
      { name: "Înlocuire sursa", price: "de la 50 lei" },
      { name: "Upgrade RAM", price: "de la 30 lei" },
      { name: "Upgrade SSD/HDD", price: "de la 40 lei" },
      { name: "Înlocuire placă video", price: "de la 50 lei" },
      { name: "Asamblare PC", price: "de la 100 lei" },
    ],
  },
  {
    title: "Recuperare Date",
    items: [
      { name: "Recuperare date HDD", price: "de la 150 lei" },
      { name: "Recuperare date SSD", price: "de la 200 lei" },
      { name: "Recuperare fișiere șterse", price: "de la 100 lei" },
    ],
  },
];

export default function Preturi() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Prețuri Corecte, Fără Surprize
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Transparență totală. Plătești doar ce este necesar. Diagnostic gratuit pentru toate problemele.
          </p>
          <div className="inline-flex items-center gap-2 text-gray-600">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Prețuri valabile în București și Ilfov</span>
          </div>
        </div>
      </section>

      {/* Price Lists */}
      <section className="section-padding bg-gradient-to-b from-white to-slate-50">
        <div className="container-custom">
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 mb-12 text-center">
            <p className="text-gray-700">
              <strong>Notă:</strong> Prețurile sunt orientative și pot varia în funcție de complexitatea problemei și piesele necesare. 
              Oferim diagnostic gratuit și estimare exactă înainte de orice intervenție.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {priceCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="bg-slate-50 px-6 py-4 border-b border-gray-100">
                  <h2 className="font-display text-xl font-bold text-gray-900">
                    {category.title}
                  </h2>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item.name}</span>
                        </div>
                        <span className={`font-semibold whitespace-nowrap ${
                          item.price === "Gratuit" ? "text-primary" : "text-gray-900"
                        }`}>
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-gray-100 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ai nevoie de o ofertă personalizată?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contactează-ne pentru un diagnostic gratuit și o estimare exactă a costurilor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild>
                <Link to="/contact">
                  Solicită o ofertă
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-gray-300 text-gray-700">
                <a href="tel:+40700000000">
                  <Phone className="w-4 h-4 mr-2" />
                  Sună acum
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
