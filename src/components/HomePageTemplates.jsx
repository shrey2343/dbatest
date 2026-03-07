import React from "react";
import FeaturedTemplatesList from "./FeaturedTemplatesList";

const templates = [
  {
    id: 1,
    title: "Dissertation & Thesis",
    excerpt: "Our most popular template, trusted by 50,000+ students.",
    downloadUrl: "/downloads/dissertation.docx",
    previewUrl: "/templates/dissertation",
    visualLabel: "DOCX • Google Doc",
    popularity: 9800,
  },
  {
    id: 2,
    title: "Literature Review",
    excerpt: "A detailed template for the most challenging chapter.",
    downloadUrl: "/downloads/lit-review.docx",
    previewUrl: "/templates/lit-review",
    popularity: 8800,
  },
  {
    id: 3,
    title: "Research Proposal",
    excerpt: "Step-by-step instructions to craft a convincing proposal.",
    downloadUrl: "/downloads/proposal.docx",
    previewUrl: "/templates/proposal",
    popularity: 7400,
  },
  {
    id: 4,
    title: "Additional Template (hidden)",
    excerpt: "This one should not show because we only display top 3.",
    downloadUrl: "/downloads/extra.docx",
    previewUrl: "/templates/extra",
    popularity: 100,
  },
];

export default function HomePageTemplates() {
  return <FeaturedTemplatesList templates={templates} />;
}
