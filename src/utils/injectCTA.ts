export const injectCTA = (htmlContent: string): string => {
  const ctaHTML = `
    <div class="not-prose my-12 bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-500 rounded-2xl p-8 shadow-lg">
      <div class="flex flex-col md:flex-row items-center gap-6">
        <div class="flex-shrink-0 w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
          <svg width="32" height="32" fill="none" stroke="white" stroke-width="2" viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
        </div>
        <div class="flex-1 text-center md:text-left">
          <h3 class="text-2xl font-bold text-slate-900 mb-2">Need DBA Templates?</h3>
          <p class="text-slate-600 text-lg">Save 20+ hours with our professionally designed templates. Trusted by thousands of doctoral students.</p>
        </div>
        <button onclick="window.dispatchEvent(new CustomEvent('navigateToTemplates'));" class="flex-shrink-0 bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-xl flex items-center gap-2">
          GET FREE TEMPLATES
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  `;

  // Find all H2 tags
  const h2Regex = /<h2[^>]*>.*?<\/h2>/gi;
  const h2Matches = htmlContent.match(h2Regex);

  // If there are at least 2 H2 tags, inject CTA after the 2nd one
  if (h2Matches && h2Matches.length >= 2) {
    const secondH2 = h2Matches[1];
    const insertPosition = htmlContent.indexOf(secondH2) + secondH2.length;
    return htmlContent.slice(0, insertPosition) + ctaHTML + htmlContent.slice(insertPosition);
  }

  // Fallback: inject after first H2 if only one exists
  if (h2Matches && h2Matches.length === 1) {
    const firstH2 = h2Matches[0];
    const insertPosition = htmlContent.indexOf(firstH2) + firstH2.length;
    return htmlContent.slice(0, insertPosition) + ctaHTML + htmlContent.slice(insertPosition);
  }

  // No H2 found, return original content
  return htmlContent;
};
