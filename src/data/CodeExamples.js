export const codeExamples = {
  "App.jsx" : `
  
    import { useState } from "react";
    import { codeFlow } from "@codeflow/ai";

    function App () {
      const [code, setCode] = useState("");

      const handleAICompletion = async () => {
        const suggestion = await CodeFlow.complete(code);
        setCode(suggestion);
      };

      return (
        <div className="app">
          <CodeEditor
            onChange={setCode}
            onAI={handleAICompletion}
          />
        </div>
      );

    }
  `,
    "Hero.jsx" : `
  
    import { useState } from "react";
    import { codeFlow } from "@codeflow/ai";

    export default function Hero () {
      const [isTyping, setIsTyping] = useState(false);

      useEffect(() => {
        const timer = setTimeOut(() => {
          });
      });

      const handleAICompletion = async () => {
        const suggestion = await CodeFlow.complete(code);
        setCode(suggestion);
      };

      return (
        <div className="app">
          <CodeEditor
            onChange={setCode}
            onAI={handleAICompletion}
          />
        </div>
      );

    }
  `,
    "Navbar.jsx" : `
  
    import { useState } from "react";
    import { codeFlow } from "@codeflow/ai";

    export default function Navbar {
      const [isOpen, setIsOpen] = useState(false);
      const [searchQuery, setSearchQuery] = useState("");

      const handleAICompletion = async () => {
        const results = await CodeFlow.search(searchQuery);
        setCode(suggestion);
      };

      return (
        <div className="app">
          <CodeEditor
            onChange={setCode}
            onAI={handleAICompletion}
          />
        </div>
      );

    }
  `,
};

export const floatingCards = {
  "App.jsx" : {
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
    textColor: "text-blue-200", 
    contentColor: "text-blue-300",
    icon: "AI",
    title: "Smart Completion",
    content: "AI-powered code suggestion is real-time",
  },
  "Hero.jsx" : {
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400",
    textColor: "text-purple-200", 
    contentColor: "text-purple-300",
    icon: "⚡",
    title: "Auto Animation",
    content: "Dynamic typing effects generated automatically",
  },
  "Navbar.jsx" : {
    bgColor: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    textColor: "text-emerald-200", 
    contentColor: "text-emerald-300",
    icon: "🔍",
    title: "Smart Completion",
    content: "AI-powered code suggestion is real-time",
  },

}