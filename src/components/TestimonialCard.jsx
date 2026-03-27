// components/TestimonialCard.jsx
export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl">
      <div className="flex items-start space-x-3 sm:space-x-4">
        <div className="shrink-0">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            "
          </div>
        </div>

        <div className="grow">
          <p className="text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
            {testimonial.content}
          </p>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              loading="lazy"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-white text-sm sm:text-base">
                {testimonial.name}
              </h4>
              <p className="text-xs sm:text-sm text-gray-400">
                {testimonial.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}