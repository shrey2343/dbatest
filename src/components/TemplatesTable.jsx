import React, { useState } from "react";
import LeadCaptureModal from "./LeadCaptureModal";

const TemplatesTable = ({ templates }) => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: "",
    description: "",
    buttonText: "",
    downloadUrl: "",
    templateTitle: "",
  });

  const openModal = (template) => {
    setModalState({
      isOpen: true,
      title: "Download Template",
      description: `Enter your details to download ${template.title}`,
      buttonText: "Download Now",
      downloadUrl: template.downloadUrl,
      templateTitle: template.title,
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      title: "",
      description: "",
      buttonText: "",
      downloadUrl: "",
      templateTitle: "",
    });
  };

  const handleModalSubmit = () => {
    const link = document.createElement("a");
    link.href = modalState.downloadUrl;
    link.download = `${modalState.templateTitle}.pdf`;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="overflow-x-auto bg-white rounded">
        <table className="min-w-full divide-y">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Template Name</th>
              <th className="px-4 py-2 text-left">Access</th>
              <th className="px-4 py-2 text-left">Format</th>
              <th className="px-4 py-2 text-left">Download</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {templates.map(t => (
              <tr key={t.id}>
                <td className="px-4 py-3">{t.title}</td>
                <td className="px-4 py-3">{t.access}</td>
                <td className="px-4 py-3">{t.format}</td>
                <td className="px-4 py-3">
                  <button onClick={() => openModal(t)} className="underline cursor-pointer">Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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

export default TemplatesTable;
