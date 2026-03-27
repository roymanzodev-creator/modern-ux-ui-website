// components/Testimonials.jsx
import { testimonials } from "../data/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
          
          {/* Left Side */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              What developers say about us
            </h2>

            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0">
              Everything you need to build, test, and deploy applications with
              AI-powered development tools.
            </p>
          </div>

          {/* Right Side */}
          <div className="lg:w-1/2 w-full">
            <div className="space-y-6 sm:space-y-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}