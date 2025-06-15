import { motion } from 'framer-motion';
import { useState } from 'react';
import type { FormEvent } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/sauravkoduvalli",
      icon: "📂"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sauravkoduvalli/",
      icon: "💼"
    },
    {
      name: "Email",
      url: "mailto:sauravkoduvalli@gmail.com",
      icon: "📧"
    }
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 py-16 md:p-6 lg:p-8 bg-gradient-to-br from-violet-50 via-sky-50 to-indigo-50 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(88,28,135,0.3),rgba(255,255,255,0))]"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-5xl relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 dark:from-violet-400 dark:via-indigo-400 dark:to-sky-400 text-transparent bg-clip-text"
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-white/10 dark:bg-slate-900/20 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 shadow-2xl shadow-indigo-500/5 dark:shadow-indigo-950/5"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">Location</h4>
                <p className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                  <span>📍</span> Kochi, India
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">Connect with me</h4>
                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                      whileHover={{ x: 10 }}
                    >
                      <span className="text-2xl">{link.icon}</span>
                      <span>{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-violet-100 dark:border-slate-700/50">
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Looking forward to discussing your project or opportunity.
                  Feel free to reach out through any of the channels above.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-3xl bg-white/10 dark:bg-slate-900/20 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 shadow-2xl shadow-indigo-500/5 dark:shadow-indigo-950/5"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 dark:bg-slate-800/40 backdrop-blur-md border border-violet-100 dark:border-slate-700/50 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 dark:bg-slate-800/40 backdrop-blur-md border border-violet-100 dark:border-slate-700/50 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 dark:bg-slate-800/40 backdrop-blur-md border border-violet-100 dark:border-slate-700/50 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 focus:border-transparent transition-all resize-none"
                  required
                />
              </div>              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 md:py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-500 dark:to-indigo-500 text-white font-medium hover:shadow-lg hover:shadow-violet-500/25 dark:hover:shadow-violet-400/25 transition-all duration-300 text-lg md:text-base"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
