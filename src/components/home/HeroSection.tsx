import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Award, Phone, ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-technician.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
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
                Reparații Calculatoare și Laptopuri în{" "}
                <span className="text-primary">București</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed animate-fade-up stagger-2">
                Rapid, Sigur și cu Garanție • Diagnostic gratuit • Suport IT la domiciliu și pentru firme
              </p>

              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 text-gray-600 mb-8 animate-fade-up stagger-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm">Sector 1, București • Deservim toate sectoarele</span>
              </div>

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
                <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
                <img
                  src={heroImage}
                  alt="Tehnician IT profesionist reparând calculator în București"
                  className="relative rounded-2xl shadow-xl w-full h-auto object-cover border border-gray-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
