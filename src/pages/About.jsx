// src/pages/About.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.25
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
};

function About() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-50"
    >

      {/* Hero / Title Section */}
      <section className="relative bg-gradient-to-br from-green-950 via-green-900 to-emerald-900 text-white overflow-hidden">
        {/* Subtle overlay pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_30%,rgba(255,255,255,0.12)_0%,transparent_60%)]" />
        </div>

        <div className="relative px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-28 md:py-36 lg:py-44 text-center">
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 md:mb-8"
          >
            About <span className="text-emerald-300">Serenity</span> Wellness
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl md:text-3xl max-w-5xl mx-auto font-light text-emerald-100 leading-relaxed"
          >
            Where peace meets luxury in the heart of Latvia
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto space-y-16 lg:space-y-24">

          {/* Introduction */}
          <motion.div variants={fadeInUp} className="prose prose-lg md:prose-xl lg:prose-2xl max-w-none text-gray-800">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              Serenity Wellness and Hospitality, SIA is a premium wellness and hospitality provider based in Jēkabpils, Latvia. 
              Founded with a vision to create peaceful, rejuvenating experiences, we combine modern luxury with nature-inspired tranquility.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-gray-700 mt-6">
              Registered on January 29, 2026 with the unified registration number <strong>40203716341</strong>, 
              we are committed to delivering high-quality services in wellness retreats, spa treatments, and personalized hospitality.
            </p>
          </motion.div>

          {/* Company Facts Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { label: "Legal Name", value: "Serenity Wellness and Hospitality, SIA" },
              { label: "Registration No.", value: "40203716341" },
              { label: "Registered", value: "29 January 2026" },
              // { label: "Share Capital", value: "20.00 EUR (fully paid)" },
              { label: "Legal Address", value: "Bebru iela 22 - 40, Jēkabpils, LV-5201, Latvia" },
              // { label: "VAT Status", value: "Not registered in VAT payers register" },
            ].map((fact, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:border-emerald-200 transition-all duration-300"
              >
                <h3 className="text-sm md:text-base font-medium text-gray-500 uppercase tracking-wide mb-2">
                  {fact.label}
                </h3>
                <p className="text-lg md:text-xl font-semibold text-gray-800">
                  {fact.value}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mission & Values */}
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              Our Core Values
            </h2>
            <div className="w-24 h-1.5 bg-emerald-600 mx-auto rounded-full mb-12"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
            {[
              {
                title: "Tranquility",
                description: "Creating peaceful environments where guests can truly disconnect and recharge.",
                icon: "🌿"
              },
              {
                title: "Luxury with Purpose",
                description: "Combining high-end comfort with meaningful wellness experiences.",
                icon: "✨"
              },
              {
                title: "Personalized Care",
                description: "Tailored services that respect individual needs, preferences, and well-being goals.",
                icon: "🤍"
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-emerald-200 transition-all duration-300 group text-center"
              >
                <div className="text-6xl md:text-7xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  {value.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 group-hover:text-emerald-700 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 md:mt-24 text-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-lg md:text-xl px-12 py-5 rounded-full shadow-xl hover:shadow-2xl transform transition-all hover:scale-[1.03]"
            >
              Get in Touch with Serenity →
            </Link>
          </motion.div>

        </div>
      </section>

    </motion.div>
  );
}

export default About;