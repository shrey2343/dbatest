import React, { useMemo, useState } from "react";
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import Hero from "./Hero";
import FeaturedTemplate from "./FeaturedTemplate";
import TemplateGrid from "./TemplateGrid";
import TemplatesTable from "./TemplatesTable";
import FAQAccordion from "./FAQAccordion";
import PremiumFooter from './PremiumFooter';
import StandardHeader from './StandardHeader';

import templatesData from "../data/templates.json"; // or fetch from API

const TemplatesPage = ({ onBackToHome }) => {
  const templates = templatesData; // or useEffect(fetch)
  const featured = useMemo(() => templates.find(t => t.isFeatured), [templates]);
  const others = useMemo(() => templates.filter(t => !t.isFeatured), [templates]);

  return (
    <main className="min-h-screen">
      {/* Standard Header */}
      <StandardHeader
        onNavigateHome={() => {
          onBackToHome();
          window.history.pushState({}, '', '/');
        }}
        onNavigateToDoctorateProgram={() => {
          window.history.pushState({}, '', '/doctorate-achiever-program');
          window.location.reload();
        }}
        onNavigateToResearchPublication={() => {
          window.history.pushState({}, '', '/research-paper-publication');
          window.location.reload();
        }}
        onNavigateToBlog={() => {
          window.history.pushState({}, '', '/blog');
          window.location.reload();
        }}
      />
        
      <Hero
      className="mt-16"
        title="Fast-track your writing with tried & tested templates"
        subtitle="Free templates and worksheets to speed up your dissertation, theses & research writing."
        ctaLabel="Browse All Templates"
        onCta={() => document.getElementById("templates-grid")?.scrollIntoView({ behavior: "smooth" })}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {featured && <FeaturedTemplate template={featured} />}

        {/* <div id="templates-grid" className="mt-10">
          <TemplateGrid templates={others} />
        </div> */}

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">All Templates & Worksheets</h3>
          <TemplatesTable templates={templates} />
        </div>

        <div className="mt-12">
          <FAQAccordion items={[
            { q: "Are these templates free?", a: "Yes — free for students. No fees." },
            { q: "Can I edit the templates?", a: "Yes — they are provided in editable formats." }
          ]} />
        </div>
      </section>

      <PremiumFooter />
    </main>
  );
};

export default TemplatesPage;
