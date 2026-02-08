import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '/src/assets/logo.jpeg'; // Adjust if needed

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-green-800 to-green-700 text-white shadow-lg sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <img src={logo} alt="Serenity Logo" className="h-15 rounded-lg" />
          <span className="text-2xl font-bold">Serenity Wellness</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/" className="hover:text-secondary">Home</NavLink>
          <NavLink to="/about" className="hover:text-secondary">About</NavLink>
          <NavLink to="/services" className="hover:text-secondary">Services</NavLink>
          <NavLink to="/contact" className="hover:text-secondary">Contact</NavLink>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {/* Hamburger icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="md:hidden bg-green-800 p-4">
          <nav className="flex flex-col space-y-4">
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/about" onClick={closeMenu}>About</Link>
            <Link to="/services" onClick={closeMenu}>Services</Link>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}

export default Header;