import React, { useState } from "react";
import SEO from "../components/common/SEO";
import { profileData } from "../data/profile";
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  FileText, 
  CheckCircle2, 
  MessageSquare,
  ShieldCheck,
  AlertCircle
} from "lucide-react";
import { LinkedInIcon } from "../components/common/Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    mandateReason: "Corporate Finance Discussion",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-16">
      <SEO
        title="Contact Amit Kadam | Corporate Finance & Advisory Discussions"
        description="Get in touch with Amit Kadam for corporate finance roles, valuation mandates, fundraising financial models, and finance automation discussions."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Inquiries</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Let's Discuss Financial Solutions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Reach out for full-time corporate finance / analyst roles, financial modelling advisory, valuation assignments, or finance automation initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Information & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-slate-900">
                Direct Contact Channels
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Email Address
                    </span>
                    <a href={`mailto:${profileData.email}`} className="text-slate-900 font-bold hover:text-blue-700 transition-colors">
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <Phone className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Mobile & WhatsApp
                    </span>
                    <a href={`tel:${profileData.phone}`} className="text-slate-900 font-bold hover:text-blue-700 transition-colors">
                      {profileData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Primary Location
                    </span>
                    <span className="text-slate-900 font-bold">
                      {profileData.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 transition-colors shadow-sm"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Scope of Engagement */}
            <div className="bg-slate-900 text-white rounded-2xl p-8 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center">
                <ShieldCheck className="w-4 h-4 text-emerald-400 mr-2" />
                Available Mandates & Discussions
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-2 shrink-0" />
                  Corporate Finance & Investment Banking Analyst Roles
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-2 shrink-0" />
                  3-Statement Model Build-outs & DCF Valuation
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-2 shrink-0" />
                  Comparable Company Benchmarking Multiples
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-2 shrink-0" />
                  Python & Excel Financial Workflow Automation
                </li>
              </ul>
            </div>

          </div>

          {/* Contact / Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Send an Inquiry
              </h2>
              <p className="text-xs text-slate-500 mb-8">
                Fill out the form below and I will respond within 24 hours.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-900">
                    Message Received
                  </h3>
                  <p className="text-xs text-emerald-800 max-w-md mx-auto">
                    Thank you for reaching out. I have received your message and will review your note promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-xl text-xs font-bold text-emerald-900 bg-white border border-emerald-200 hover:bg-emerald-50"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Organization / Fund
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. CapSurge / Fund Name"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Primary Mandate Reason
                      </label>
                      <select
                        value={formData.mandateReason}
                        onChange={(e) => setFormData({ ...formData, mandateReason: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                      >
                        <option>Recruitment & Full-time Roles</option>
                        <option>Corporate Finance Advisory</option>
                        <option>Financial Modelling & DCF</option>
                        <option>Finance Automation Discussion</option>
                        <option>Speaking / Academic Collaboration</option>
                        <option>Other Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Your Message / Problem Statement *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details about your organization, project scope, or role requirements..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-bold text-white bg-slate-900 hover:bg-blue-700 transition-all shadow-md cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}