import React from "react";
import { Link } from "react-router-dom";
import { 
  Send, 
  FileText, 
  Mail, 
  ArrowRight, 
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { LinkedInIcon } from "../common/Icons";
import { profileData } from "../../data/profile";

export default function ContactCTA() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-[2.5rem] bg-gradient-to-br from-[#0c0e12] via-[#11141a] to-[#1a1f29] border border-white/10 p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
        
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-rose-500">
              <span>●</span>
              <span>INITIATE ENGAGEMENT</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let's build financial clarity together.
            </h2>
            
            <p className="text-xs sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Available for full-time corporate finance / analyst roles, 3-statement financial modelling build-outs, DCF & comparable valuations, and automated finance operations.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-300 font-medium">
              <span className="flex items-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 mr-1.5 shrink-0" />
                Corporate Advisory Roles
              </span>
              <span className="flex items-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 mr-1.5 shrink-0" />
                Valuation & DCF Mandates
              </span>
              <span className="flex items-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 mr-1.5 shrink-0" />
                Python Finance Automation
              </span>
            </div>
          </div>

          {/* Right Action Stack */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-full font-bold text-xs sm:text-sm text-white bg-rose-600 hover:bg-rose-500 transition-all shadow-xl shadow-rose-600/30 hover:scale-102"
            >
              <Send className="w-4 h-4" />
              <span>Contact Amit Kadam</span>
            </Link>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <LinkedInIcon className="w-4 h-4 text-rose-400" />
              <span>Connect on LinkedIn</span>
            </a>

            <Link
              to="/resume"
              className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full font-semibold text-xs text-slate-400 hover:text-white transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View & Print Resume</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
