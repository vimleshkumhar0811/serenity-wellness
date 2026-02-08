// src/components/Footer.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const footerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
      className="bg-gradient-to-b from-green-950 to-green-900 text-gray-200"
    >
      <div className="container mx-auto px-6 py-12 lg:py-16">
        {/* Main Footer Grid - now 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {/* Column 1 - Brand & Description */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Serenity <span className="text-emerald-400">Wellness</span> & Hospitality
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Premium wellness retreats and hospitality services in the heart of Latvia.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Serenity Wellness and Hospitality, SIA<br />
              Reg. Nr. 40203716341<br />
              Bebru iela 22 - 40, Jēkabpils, LV-5201, Latvia
            </p>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', to: '/' },
                { name: 'About Us', to: '/about' },
                { name: 'Services', to: '/services' },
                { name: 'Contact', to: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-emerald-300 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-5">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-emerald-400" />
                <a
                  href="mailto:info@serenity.lv"
                  className="hover:text-emerald-300 transition-colors text-base"
                >
                  info@serenity.lv
                </a>
              </div>

              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-emerald-400 mt-1" />
                <div className="space-y-1">
                  <a
                    href="tel:+37125569575"
                    className="hover:text-emerald-300 transition-colors block"
                  >
                    +371 255 695 75
                  </a>
                  <a
                    href="tel:+37126563812"
                    className="hover:text-emerald-300 transition-colors block"
                  >
                    +371 265 638 12
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar - simplified */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-green-800/50 text-center text-gray-400 text-sm"
        >
          <p>© 2026 Serenity Wellness and Hospitality, SIA. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;