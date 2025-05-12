import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/projects", text: "Projects" },
    { to: "/work", text: "Work" },
    { to: "/contact", text: "Contact" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2
      }
    },
    open: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: index * 0.1,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-rosepine-surface/80 backdrop-blur-sm border-b border-rosepine-overlay">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-bold text-lg sm:text-xl text-rosepine-text">
            Why Is <span className="text-rosepine-pine">Faizan</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex gap-2 text-sm sm:text-base font-semibold text-rosepine-text/90">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-3 py-2 hover:text-rosepine-pine transition-colors rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.text}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={toggleMobileMenu}
              className="ml-3 p-2 rounded-md text-rosepine-text/90 hover:text-rosepine-pine hover:bg-rosepine-highlight-med focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rosepine-pine"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-rosepine-surface shadow-lg border-t border-rosepine-overlay">
          <nav className="flex flex-col px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block px-3 py-2 rounded-md text-base font-medium text-rosepine-text/90 hover:text-rosepine-pine hover:bg-rosepine-highlight-low transition-colors"
                onClick={toggleMobileMenu}
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}

export default Header;
