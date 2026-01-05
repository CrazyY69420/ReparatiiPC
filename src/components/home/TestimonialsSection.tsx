import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mihai D.",
    role: "Client particular",
    content: "Mi-au recuperat toate datele și au reparat laptopul în aceeași zi. Serviciu impecabil, recomand cu încredere!",
    rating: 5,
  },
  {
    name: "Elena T.",
    role: "Antreprenor",
    content: "Foarte serioși. Am primit garanție și explicații clare despre ce s-a reparat. Prețuri corecte și muncă de calitate.",
    rating: 5,
  },
  {
    name: "Andrei M.",
    role: "Manager IT",
    content: "Colaborăm de 3 ani pentru întreținerea calculatoarelor din firmă. Intervenții rapide și profesionale de fiecare dată.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ce spun clienții noștri
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Satisfacția clienților este prioritatea noastră numărul unu
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-card-hover transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                <Quote className="w-5 h-5" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
