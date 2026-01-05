import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-slate-50">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-lg p-8 md:p-12 lg:p-16">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Calculatorul tău merită o reparație corectă
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Nu lăsa problemele tehnice să îți afecteze productivitatea. Contactează-ne acum pentru un diagnostic gratuit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">
                  Contactează-ne acum
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="border-gray-300 text-gray-700 hover:bg-gray-50">
                <a href="tel:+40700000000">
                  <Phone className="w-5 h-5" />
                  0700 000 000
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
