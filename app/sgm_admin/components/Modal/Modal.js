import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div className="p-6">
          <div className="w-full flex justify-end">
            <span className="text-black text-[15px] cursor-pointer hover:bg-gray-200 p-2 rounded-md duration-500" onClick={onClose}>
                X
            </span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
