import React, { useEffect } from "react";
import { profileData } from "../../data/profile";

export default function SEO({
  title,
  description,
  canonical,
  type = "website",
  schemaData = null
}) {
  const fullTitle = title 
    ? `${title} | Amit Kadam — Corporate Finance & Valuation`
    : "Amit Kadam | Corporate Finance, Financial Modelling, Valuation & M&A";

  const metaDesc = description || profileData.summary;

  useEffect(() => {
    document.title = fullTitle;

    // Update meta description
    let metaDescEl = document.querySelector('meta[name="description"]');
    if (!metaDescEl) {
      metaDescEl = document.createElement("meta");
      metaDescEl.setAttribute("name", "description");
      document.head.appendChild(metaDescEl);
    }
    metaDescEl.setAttribute("content", metaDesc);

    // Update canonical
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", canonical || profileData.portfolioUrl);

    // Inject JSON-LD Schema
    const basePersonSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": profileData.name,
      "jobTitle": profileData.title,
      "description": profileData.summary,
      "url": profileData.portfolioUrl,
      "sameAs": [
        profileData.linkedin,
        profileData.github
      ],
      "worksFor": {
        "@type": "Organization",
        "name": profileData.currentRole.company,
        "description": profileData.currentRole.companyType
      },
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "Sinhgad Institute of Management / Savitribai Phule Pune University"
        },
        {
          "@type": "EducationalOrganization",
          "name": "Bharati Vidyapeeth University"
        }
      ],
      "knowsAbout": [
        "Corporate Finance",
        "Financial Modelling",
        "Discounted Cash Flow (DCF)",
        "Comparable Company Analysis (CCA)",
        "Business Valuation",
        "Fundraising & Capital Structuring",
        "Mergers & Acquisitions (M&A)",
        "Working Capital Management",
        "DuPont Analysis",
        "Python for Finance Automation"
      ]
    };

    const finalSchema = schemaData || basePersonSchema;

    let scriptTag = document.getElementById("json-ld-schema");
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = "json-ld-schema";
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(finalSchema);
  }, [fullTitle, metaDesc, canonical, schemaData]);

  return null;
}
