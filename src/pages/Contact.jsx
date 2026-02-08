// src/pages/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !/^\+?\d{7,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call (fake delay 1.2–2 seconds)
    await new Promise(resolve => setTimeout(resolve, 1200 + Math.random() * 800));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-50"
    >

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-950 via-green-900 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.12)_0%,transparent_60%)]" />

        <div className="relative px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-28 md:py-36 lg:py-44 text-center">
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 md:mb-8"
          >
            Get in <span className="text-emerald-300">Touch</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl md:text-3xl max-w-5xl mx-auto font-light text-emerald-100 leading-relaxed"
          >
            We’d love to hear from you and help plan your wellness journey
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-10 lg:gap-16">

          {/* Contact Info */}
          <motion.div variants={fadeInUp} className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 lg:p-12 border border-gray-100 h-full">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                Reach Out
              </h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 md:w-7 md:h-7 text-emerald-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">Our Location</h3>
                    <p className="text-gray-600 mt-1 leading-relaxed">
                      Bebru iela 22 - 40<br />
                      Jēkabpils, LV-5201<br />
                      Latvia
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="w-6 h-6 md:w-7 md:h-7 text-emerald-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">Email Us</h3>
                    <a
                      href="mailto:info@serenity.lv"
                      className="text-emerald-600 hover:text-emerald-700 transition-colors mt-1 block text-lg"
                    >
                      info@serenity.lv
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 md:w-7 md:h-7 text-emerald-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">Call Us</h3>
                    <div className="mt-1 space-y-1 text-gray-600">
                      <a href="tel:+37125569575" className="hover:text-emerald-600 transition-colors block">
                        +371 255 695 75
                      </a>
                      <a href="tel:+37126563812" className="hover:text-emerald-600 transition-colors block">
                        +371 265 638 12
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div variants={fadeInUp} className="md:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 lg:p-12 border border-gray-100">

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 md:py-20"
                >
                  <div className="text-6xl md:text-7xl mb-6">🙏</div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-700 mb-4">
                    Thank You!
                  </h3>
                  <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-md mx-auto">
                    Your message has been received.<br />
                    We’ll get back to you within 24–48 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-emerald-700 hover:bg-emerald-600 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all text-lg md:text-xl"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-7">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2 text-lg">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 transition-all text-base md:text-lg ${
                        errors.name 
                          ? 'border-red-500 focus:ring-red-300' 
                          : 'border-gray-300 focus:ring-emerald-300'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-600 text-sm mt-2">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2 text-lg">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className={`w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 transition-all text-base md:text-lg ${
                        errors.email 
                          ? 'border-red-500 focus:ring-red-300' 
                          : 'border-gray-300 focus:ring-emerald-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-2">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2 text-lg">
                      Phone Number (optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+371 255 695 75"
                      className={`w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 transition-all text-base md:text-lg ${
                        errors.phone 
                          ? 'border-red-500 focus:ring-red-300' 
                          : 'border-gray-300 focus:ring-emerald-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm mt-2">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2 text-lg">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your wellness goals, preferred dates, or any questions..."
                      className={`w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 transition-all resize-y min-h-[140px] text-base md:text-lg ${
                        errors.message 
                          ? 'border-red-500 focus:ring-red-300' 
                          : 'border-gray-300 focus:ring-emerald-300'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-600 text-sm mt-2">{errors.message}</p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full py-5 px-8 rounded-xl font-bold text-lg md:text-xl shadow-lg transition-all flex items-center justify-center gap-3 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-emerald-700 hover:bg-emerald-600 text-white'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-6 w-6 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </section>

    </motion.div>
  );
}

export default Contact;