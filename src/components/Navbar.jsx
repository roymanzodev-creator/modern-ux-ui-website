import { Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const navClasses = `
    fixed top-0 w-full z-50 transition-all duration-300
    ${
      scrolled
        ? "bg-slate-950/80 backdrop-blur-lg border-b border-slate-800"
        : "bg-slate-950/20 backdrop-blur-sm"
    }
  `;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">

          {/* Logo */}
          <div className="flex items-center space-x-1 cursor-pointer">
            <img src="/logo.png" alt="OutsiderWR Logo" className="h-5 sm:h-10" />
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-white">OUTSIDER</span>
              <span className="text-gray-400">WR</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            {isOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
            <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.href} {...link} onClick={closeMenu} mobile />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

/* Reusable Link Component */
function NavLink({ label, href, onClick, mobile }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`
        ${mobile ? "block" : ""}
        text-gray-300 hover:text-white text-sm lg:text-base
      `}
    >
      {label}
    </a>
  );
}