import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Austin, TX",
    rating: 5,
    text: "The guidance I received was incredibly helpful. They explained everything about my internet options without any pressure. Truly independent and professional service.",
    avatar: "S",
  },
  {
    name: "Michael R.",
    location: "Denver, CO",
    rating: 5,
    text: "Finally found a service that doesn't try to sell me anything! They provided clear, unbiased information about cable TV services in my area.",
    avatar: "M",
  },
  {
    name: "Jennifer L.",
    location: "Seattle, WA",
    rating: 5,
    text: "As a senior, I appreciated their patience in explaining Wi-Fi setup options. No technical jargon, just helpful guidance. Highly recommended!",
    avatar: "J",
  },
  {
    name: "David K.",
    location: "Phoenix, AZ",
    rating: 5,
    text: "Quick response and knowledgeable advisors. They helped me understand my broadband options clearly. Great independent service!",
    avatar: "D",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 bg-slate-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            What People Say
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
            Customer Experiences
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-coral">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6 pt-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>

            {/* Text */}
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8 font-light">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-ocean-light flex items-center justify-center text-white font-bold text-xl">
                {testimonials[currentIndex].avatar}
              </div>
              <div>
                <p className="text-primary-foreground font-semibold text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-primary-foreground/60 text-sm">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrev}
              className="w-12 h-12 rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-primary-foreground"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-accent"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-primary-foreground"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
