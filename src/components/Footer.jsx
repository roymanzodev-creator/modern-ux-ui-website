import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { FOOTER_LINKS } from "../data/footer";

// ✅ Social links config
const SOCIAL_LINKS = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Mail, label: "Email", href: "#" },
];

// ✅ Reusable components
function SocialIcon({ Icon, href, label }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">
        {title}
      </h3>
      <ul className="space-y-2 sm:space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">

        {/* Main Section */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          
          {/* Logo + Description */}
          <div className="col-span-1 sm:col-span-3 lg:col-span-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4">
              <img src="/logo.png" alt="CodeFlow Logo" className="w-8 h-8" />
              <span className="text-xl font-bold">
                <span className="text-white">Code</span>
                <span className="text-blue-400">Flow</span>
              </span>
            </div>

            <p className="text-gray-400 mb-6 max-w-xs mx-auto sm:mx-0 text-sm sm:text-base">
              Transform your workflow with AI-powered tools and automation.
              Built for modern teams.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start space-x-4">
              {SOCIAL_LINKS.map(({ icon, href, label }) => (
                <SocialIcon key={label} Icon={icon} href={href} label={label} />
              ))}
            </div>
          </div>

          {/* Footer Columns */}
          <div className="sm:col-span-3 lg:col-span-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
              {FOOTER_LINKS.map((section) => (
                <FooterColumn
                  key={section.title}
                  title={section.title}
                  links={section.links}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm">
              © {new Date().getFullYear()} CodeFlow. All rights reserved.
            </p>

            <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}