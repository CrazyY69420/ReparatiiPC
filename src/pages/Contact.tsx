import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    problem: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Mesaj trimis cu succes!",
      description: "Te vom contacta în cel mai scurt timp posibil.",
    });
    
    setFormData({ name: "", phone: "", email: "", problem: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      value: "0700 000 000",
      href: "tel:+40700000000",
    },
    {
      icon: Mail,
      title: "Email",
      value: "contact@techrepair.ro",
      href: "mailto:contact@techrepair.ro",
    },
    {
      icon: MapPin,
      title: "Adresă",
      value: "Str. Exemplu nr. 123, București",
      href: "#",
    },
    {
      icon: Clock,
      title: "Program",
      value: "Luni - Vineri: 09:00 - 18:00\nSâmbătă: 10:00 - 14:00",
      href: "#",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Contactează-ne
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Suntem aici să te ajutăm. Sună-ne, scrie-ne sau completează formularul.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Trimite-ne un mesaj
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nume complet *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Ion Popescu"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefon *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="0700 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email (opțional)
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@exemplu.ro"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="problem" className="block text-sm font-medium text-foreground mb-2">
                    Descrie problema *
                  </label>
                  <Textarea
                    id="problem"
                    placeholder="Descrie pe scurt problema cu care te confrunți..."
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    required
                    rows={4}
                    className="resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Se trimite..."
                  ) : (
                    <>
                      Trimite mesajul
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Informații de Contact
              </h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 shadow-card hover:shadow-card-hover transition-all duration-200"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-line">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-[hsl(142,70%,45%)]/10 border border-[hsl(142,70%,45%)]/20 rounded-2xl p-6 text-center">
                <MessageCircle className="w-12 h-12 text-[hsl(142,70%,45%)] mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  Preferi WhatsApp?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Scrie-ne direct pe WhatsApp pentru un răspuns rapid.
                </p>
                <Button variant="whatsapp" size="lg" asChild>
                  <a
                    href={`https://wa.me/40700000000?text=${encodeURIComponent("Bună ziua! Aș dori mai multe informații despre serviciile de reparații.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Deschide WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-secondary/30 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
          <p className="text-muted-foreground">
            Aici va fi afișată harta cu locația noastră
          </p>
        </div>
      </section>
    </Layout>
  );
}
