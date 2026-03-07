import React from "react";

const Hero = ({ title = "Templates", subtitle = "Choose a template" , ctaLabel = "Browse all" , onCta }) => {
  return (
    <header className="bg-gradient-to-r from-orange-50 to-white mt-10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold">{title}</h1>
        <p className="mt-3 text-lg text-slate-600">{subtitle}</p>
        <div className="mt-6">
          <button
            onClick={onCta}
            className="px-5 py-3 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600"
          >
            {ctaLabel}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
