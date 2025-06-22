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
    <div className="md:min-h-screen w-full flex items-center justify-center p-4 py-16 md:p-6 lg:p-8 bg-[#EEEEEE] dark:bg-[#222831]" id='contact'>
      <div className="absolute inset-0" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-5xl relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#D65A31]"
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-[#ffffff] dark:bg-[#393E46] border border-[#cccccc] dark:border-[#2d2d2d] shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-[#222831] dark:text-[#EEEEEE] mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-[#222831] dark:text-[#EEEEEE] mb-2">Location</h4>
                <p className="text-[#4a4a4a] dark:text-[#b0b0b0] flex items-center gap-2">
                  <span>📍</span> Kochi, India
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
                      className="flex items-center gap-3 text-[#4a4a4a] dark:text-[#b0b0b0] hover:text-[#D65A31] dark:hover:text-[#D65A31] transition-colors"
                      whileHover={{ x: 10 }}
                    >
                      <span className="text-2xl">{link.icon}</span>
                      <span>{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#cccccc] dark:border-[#2d2d2d]">
                <p className="text-[#4a4a4a] dark:text-[#b0b0b0] text-sm">
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
            className="p-8 rounded-3xl bg-[#ffffff] dark:bg-[#393E46] border border-[#cccccc] dark:border-[#2d2d2d] shadow-2xl"
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
                  className="w-full px-4 py-2.5 rounded-xl bg-[#EEEEEE] dark:bg-[#393E46] border border-[#cccccc] dark:border-[#2d2d2d] text-[#222831] dark:text-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#D65A31] focus:border-transparent transition-all"
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
                  className="w-full px-4 py-2.5 rounded-xl bg-[#EEEEEE] dark:bg-[#393E46] border border-[#cccccc] dark:border-[#2d2d2d] text-[#222831] dark:text-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#D65A31] focus:border-transparent transition-all"
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
                  className="w-full px-4 py-2.5 rounded-xl bg-[#EEEEEE] dark:bg-[#393E46] border border-[#cccccc] dark:border-[#2d2d2d] text-[#222831] dark:text-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#D65A31] focus:border-transparent transition-all resize-none"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 md:py-3 rounded-xl bg-[#D65A31] text-[#EEEEEE] font-medium hover:bg-[#b94a25] dark:hover:bg-[#b94a25] transition-all duration-300 text-lg md:text-base"
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
