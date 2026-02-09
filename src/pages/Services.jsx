// src/pages/Services.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 70 },
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
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7 }
  },
  hover: {
    y: -12,
    scale: 1.03,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    transition: { duration: 0.35 }
  }
};

const services = [
  {
    title: "Spa & Wellness Therapies",
    description: "Revitalizing massages, aromatherapy, facials, body treatments, and holistic therapies designed to restore balance and inner peace.",
    icon: "🧖‍♀️",
    highlight: "Signature Serenity Massage"
  },
  {
    title: "Yoga & Meditation Retreats",
    description: "Guided sessions in tranquil settings — daily yoga, breathwork, mindfulness meditation, and silent reflection walks in nature.",
    icon: "🧘",
    highlight: "Morning & Sunset Sessions"
  },
  // {
  //   title: "Luxury Accommodation",
  //   description: "Elegant rooms and suites with premium bedding, natural light, private balconies, and wellness-inspired interiors for deep relaxation.",
  //   icon: "🛏️",
  //   highlight: "Nature-View Suites"
  // },
  {
    title: "Personalized Wellness Programs",
    description: "Tailored health journeys including nutrition planning, detox programs, sleep enhancement, and stress management consultations.",
    icon: "🌿",
    highlight: "Custom 3–7 Day Retreats"
  },
  {
    title: "Healthy Gourmet Dining",
    description: "Nutrient-rich, farm-to-table cuisine prepared by expert chefs — plant-forward menus, detox juices, and mindful eating experiences.",
    icon: "🍽️",
    highlight: "Seasonal Wellness Menus"
  },
  {
    title: "Thermal & Hydrotherapy",
    description: "Sauna, steam room, hot & cold plunges, hydrotherapy pools, and contrast therapy circuits for detoxification and circulation.",
    icon: "♨️",
    highlight: "Thermal Circuit Experience"
  },
  {
    title: "Event & Private Retreats",
    description: "Exclusive corporate wellness days, family retreats, couple getaways, or private group bookings with customized programming.",
    icon: "🎉",
    highlight: "Bespoke Group Packages"
  },
  {
    title: "Holistic Consultations",
    description: "One-on-one sessions with wellness coaches, nutritionists, Ayurvedic practitioners, and therapists for long-term well-being.",
    icon: "🩺",
    highlight: "Personalized Health Mapping"
  }
];

function Services() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-50"
    >

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-950 via-green-900 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_25%_35%,rgba(255,255,255,0.12)_0%,transparent_60%)]" />

        <div className="relative px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-28 md:py-36 lg:py-44 text-center">
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 md:mb-8"
          >
            Our <span className="text-emerald-300">Wellness</span> Services
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl md:text-3xl max-w-5xl mx-auto font-light text-emerald-100 leading-relaxed"
          >
            Holistic experiences crafted for body, mind, and soul
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-16 md:py-24 lg:py-32">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group"
            >
              {/* Colored accent bar */}
              <div className="h-2 bg-gradient-to-r from-emerald-500 to-green-600" />

              <div className="p-7 md:p-8 lg:p-9">
                <div className="text-6xl md:text-7xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-4">
                  {service.description}
                </p>

                {service.highlight && (
                  <p className="text-sm font-medium text-emerald-600 bg-emerald-50 inline-block px-4 py-1 rounded-full mt-2">
                    {service.highlight}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeInUp}
          className="mt-16 md:mt-24 text-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-lg md:text-xl px-12 py-5 rounded-full shadow-xl hover:shadow-2xl transform transition-all hover:scale-[1.03]"
          >
            Book Your Wellness Journey →
          </Link>
        </motion.div>
      </section>

    </motion.div>
  );
}

export default Services;