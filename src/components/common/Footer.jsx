import React from "react";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  Shield, 
  CheckCircle2, 
  FileText,
  TrendingUp,
  Calculator
} from "lucide-react";
import { LinkedInIcon } from "./Icons";
import { profileData } from "../../data/profile";

export default function Footer() {
  return (
    <footer className="bg-[#0c0e12] text-slate-400 pt-16 pb-12 border-t border-white/10 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Summary */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center font-extrabold text-xs shadow-md">
                AK
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Amit Kadam
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Corporate finance professional specializing in 3-statement modelling, DCF & comparable valuation, fundraising advisory, and Python-powered finance automation.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <a href={`mailto:${profileData.email}`} className="hover:text-white transition-colors">
                  {profileData.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <a href={`tel:${profileData.phone}`} className="hover:text-white transition-colors">
                  {profileData.phone}
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center space-x-2.5">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-rose-600 hover:text-white text-slate-300 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="p-2 rounded-full bg-white/5 hover:bg-rose-600 hover:text-white text-slate-300 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
              <Link
                to="/resume"
                className="p-2 rounded-full bg-white/5 hover:bg-rose-600 hover:text-white text-slate-300 transition-colors"
                aria-label="Resume"
              >
                <FileText className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Amit</Link></li>
              <li><Link to="/experience" className="hover:text-white transition-colors">Experience & Mandates</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/toolkit" className="hover:text-white transition-colors">Finance Toolkit</Link></li>
              <li><Link to="/insights" className="hover:text-white transition-colors">Insights & Research</Link></li>
              <li><Link to="/resume" className="hover:text-white transition-colors">Curriculum Vitae</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Case Studies */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Featured Case Studies
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/case-studies/reconciliation-automation" className="hover:text-white transition-colors">
                  Reconciliation Automation
                </Link>
              </li>
              <li>
                <Link to="/case-studies/three-statement-dcf" className="hover:text-white transition-colors">
                  3-Statement & DCF Model
                </Link>
              </li>
              <li>
                <Link to="/case-studies/comparable-company-analysis" className="hover:text-white transition-colors">
                  Logistics Peer Benchmarking
                </Link>
              </li>
              <li>
                <Link to="/case-studies/ai-fundraising-model" className="hover:text-white transition-colors">
                  AI/LLM SaaS Model
                </Link>
              </li>
              <li>
                <Link to="/case-studies/healthcare-finance-automation" className="hover:text-white transition-colors">
                  Healthcare Claims Automation
                </Link>
              </li>
              <li>
                <Link to="/case-studies/marico-equity-research" className="hover:text-white transition-colors">
                  Marico Equity Research
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Interactive Tools */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Finance Calculators
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link to="/toolkit" className="hover:text-white transition-colors">DCF Valuation Engine</Link></li>
              <li><Link to="/toolkit" className="hover:text-white transition-colors">Cash Conversion Cycle (CCC)</Link></li>
              <li><Link to="/toolkit" className="hover:text-white transition-colors">DuPont 3-Stage ROE</Link></li>
              <li><Link to="/toolkit" className="hover:text-white transition-colors">EV/EBITDA & P/E Multiples</Link></li>
            </ul>

            <div className="mt-6 pt-4 border-t border-white/10">
              <Link
                to="/toolkit"
                className="inline-flex items-center text-xs font-semibold text-rose-400 hover:text-rose-300"
              >
                <Calculator className="w-3.5 h-3.5 mr-1" />
                <span>Launch Interactive Models →</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Amit Kadam. All rights reserved.</p>
          <p className="text-center sm:text-right max-w-lg">
            Professional portfolio demonstrating corporate finance advisory, valuation models, and automation projects. Client data sanitized for confidentiality.
          </p>
        </div>

      </div>
    </footer>
  );
}
