import React, { useState } from "react";
import PropTypes from "prop-types";
import LeadCaptureModal from "./LeadCaptureModal";

const FeaturedTemplate = ({ template }) => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: "",
    description: "",
    buttonText: "",
    action: null,
  });

  const openModal = (action) => {
    setModalState({
      isOpen: true,
      title: action === "download" ? "Download Template" : "Preview Template",
      description: `Enter your details to ${action === "download" ? "download" : "preview"} ${template.title}`,
      buttonText: action === "download" ? "Download Now" : "Preview Now",
      action: action,
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      title: "",
      description: "",
      buttonText: "",
      action: null,
    });
  };

  const handleModalSubmit = () => {
    if (modalState.action === "download") {
      const link = document.createElement("a");
      link.href = template.downloadUrl;
      link.download = `${template.title}.pdf`;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (modalState.action === "preview") {
      window.open(template.previewUrl || template.downloadUrl, "_blank");
    }
  };

  return (
    <>
      <article
        className="rounded-lg p-6 bg-gradient-to-r from-orange-50 to-white shadow-md"
        aria-labelledby={`template-${template.id}-title`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <h3 id={`template-${template.id}-title`} className="text-2xl md:text-3xl font-bold text-slate-900">
              {template.title}
            </h3>
            <p className="mt-3 text-slate-700">{template.excerpt}</p>

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                onClick={() => openModal("download")}
                className="inline-flex items-center px-4 py-2 border border-orange-500 bg-white text-orange-700 rounded shadow-sm text-sm font-medium hover:bg-orange-600 hover:text-white transition cursor-pointer"
                aria-label={`Download ${template.title}`}
              >
                Download
              </button>

             
            </div>
        </div>

        <div className="w-full md:w-40 flex-shrink-0">
          <div className="h-28 md:h-32 bg-white/70 rounded-lg flex items-center justify-center text-sm font-semibold text-slate-600 shadow-inner">
            {template.visualLabel ?? "DOCX • Google Doc"}
          </div>
        </div>
      </div>
    </article>

    <LeadCaptureModal
      isOpen={modalState.isOpen}
      onClose={closeModal}
      title={modalState.title}
      description={modalState.description}
      buttonText={modalState.buttonText}
      onSuccess={handleModalSubmit}
    />
    </>
  );
};

FeaturedTemplate.propTypes = {
  template: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string,
    downloadUrl: PropTypes.string,
    previewUrl: PropTypes.string,
    visualLabel: PropTypes.string,
    popularity: PropTypes.number,
  }).isRequired,
};

export default FeaturedTemplate;
