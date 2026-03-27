import { features } from "../data/featuresData";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section
      id="features"
      className="py-16 sm:py-20 px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-linear-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Your Complete Development
            </span>
            <br />
            <span className="bg-linear-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Workflow
            </span>
          </h2>
        </div>

        {/* Features List */}
        <div className="space-y-20 lg:space-y-32">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}