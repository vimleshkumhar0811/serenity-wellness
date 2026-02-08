// src/pages/Home.jsx
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
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7 }
  }
};

function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-50"
    >

      {/* Hero Section - Full width */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12)_0%,transparent_60%)]" />
        </div>

        <div className="relative px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-24 md:py-32 lg:py-40 text-center">
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 md:mb-8"
          >
            Serenity <span className="text-emerald-300">Wellness</span> & Hospitality
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-5xl mx-auto mb-10 md:mb-12 font-light text-emerald-100 leading-relaxed"
          >
            Discover peace, luxury, and renewal in the heart of Latvia
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg md:text-xl px-10 py-5 rounded-full shadow-2xl hover:shadow-3xl transform transition-all hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-emerald-300/50"
            >
              Book Your Stay →
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center border-2 border-white/70 hover:bg-white/10 text-white font-semibold text-lg md:text-xl px-10 py-5 rounded-full transition-all duration-300"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Welcome / Vision Section */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-16 md:py-24 lg:py-32">
        <motion.div variants={fadeInUp} className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-5">
            Tranquility Meets Luxury
          </h2>
          <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Serenity Wellness and Hospitality offers a peaceful escape where wellness, comfort, and personalized care come together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {[
            {
              title: "Premium Wellness",
              desc: "Revitalizing spa treatments, yoga, meditation, and holistic therapies designed to restore balance.",
              icon: "🧘‍♀️"
            },
            {
              title: "Luxury Accommodation",
              desc: "Elegant rooms and suites with modern amenities in a calm, natural setting.",
              icon: "🏡"
            },
            {
              title: "Personalized Hospitality",
              desc: "Attentive service tailored to your needs — from dietary preferences to activity planning.",
              icon: "🤝"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={scaleIn}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-emerald-200 transition-all duration-300 group"
            >
              <div className="text-6xl md:text-7xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                {item.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 group-hover:text-emerald-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-gradient-to-r from-emerald-900 to-green-900 text-white py-20 md:py-28 lg:py-36">
        <div className="px-5 sm:px-8 md:px-12 lg:px-16 text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8"
          >
            Ready to Rejuvenate?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl md:text-2xl mb-10 md:mb-12 max-w-4xl mx-auto text-emerald-100"
          >
            Experience the perfect blend of wellness and hospitality in Latvia.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-white text-emerald-900 font-bold text-lg md:text-xl px-12 py-5 rounded-full shadow-2xl hover:shadow-3xl hover:bg-gray-100 transition-all transform hover:scale-[1.03]"
            >
              Reserve Now
            </Link>
            <Link
              to="/about"
              className="border-2 border-white/80 text-white font-semibold text-lg md:text-xl px-12 py-5 rounded-full hover:bg-white/10 transition-all"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
}

export default Home;