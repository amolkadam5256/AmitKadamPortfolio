import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import { profileData } from "../data/profile";
import { skillCategories } from "../data/skills";
import { 
  GraduationCap, 
  Briefcase, 
  Target, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Compass, 
  Lightbulb, 
  ShieldCheck, 
  Languages 
} from "lucide-react";
import { LinkedInIcon } from "../components/common/Icons";

export default function About() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-16">
      <SEO
        title="About Amit Kadam | Corporate Finance Background & Philosophy"
        description="Learn about Amit Kadam's background in Economics and MBA Finance, corporate finance advisory philosophy, education, and career trajectory."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Profile & Background</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            About Amit Kadam
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Corporate finance analyst with an Economics foundation, currently working at CapSurge advisory. Passionate about deconstructing how capital decisions drive real business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 1. Philosophy & Executive Summary */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                <Compass className="w-6 h-6 text-blue-600 mr-2.5" />
                Professional Summary & Philosophy
              </h2>
              
              <div className="p-5 rounded-xl bg-slate-900 text-white border border-slate-800">
                <p className="text-base font-medium italic text-slate-200 leading-relaxed">
                  "{profileData.philosophy.quote}"
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  I am an MBA in Finance with a background in Economics (B.A. Hons), working at CapSurge, a corporate finance advisory firm. My professional drive comes from understanding how real capital decisions are made—not just on spreadsheets, but in live operating environments.
                </p>
                <p>
                  My work involves supporting corporate finance advisory engagements across fundraising, valuation, dynamic 3-statement financial modelling, and transaction analysis. I gain exposure to situations involving capital structuring, working capital challenges, and M&A transactions, where founders, investors, and PE/VC stakeholders approach decisions with differing objectives and constraints.
                </p>
                <p>
                  I enjoy digging into business models, industry dynamics, and financial statements to understand what actually drives outcomes. Outside of structured client work, I regularly break down companies and deals on my own to reverse-engineer what went right, what went wrong, and what could have been done differently.
                </p>
              </div>

              {/* 4 Guiding Principles */}
              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  Core Analytical Principles
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {profileData.philosophy.principles.map((principle, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <h4 className="text-sm font-bold text-slate-900 flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-1.5 shrink-0" />
                        {principle.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Target Stakeholder Alignment */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                <Target className="w-6 h-6 text-blue-600 mr-2.5" />
                Value Delivered by Stakeholder
              </h2>

              <div className="space-y-4">
                {profileData.targetAudiences.map((aud, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm shrink-0">
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        {aud.role}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        {aud.pitch}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Education Timeline */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                <GraduationCap className="w-6 h-6 text-blue-600 mr-2.5" />
                Academic Foundation
              </h2>

              <div className="space-y-6">
                {profileData.education.map((edu, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full">
                        {edu.period}
                      </span>
                      <span className="text-xs font-bold text-slate-800 bg-white border border-slate-200 px-2 py-0.5 rounded">
                        {edu.score}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mt-1">
                      {edu.degree}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium">
                      {edu.institution}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-200/60">
                      {edu.highlights.map((h, hIdx) => (
                        <span key={hIdx} className="text-[11px] font-medium px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Complete Skills Taxonomy */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                <Award className="w-6 h-6 text-blue-600 mr-2.5" />
                Categorized Skill Taxonomy
              </h2>

              <div className="space-y-6">
                {skillCategories.map((cat) => (
                  <div key={cat.id} className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <h3 className="text-base font-bold text-slate-900">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-500 mb-3">
                      {cat.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {cat.skills.map((s, sIdx) => (
                        <div key={sIdx} className="p-3 rounded-lg bg-white border border-slate-200/80">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-900">{s.name}</span>
                            <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">
                              {s.level}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                            {s.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sticky Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Profile Summary Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-extrabold text-2xl shadow-md">
                  AK
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {profileData.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {profileData.currentRole.title} @ CapSurge
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span className="text-slate-400">Location:</span>
                  <span className="font-semibold text-slate-800">{profileData.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Email:</span>
                  <a href={`mailto:${profileData.email}`} className="font-semibold text-blue-600 hover:underline">
                    {profileData.email}
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Phone:</span>
                  <span className="font-semibold text-slate-800">{profileData.phone}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2">
                <Link
                  to="/resume"
                  className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-blue-700 transition-colors shadow-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Printable Resume</span>
                </Link>

                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-100 transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Languages Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center">
                <Languages className="w-4 h-4 text-slate-500 mr-1.5" />
                Languages Spoken
              </h3>
              <div className="space-y-2 text-xs">
                {profileData.languages.map((lang, idx) => (
                  <div key={idx} className="flex justify-between items-center p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="font-bold text-slate-800">{lang.name}</span>
                    <span className="text-slate-500">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification Status Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-3">
              <div className="flex items-center space-x-2 text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Verification Integrity
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                All case studies, project models, and metrics correspond to documented advisory deliverables and capstone research. Confidential client information has been strictly sanitized.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}