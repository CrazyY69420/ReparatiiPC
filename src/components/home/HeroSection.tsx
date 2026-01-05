import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Award, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-repair.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-up">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Peste 1000 de clienți mulțumiți</span>
              </div>

              {/* Title */}
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up stagger-1">
                Reparații Calculatoare și Laptopuri –{" "}
                <span className="text-accent">Rapid, Sigur și cu Garanție</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-up stagger-2">
                Diagnostic gratuit • Intervenții rapide • Suport IT la domiciliu și pentru firme
              </p>

              {/* Features */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8 animate-fade-up stagger-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">Rapid</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">Sigur</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">Garanție</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up stagger-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Programează reparația acum
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
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
                <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-3xl" />
                <img
                  src={heroImage}
                  alt="Reparații calculatoare profesionale"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                  id="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
