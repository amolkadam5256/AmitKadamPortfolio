import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Briefcase, 
  FileText, 
  Calculator, 
  BookOpen, 
  User, 
  Send, 
  Menu, 
  X, 
  TrendingUp,
  Download,
  ExternalLink,
  ArrowUpRight
} from "lucide-react";
import { profileData } from "../../data/profile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Finance Toolkit", path: "/toolkit" },
    { name: "Insights", path: "/insights" },
    { name: "Resume", path: "/resume" },
  ];

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all duration-300">
      <div 
        className={`rounded-full transition-all duration-300 px-4 sm:px-6 py-3 flex items-center justify-between ${
          scrolled 
            ? "bg-[#0f1115]/90 backdrop-blur-xl border border-white/10 shadow-2xl text-white" 
            : "bg-[#0f1115] border border-white/10 shadow-xl text-white"
        }`}
      >
        {/* Brand / Logo */}
        <Link to="/" className="flex items-center space-x-2.5 group">
          <div className="w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center font-extrabold text-xs tracking-tighter group-hover:scale-105 transition-transform shadow-md shadow-rose-600/30">
            AK
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white tracking-tight leading-none group-hover:text-rose-400 transition-colors">
              Amit Kadam
            </span>
            <span className="text-[10px] text-slate-400 font-medium tracking-wide mt-0.5">
              Corporate Finance
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== "/" && location.pathname.startsWith(link.path));
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-1 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? "text-white bg-white/15 shadow-xs"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Quick CTA Actions */}
        <div className="hidden lg:flex items-center space-x-2.5">
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center space-x-1"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 text-slate-400" />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 transition-all shadow-md shadow-rose-600/30 hover:scale-105"
          >
            <span>Contact Amit</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center lg:hidden space-x-2">
          <Link
            to="/contact"
            className="px-3 py-1 rounded-full text-xs font-bold text-white bg-rose-600"
          >
            Contact
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden mt-2 bg-[#0f1115]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 space-y-2 shadow-2xl text-white">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== "/" && location.pathname.startsWith(link.path));
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                  isActive
                    ? "text-white bg-white/15 font-bold"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                <span>{link.name}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />}
              </Link>
            );
          })}
          
          <div className="pt-3 border-t border-white/10 flex flex-col space-y-2">
            <Link
              to="/resume"
              className="flex items-center justify-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Printable Resume</span>
            </Link>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-rose-400 bg-rose-500/10 hover:bg-rose-500/20"
            >
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
