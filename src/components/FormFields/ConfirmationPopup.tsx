import React from "react";

interface ConfirmationPopupProps {
  open: boolean;
  title: string;
  content: React.ReactNode;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({
  open,
  title,
  content,
  onClose,
  onConfirm,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">
          {title} Booking Confirmation
        </h2>
        <div className="mb-4">{content}</div>
        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 text-red-500 border border-red-500 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="font-semibold px-4 py-2 text-white bg-green-600 rounded-md"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
