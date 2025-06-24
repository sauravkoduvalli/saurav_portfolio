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
    <div className="min-h-screen w-full flex flex-col items-center justify-center py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-[#e0e7ef] via-[#f5f6fa] to-[#cfd9df] dark:from-[#232526] dark:via-[#393E46] dark:to-[#232526] relative overflow-hidden" id='contact'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-5xl relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#D65A31] drop-shadow-sm tracking-tight"
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 md:p-8 rounded-3xl bg-white/80 dark:bg-[#393E46]/80 border border-[#cccccc]/40 dark:border-[#2d2d2d]/40 shadow-lg backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold text-[#222831] dark:text-[#EEEEEE] mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-[#222831] dark:text-[#EEEEEE] mb-2">Location</h4>
                <p className="text-[#4a4a4a] dark:text-[#b0b0b0] flex items-center gap-2">
                  <span className="text-xl">📍</span> Kochi, India
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#222831] dark:text-[#EEEEEE] mb-4">Connect with me</h4>
                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-[#4a4a4a] dark:text-[#b0b0b0] hover:text-[#D65A31] dark:hover:text-[#D65A31] transition-colors group"
                      whileHover={{ x: 10 }}
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform">{link.icon}</span>
                      <span>{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#cccccc]/40 dark:border-[#2d2d2d]/40">
                <p className="text-[#4a4a4a] dark:text-[#b0b0b0] text-sm leading-relaxed">
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
            className="p-6 md:p-8 rounded-3xl bg-white/80 dark:bg-[#393E46]/80 border border-[#cccccc]/40 dark:border-[#2d2d2d]/40 shadow-lg backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold text-[#222831] dark:text-[#EEEEEE] mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#4a4a4a] dark:text-[#b0b0b0] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#EEEEEE]/60 dark:bg-[#393E46]/60 border border-[#cccccc]/40 dark:border-[#2d2d2d]/40 text-[#222831] dark:text-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#D65A31] focus:border-transparent transition-all backdrop-blur-sm shadow-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#4a4a4a] dark:text-[#b0b0b0] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#EEEEEE]/60 dark:bg-[#393E46]/60 border border-[#cccccc]/40 dark:border-[#2d2d2d]/40 text-[#222831] dark:text-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#D65A31] focus:border-transparent transition-all backdrop-blur-sm shadow-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#4a4a4a] dark:text-[#b0b0b0] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#EEEEEE]/60 dark:bg-[#393E46]/60 border border-[#cccccc]/40 dark:border-[#2d2d2d]/40 text-[#222831] dark:text-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#D65A31] focus:border-transparent transition-all backdrop-blur-sm shadow-sm resize-none"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 4px 24px 0 rgba(214,90,49,0.18)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 md:py-3 rounded-xl bg-gradient-to-tr from-[#D65A31] to-[#fbbf24] text-white font-semibold transition-all duration-300 text-lg md:text-base shadow-md hover:from-[#b94a25] hover:to-[#fbbf24] dark:hover:from-[#b94a25] dark:hover:to-[#fbbf24]"
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
