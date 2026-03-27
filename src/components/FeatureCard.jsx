export default function FeatureCard({ feature }) {
  const isReverse = feature.imagePosition === "right";

  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${
        isReverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Code Section */}
      <div className="flex-1 w-full">
        <div className="relative group">
          <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl transition-all duration-500" />

          <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden group-hover:border-blue-600/50 transition-all duration-300">
            
            {/* IDE UI */}
            <div className="bg-gray-950 rounded-lg p-3 sm:p-4 font-mono text-sm">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                <span className="text-gray-400 ml-4 text-xs">
                  {feature.title}
                </span>
              </div>

              <pre className="text-gray-200 whitespace-pre-wrap text-xs sm:text-sm">
                {feature.code || "No code available"}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="flex-1 w-full">
        <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {feature.title}
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
}