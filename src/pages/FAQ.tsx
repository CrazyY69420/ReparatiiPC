import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, MapPin } from "lucide-react";

const faqs = [
  {
    question: "Cât costă diagnosticarea?",
    answer: "Diagnosticarea este complet gratuită. Venim cu calculatorul/laptopul tău, identificăm problema și îți oferim o estimare de cost înainte de a începe orice reparație. Plătești doar dacă ești de acord cu prețul.",
  },
  {
    question: "Cât durează o reparație?",
    answer: "Majoritatea reparațiilor sunt efectuate în aceeași zi sau în maxim 24-48 de ore. Pentru probleme mai complexe sau dacă trebuie comandate piese, te vom informa despre timpul estimat de la bun început.",
  },
  {
    question: "Oferiți garanție pentru reparații?",
    answer: "Da, toate reparațiile noastre vin cu garanție scrisă. Durata garanției variază în funcție de tipul reparației și piesele folosite, de obicei între 3 și 12 luni.",
  },
  {
    question: "Veniți la domiciliu în București?",
    answer: "Da, oferim servicii la domiciliu în toate sectoarele Bucureștiului și în Ilfov. Costul deplasării depinde de zonă și poate fi inclus în prețul reparației pentru comenzi mai mari.",
  },
  {
    question: "Ce tipuri de laptopuri și calculatoare reparați?",
    answer: "Reparăm toate mărcile și modelele de laptopuri și calculatoare desktop: Asus, Acer, HP, Dell, Lenovo, Apple MacBook, și multe altele. De asemenea, reparăm sisteme custom-built.",
  },
  {
    question: "Puteți recupera datele de pe un hard disk defect?",
    answer: "Da, oferim servicii de recuperare date pentru hard disk-uri, SSD-uri, stick-uri USB și carduri de memorie. Rata de succes depinde de tipul defecțiunii, dar în majoritatea cazurilor reușim să recuperăm datele.",
  },
  {
    question: "Cum pot plăti?",
    answer: "Acceptăm plata în numerar, card bancar sau transfer bancar. Pentru firme, oferim și posibilitatea de plată cu factură.",
  },
  {
    question: "Trebuie să aduc laptopul la voi sau veniți să-l luați?",
    answer: "Ambele variante sunt posibile. Poți să aduci echipamentul la sediul nostru din București, Sector 1, sau putem veni noi să-l ridicăm, în funcție de preferințele tale.",
  },
  {
    question: "Oferiți servicii pentru firme în București?",
    answer: "Da, avem pachete speciale pentru firme din București și Ilfov care includ contracte de mentenanță, suport tehnic prioritar, configurare rețele și multe altele. Contactează-ne pentru o ofertă personalizată.",
  },
  {
    question: "Ce fac dacă calculatorul meu are viruși?",
    answer: "Oferim servicii complete de eliminare viruși și malware. Vom curăța sistemul, vom instala protecție antivirus și te vom sfătui cum să eviți infecțiile viitoare.",
  },
];

export default function FAQ() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Întrebări Frecvente
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Răspunsuri la cele mai comune întrebări despre serviciile noastre de reparații IT în București
          </p>
          <div className="inline-flex items-center gap-2 text-gray-600">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Service IT București și Ilfov</span>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="section-padding bg-gradient-to-b from-white to-slate-50">
        <div className="container-custom max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border border-gray-100 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 text-center border border-gray-100">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nu ai găsit răspunsul?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contactează-ne și îți vom răspunde la orice întrebare despre serviciile noastre în București.
            </p>
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">
                Contactează-ne
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
