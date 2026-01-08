import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, ExternalLink } from "lucide-react";
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
      value: "Str. Exemplu nr. 123, Sector 1, București",
      href: "https://maps.google.com/?q=Bucuresti+Sector+1",
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
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Contactează-ne în București
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Suntem aici să te ajutăm. Sună-ne, scrie-ne sau completează formularul.
          </p>
          <div className="inline-flex items-center gap-2 text-gray-600">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Sector 1, București • Intervenții în toate sectoarele</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gradient-to-b from-white to-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                Trimite-ne un mesaj
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
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
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
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
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
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
                  <label htmlFor="problem" className="block text-sm font-medium text-gray-900 mb-2">
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
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                Informații de Contact
              </h2>
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
                <MessageCircle className="w-12 h-12 text-[hsl(142,70%,45%)] mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  Preferi WhatsApp?
                </h3>
                <p className="text-gray-600 mb-4">
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

      {/* Google Maps Section */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ne găsești în București
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Sediul nostru este ușor accesibil, cu parcare în apropiere. Apasă pe hartă pentru navigație rapidă.
            </p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            {/* Map Embed */}
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d182668.03111458502!2d25.95164!3d44.43225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucharest!5e0!3m2!1sen!2sro!4v1704800000000!5m2!1sen!2sro"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locația TechRepair București"
                className="w-full h-full"
              />
            </div>

            {/* Location Card */}
            <div className="p-6 md:p-8 bg-slate-50 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-gray-900 mb-1">
                    TechRepair București
                  </h3>
                  <p className="text-gray-600">
                    Str. Exemplu nr. 123, Sector 1<br />
                    București, 010001, România
                  </p>
                </div>
              </div>
              <Button variant="accent" size="lg" asChild>
                <a
                  href="https://maps.google.com/?q=Bucuresti+Sector+1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Deschide în Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Deservim toate zonele din București și Ilfov
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Sector 1", "Sector 2", "Sector 3", "Sector 4", "Sector 5", "Sector 6", "Ilfov", "Otopeni", "Voluntari", "Popești-Leordeni"].map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-white rounded-full text-gray-700 text-sm font-medium border border-gray-100 shadow-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
