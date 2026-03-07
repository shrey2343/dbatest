import React, { useState } from "react";
import LeadCaptureModal from "./LeadCaptureModal";

const TemplateCard = ({ t }) => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: "",
    description: "",
    buttonText: "",
    action: null, // 'download' or 'preview'
  });

  const openModal = (action) => {
    setModalState({
      isOpen: true,
      title: action === "download" ? "Download Template" : "Preview Template",
      description: `Enter your details to ${action === "download" ? "download" : "preview"} ${t.title}`,
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
    // After form submission, trigger the download or preview
    if (modalState.action === "download") {
      const link = document.createElement("a");
      link.href = t.downloadUrl;
      link.download = `${t.title}.pdf`;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (modalState.action === "preview") {
      window.open(t.previewUrl || t.downloadUrl, "_blank");
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-slate-800 rounded-lg p-5 shadow-sm hover:shadow-lg transition">
        <h4 className="text-lg font-semibold">{t.title}</h4>
        <p className="mt-2 text-sm text-slate-600">{t.excerpt}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs px-2 py-1 bg-slate-100 rounded text-slate-700">{t.format}</span>
          <div className="flex gap-2">
            <button
              onClick={() => openModal("preview")}
              className="text-sm underline cursor-pointer"
              aria-label={`Preview ${t.title}`}
            >
              Preview
            </button>
            <button
              onClick={() => openModal("download")}
              className="text-sm font-medium cursor-pointer"
              aria-label={`Download ${t.title}`}
            >
              Download
            </button>
          </div>
        </div>
      </div>

      {/* Lead Capture Modal */}
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

export default TemplateCard;
