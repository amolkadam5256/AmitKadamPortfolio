import React from "react";
import SEO from "../components/common/SEO";
import Hero from "../components/home/Hero";
import EditorialShowcase from "../components/home/EditorialShowcase";
import StatsStrip from "../components/home/StatsStrip";
import CoreMandatesShowcase from "../components/home/CoreMandatesShowcase";
import FeaturedProjectsGrid from "../components/home/FeaturedProjectsGrid";
import MandateTiers from "../components/home/MandateTiers";
import FaqSection from "../components/home/FaqSection";
import TestimonialsDark from "../components/home/TestimonialsDark";
import EditorialInsights from "../components/home/EditorialInsights";
import ContactCTA from "../components/home/ContactCTA";

export default function Home() {
  return (
    <div className="bg-[#fdfdfd] min-h-screen text-slate-900 selection:bg-rose-600 selection:text-white">
      <SEO 
        title="Amit Kadam | Corporate Finance, Valuation & Financial Modelling"
        description="Corporate finance analyst specializing in 3-statement modelling, DCF/CCA valuation, fundraising, working capital diagnostics, and Python finance automation."
      />
      
      {/* 1. Dark Immersive Hero with Marquee Ticker */}
      <Hero />

      {/* 2. Editorial About Showcase (3-Pillar Visual Cards) */}
      <EditorialShowcase />

      {/* 3. Minimalist Stat Strip (14,000+ / ~60% / 12-18% / 8+) */}
      <StatsStrip />

      {/* 4. Black Inverted Core Mandates Interactive Accordion */}
      <CoreMandatesShowcase />

      {/* 5. Asymmetrical Editorial Case Studies Grid */}
      <FeaturedProjectsGrid />

      {/* 6. Scope & Advisory Mandate Tiers */}
      <MandateTiers />

      {/* 7. FAQ Accordion Cards */}
      <FaqSection />

      {/* 8. Dark Testimonials & Stakeholder Feedback */}
      <TestimonialsDark />

      {/* 9. Stories, Strategies & Financial Thinking Magazine */}
      <EditorialInsights />

      {/* 10. Bottom Action CTA */}
      <ContactCTA />
    </div>
  );
}