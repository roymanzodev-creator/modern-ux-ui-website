import { useState } from "react";

export default function Test() {
  const [activeTab, setActiveTab] = useState("button1");

  const tabs = ["button1", "button2", "button3"];

  const baseStyle = "px-3 py-2 bg-slate-900 transition-colors";
  const activeStyle = "text-red-400";
  const inactiveStyle = "text-white hover:bg-slate-800";

  return (
    <div>
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${baseStyle} ${
              activeTab === tab ? activeStyle : inactiveStyle
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}