import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Award, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-repair.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6 animate-fade-up">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-gray-700">Peste 1000 de clienți mulțumiți</span>
              </div>

              {/* Title */}
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up stagger-1 text-gray-900">
                Reparații Calculatoare și Laptopuri –{" "}
                <span className="text-primary">Rapid, Sigur și cu Garanție</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed animate-fade-up stagger-2">
                Diagnostic gratuit • Intervenții rapide • Suport IT la domiciliu și pentru firme
              </p>

              {/* Features */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8 animate-fade-up stagger-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-gray-700">Rapid</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-gray-700">Sigur</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-gray-700">Garanție</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up stagger-4">
                <Button variant="accent" size="xl" asChild>
                  <Link to="/contact">
                    Programează reparația acum
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  <a href="tel:+40700000000">
                    <Phone className="w-5 h-5" />
                    Sună un tehnician
                  </a>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block relative animate-fade-up stagger-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl" />
                <img
                  src={heroImage}
                  alt="Reparații calculatoare profesionale"
                  className="relative rounded-2xl shadow-xl w-full h-auto object-cover border border-gray-100"
                  id="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
