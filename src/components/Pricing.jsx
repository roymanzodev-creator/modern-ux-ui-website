import { Check, Star } from "lucide-react";
import { PLANS } from "../data/plans";



// 2. Extract reusable card component
function PricingCard({ plan }) {
  return (
    <div
      className={`relative flex flex-col h-full p-6 sm:px-8 rounded-xl sm:rounded-2xl border transition-all duration-300 backdrop-blur-sm bg-slate-900/50 group
        ${
          plan.isPopular
            ? "border-blue-500 shadow-2xl shadow-blue-500/20 lg:scale-105"
            : "border-slate-800 hover:border-slate-700"
        }
      `}
    >
      {/* Hover Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-linear-to-br from-white/10 via-transparent to-transparent rounded-lg pointer-events-none" />

      {/* Badge */}
      {plan.isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <div className="flex items-center gap-1 px-4 py-1.5 text-sm font-semibold rounded-full shadow-lg bg-linear-to-br from-blue-500 to-cyan-500">
            <Star className="w-3 h-3 fill-white" />
            Most Popular
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p className="text-gray-400 text-sm mb-4">{plan.description}</p>

        <div className="flex justify-center items-center">
          <span className="text-4xl lg:text-5xl font-bold bg-linear-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            ${plan.price}
          </span>
          <span className="text-gray-400 ml-2 text-sm">/month</span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <div className="flex items-center justify-center w-5 h-5 mt-0.5 rounded-full bg-blue-500/20">
              <Check className="w-3 h-3 text-blue-400" />
            </div>
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        className={`mt-auto w-full py-3 px-6 rounded-lg text-sm font-semibold transition-all duration-300
          ${
            plan.isPopular
              ? "bg-linear-to-br from-blue-500 to-cyan-500"
              : "bg-white/5 border border-white/10 hover:bg-white/10"
          }
        `}
      >
        Get Started
      </button>
    </div>
  );
}

// 3. Main component
export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-linear-to-br from-white to-gray-300 bg-clip-text text-transparent">
              Simple, Transparent
            </span>
            <br />
            <span className="bg-linear-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg">
            Need a custom plan?{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}