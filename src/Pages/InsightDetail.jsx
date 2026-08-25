import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "../components/common/SEO";
import { insightsData } from "../data/insights";
import { profileData } from "../data/profile";
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  BookOpen, 
  ArrowRight, 
  Share2, 
  Sparkles,
  TrendingUp,
  FileText
} from "lucide-react";
import { LinkedInIcon } from "../components/common/Icons";

export default function InsightDetail() {
  const { slug } = useParams();
  const article = insightsData.find((a) => a.slug === slug || a.id === slug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  // Related articles
  const relatedArticles = insightsData.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-16">
      <SEO
        title={`${article.title} | Financial Insights`}
        description={article.summary}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Back Navigation */}
        <div className="flex items-center justify-between">
          <Link
            to="/insights"
            className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            <span>Back to All Insights</span>
          </Link>

          <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
            {article.category}
          </span>
        </div>

        {/* Article Header Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center">
              <Calendar className="w-3.5 h-3.5 mr-1" />
              {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1" />
              {article.readTime}
            </span>
            <span>•</span>
            <span className="text-blue-700 font-semibold">
              By {profileData.name}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {article.title}
          </h1>

          {/* Executive Summary Box */}
          <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 text-slate-700 text-sm sm:text-base leading-relaxed">
            <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block mb-1">
              Executive Summary
            </span>
            {article.summary}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {article.tags.map((t, idx) => (
              <span
                key={idx}
                className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Article Body Content */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-6">
            
            {/* Split markdown paragraphs cleanly */}
            {article.content.split("\n\n").map((block, idx) => {
              if (block.startsWith("### ")) {
                return (
                  <h3 key={idx} className="text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
                    {block.replace("### ", "")}
                  </h3>
                );
              }
              if (block.startsWith("#### ")) {
                return (
                  <h4 key={idx} className="text-base font-bold text-slate-800 pt-2">
                    {block.replace("#### ", "")}
                  </h4>
                );
              }
              if (block.startsWith("```")) {
                const code = block.replace(/```/g, "").trim();
                return (
                  <pre key={idx} className="p-4 rounded-xl bg-slate-900 text-emerald-400 font-mono text-xs overflow-x-auto">
                    {code}
                  </pre>
                );
              }
              if (block.startsWith("> ")) {
                return (
                  <blockquote key={idx} className="p-4 rounded-xl bg-slate-50 border-l-4 border-blue-600 text-slate-800 italic font-medium my-4">
                    {block.replace("> ", "")}
                  </blockquote>
                );
              }
              return (
                <p key={idx} className="text-slate-600 leading-relaxed">
                  {block}
                </p>
              );
            })}

          </div>

          {/* Author Box */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg">
                AK
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  {profileData.name}
                </h4>
                <p className="text-xs text-slate-500">
                  {profileData.currentRole.title} @ CapSurge Advisory
                </p>
              </div>
            </div>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 transition-colors shadow-xs"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
              <span>Discuss on LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Related Articles Strip */}
        <div className="space-y-4">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Explore Related Analysis
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                to={`/insights/${rel.slug}`}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  {rel.category}
                </span>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors mt-2">
                  {rel.title}
                </h4>
                <div className="mt-3 flex items-center text-xs font-semibold text-blue-700">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
