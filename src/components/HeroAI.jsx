import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { floatingCards } from "../data/CodeExamples";

const TABS = ["App.jsx", "Hero.jsx", "Navbar.jsx"];

export default function Hero() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const card = floatingCards?.[activeTab];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative w-full">
        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/10">

          {/* IDE Container */}
          <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 rounded-lg overflow-hidden h-[300px] border border-white/5">

            {/* Header */}
            <Header />

            {/* Content */}
            <div className="p-4 h-full flex flex-col">
              
              {/* Tabs */}
              <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

              {/* Code */}
              <CodeBlock code={card?.code} />

            </div>
          </div>

          {/* Floating Card */}
          {card && <FloatingCard card={card} />}
        </div>
      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
      <div className="flex items-center space-x-2">
        <div className="flex space-x-1">
          <Dot color="bg-red-500" />
          <Dot color="bg-yellow-500" />
          <Dot color="bg-green-500" />
        </div>
        <span className="text-sm text-gray-300">CodeFlow AI</span>
      </div>

      <ChevronDown className="w-4 h-4 text-gray-400" />
    </div>
  );
}

function Dot({ color }) {
  return <div className={`w-3 h-3 rounded-full ${color}`} />;
}

function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex space-x-2 mb-4 overflow-x-auto">
      {TABS.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-3 py-2 text-sm rounded-t-lg border whitespace-nowrap transition-all duration-200
            ${
              activeTab === tab
                ? "bg-blue-500/30 text-white border-blue-400/20"
                : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

function CodeBlock({ code }) {
  return (
    <pre className="text-sm text-gray-200 whitespace-pre-wrap flex-1 overflow-auto">
      {code || "No code available"}
    </pre>
  );
}

function FloatingCard({ card }) {
  return (
    <div
      className={`hidden sm:block absolute bottom-4 right-4 translate-x-8 translate-y-8 w-72 ${card.bgColor} backdrop-blur-xl rounded-lg p-4 border border-white/20 shadow-2xl`}
    >
      <div className="flex items-center space-x-2 mb-2">
        <div
          className={`w-6 h-6 ${card.iconColor} flex items-center justify-center text-sm font-bold`}
        >
          {card.icon}
        </div>

        <span className={`text-sm font-medium ${card.textColor}`}>
          {card.title}
        </span>
      </div>

      <div className={`text-sm ${card.contentColor}`}>
        {card.content}
      </div>
    </div>
  );
}