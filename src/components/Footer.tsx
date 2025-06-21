import { Mail, Github, Linkedin } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/sauravkoduvalli",
    label: "GitHub",
    icon: <Github className="w-6 h-6 hover:text-[#D65A31] transition-colors" />,
  },
  {
    href: "https://www.linkedin.com/in/sauravkoduvalli ",
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

const Footer = () => (
  <footer className="bg-[#222831] text-[#EEEEEE] border-t border-[#393E46] py-6 px-4 shadow-inner">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Left: Name & tagline */}
      <div className="text-center md:text-left">
        <div className="text-xl font-bold">Saurav K</div>
        <div className="text-sm text-[#D65A31] font-medium">
          Mobile App Developer
        </div>
      </div>
      {/* Center: Nav links */}
      <div className="text-center text-xs text-[#b0b0b0]">
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
            className="text-[#EEEEEE] hover:text-[#D65A31] transition-colors"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
