import React from "react";
import PropTypes from "prop-types";
import FeaturedTemplate from "./FeaturedTemplate";

/**
 * Renders the top 3 templates.
 * - templates: array of template objects
 * - sortByPopularity: if true, templates are sorted by `popularity` descending
 */
const FeaturedTemplatesList = ({ templates = [], sortByPopularity = true }) => {
  if (!Array.isArray(templates) || templates.length === 0) {
    return null;
  }

  // Defensive copy -> optional sort by popularity -> take first 3
  const list = [...templates];
  if (sortByPopularity) {
    list.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
  }

  const topThree = list.slice(0, 3);

  return (
    <section aria-label="Most popular templates" className="max-w-7xl mx-auto px-4">
      <header className="text-center mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-orange-600">Most Popular Templates</h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {topThree.map((t) => (
          <FeaturedTemplate key={t.id} template={t} />
        ))}
      </div>
    </section>
  );
};

FeaturedTemplatesList.propTypes = {
  templates: PropTypes.arrayOf(PropTypes.object),
  sortByPopularity: PropTypes.bool,
};

export default FeaturedTemplatesList;
