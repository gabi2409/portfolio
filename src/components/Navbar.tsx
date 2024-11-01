import React, { useState } from 'react';
import { Menu, X, Code, Home, User, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Accueil', icon: <Home className="w-5 h-5" />, href: '#home' },
    { name: 'À propos', icon: <User className="w-5 h-5" />, href: '#about' },
    { name: 'Portfolio', icon: <Code className="w-5 h-5" />, href: '#portfolio' },
    { name: 'Expériences', icon: <Briefcase className="w-5 h-5" />, href: '#experience' },
    { name: 'Contact', icon: <Mail className="w-5 h-5" />, href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Code className="w-8 h-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Portfolio</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600 transition-colors duration-200"
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;