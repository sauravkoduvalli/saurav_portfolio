import { Mail, Github, Linkedin } from "lucide-react";
import { useTheme } from "../contexts/useThemeContext";

const socialLinks = [
  {
    href: "https://github.com/sauravkoduvalli",
    label: "GitHub",
    icon: <Github className="w-6 h-6 hover:text-[#D65A31] transition-colors" />,
  },
  {
    href: "https://www.linkedin.com/in/sauravkoduvalli",
    label: "LinkedIn",
    icon: (
      <Linkedin className="w-6 h-6 hover:text-[#D65A31] transition-colors" />
    ),
  },
  {
    href: "mailto:sauravkoduvalli@gmail.com",
    label: "Email",
    icon: <Mail className="w-6 h-6 hover:text-[#D65A31] transition-colors" />,
  },
];


const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer
      className={`border-t px-4 py-8 shadow-inner transition-colors duration-300 ${
        isDark
          ? "bg-[#18181b] text-[#EEEEEE] border-[#232323]"
          : "bg-[#f5f5f5] text-[#222831] border-[#e0e0e0]"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Name & tagline */}
        <div className="text-center md:text-left">
          <div className="text-2xl font-extrabold tracking-tight">Saurav K</div>
          <div
            className={`text-xs font-semibold mt-1 tracking-widest uppercase ${
              isDark ? "text-[#b0b0b0]" : "text-[#888888]"
            }`}
          >
            Mobile App Developer
          </div>
        </div>
        {/* Center: Copyright */}
        <div
          className={`text-center text-xs ${
            isDark ? "text-[#b0b0b0]" : "text-[#888888]"
          }`}
        >
          <div>© 2025 Saurav K. All rights reserved.</div>
          <div className="mt-1">Built with React & Tailwind CSS</div>
        </div>
        {/* Right: Social icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full border p-2 transition-colors duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#D65A31] ${
                isDark
                  ? "border-[#232323] text-[#EEEEEE] hover:text-[#D65A31] hover:border-[#D65A31]"
                  : "border-[#e0e0e0] text-[#222831] hover:text-[#D65A31] hover:border-[#D65A31]"
              }`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
