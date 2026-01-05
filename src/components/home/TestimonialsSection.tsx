import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mihai Dumitrescu",
    role: "Client particular",
    content: "Mi-au recuperat toate datele și au reparat laptopul în aceeași zi. Recomand cu încredere!",
    rating: 5
  },
  {
    name: "Elena Teodorescu",
    role: "Manager firmă",
    content: "Foarte serioși și profesioniști. Am primit garanție și explicații clare pentru fiecare reparație.",
    rating: 5
  },
  {
    name: "Alexandru Popa",
    role: "Freelancer",
    content: "Echipa a venit la birou și a rezolvat toate problemele IT într-o singură vizită. Excelent!",
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ce spun clienții noștri
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Satisfacția clienților este prioritatea noastră numărul unu
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                <Quote className="w-5 h-5" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6">
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
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
