// components/Modal.tsx

import React from 'react';

// Props for the Modal component
interface ModalProps {
  isOpen: boolean; // Kya modal open hai?
  onClose: () => void; // Close button click par call hone wala function
  children: React.ReactNode; // Modal ke andar ka content (yahan form aayega)
  title: string; // Modal ka title
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) {
    return null; // Agar open nahi hai, to kuch render mat karo
  }

  // Window ke bahar click hone par modal close karne ke liye
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    // Modal Overlay (Puri screen ko cover karega)
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center"
      onClick={handleOverlayClick}
    >
      {/* Modal Content Box */}
      <div className="bg-white p-8 rounded-lg shadow-xl w-11/12 max-w-lg relative">
        {/* Close Button (X) */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 border-b pb-2">{title}</h2>
        
        {/* Children prop will render the Form here */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;