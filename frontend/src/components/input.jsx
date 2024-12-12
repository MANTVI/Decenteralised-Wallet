import React, { useState } from 'react';

const Input = React.forwardRef(function Input({
  id,
  label,
  type = "text",
  className = "",
  ...props
}, ref) {
    const [copied, setCopied] = useState(false); 

    const handleCopyClick = async () => {
    const inputElement = document.getElementById(id);
    if (inputElement) {
      try {
        // Use Clipboard API to copy the content
        await navigator.clipboard.writeText(inputElement.value);
        setCopied(true); // Update the state to show the success icon

        // Reset copied status after 2 seconds
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    }
  };

  return (
    <div className="bg-transparent w-[520px] h-24 px-4 py-2 lg:mt-8 relative border border-white">
      {label && (
        <label htmlFor={id} className="text-sm text-gray-700">{label}</label>
      )}
      <input
        id={id}
        name="seed"
        type={type}
        className={`bg-transparent text-white flex items-center justify-center h-14 w-[400px] border-none outline-none lg:mt-4 ${className}`}
        ref={ref}
        {...props}
      />
      <button 
        onClick={handleCopyClick} 
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center"
      >
        <span id="default-icon">
          <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
          </svg>
        </span>
        <span id="success-icon" className={`inline-flex items-center ${copied ? 'block' : 'hidden'}`} >
          <svg className="w-3.5 h-3.5 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
          </svg>
        </span>
      </button>
      <div
        id="tooltip-copy-npm-install-copy-button"
        role="tooltip"
        className={`absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm ${copied ? 'opacity-100' : 'opacity-0'} tooltip dark:bg-gray-700 top-[-45px] right-2`}
      >
        <span id="default-tooltip-message">{copied ? 'Copied!' : ''}</span>
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  );
});

export default Input;
