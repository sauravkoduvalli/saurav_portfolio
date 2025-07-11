import { motion } from "framer-motion";
import { useState } from "react";
import type { FormEvent } from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/sauravkoduvalli",
    label: "GitHub",
    icon: <Github className="w-6 h-6" />,
  },
  {
    href: "https://www.linkedin.com/in/sauravkoduvalli/",
    label: "LinkedIn",
    icon: <Linkedin className="w-6 h-6" />,
  },
  {
    href: "mailto:sauravkoduvalli@gmail.com",
    label: "Email",
    icon: <Mail className="w-6 h-6" />,
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div
      id="contact"
      className={`min-h-screen w-full flex flex-col items-center justify-center px-4 py-16 transition-colors duration-300 pt-30 md:pt-36 lg:pt-40 bg-white text-black dark:bg-[#18181b] dark:text-white`}
    >
      <div className="w-full max-w-5xl px-4 md:px-8 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className={`rounded-2xl border shadow-lg p-10 flex flex-col gap-10 justify-center transition-colors duration-300 dark:bg-[#232323] dark:border-[#393E46] dark:text-[#EEEEEE] bg-white border-[#e0e0e0] text-[#222831]`}
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold mb-2">Contact Info</h3>
              <div className="flex items-center gap-3 text-base font-medium">
                <MapPin className="w-5 h-5 opacity-80" />
                <span>Kochi, India</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <h4 className="text-base font-semibold">Connect</h4>
              <div className="flex flex-row gap-5 mt-1">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-full p-2 border transition-colors duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 dark:border-[#393E46] dark:text-[#EEEEEE] dark:hover:text-teal-400 dark:hover:border-teal-400 border-[#e0e0e0] text-[#222831] hover:text-teal-500 hover:border-teal-500`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="pt-6 border-t text-sm leading-relaxed transition-colors duration-300 dark:border-[#393E46] border-[#e0e0e0]">
              <p className="dark:text-[#b0b0b0] text-[#888888]">
                I look forward to discussing your project or opportunity.
                <br />
                Feel free to reach out through any of the channels above.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={`rounded-2xl border shadow-lg p-10 flex flex-col justify-center transition-colors duration-300 dark:bg-[#232323] dark:border-[#393E46] dark:text-[#EEEEEE] bg-white border-[#e0e0e0] text-[#222831]`}
          >
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-xs font-semibold mb-2 uppercase tracking-wider dark:text-[#b0b0b0] text-[#888888]`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-[#D65A31] transition-all shadow-sm dark:border-[#393E46] dark:text-[#EEEEEE] dark:placeholder:text-[#888888] border-[#e0e0e0] text-[#222831] placeholder:text-[#b0b0b0]`}
                  required
                  autoComplete="off"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className={`block text-xs font-semibold mb-2 uppercase tracking-wider dark:text-[#b0b0b0] text-[#888888]`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-[#D65A31] transition-all shadow-sm dark:border-[#393E46] dark:text-[#EEEEEE] dark:placeholder:text-[#888888] border-[#e0e0e0] text-[#222831] placeholder:text-[#b0b0b0]`}
                  required
                  autoComplete="off"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className={`block text-xs font-semibold mb-2 uppercase tracking-wider dark:text-[#b0b0b0] text-[#888888]`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-[#D65A31] transition-all shadow-sm resize-none dark:border-[#393E46] dark:text-[#EEEEEE] dark:placeholder:text-[#888888] border-[#e0e0e0] text-[#222831] placeholder:text-[#b0b0b0]`}
                  required
                  placeholder="Type your message..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 shadow text-lg dark:bg-[#EEEEEE] dark:text-[#18181b] dark:hover:bg-teal-400 dark:hover:text-white bg-[#222831] text-white hover:bg-teal-500`}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
