import React from "react";
import TemplateCard from "./TemplateCard";

const TemplateGrid = ({ templates }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {templates.map(t => (
        <TemplateCard key={t.id} t={t} />
      ))}
    </div>
  );
};

export default TemplateGrid;
