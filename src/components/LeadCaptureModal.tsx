import React from 'react';
import { X } from 'lucide-react';
import ZohoCRMForm from './ZohoCRMForm';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  buttonText: string;
  onSuccess?: () => void;
  showStartTimeField?: boolean;
}

const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({
  isOpen,
  onClose,
  title,
  description
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <p className="text-gray-600 mb-6">{description}</p>
          
          <ZohoCRMForm />

          <p className="text-xs text-gray-500 mt-4 text-center">
            We respect your privacy. Your information will never be shared.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadCaptureModal;
